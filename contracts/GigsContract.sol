// SPDX-License-Identifier: MPL-2.0-no-copyleft-exception
pragma solidity ^0.8.7;
import "./ReviewsContract.sol";
import "./WhizToken.sol";


contract GigsContract {
    
    //VARIABLES
    address admin;
    uint public whizRewards;
    uint public totalValueLocked;
    enum Status { AWAITING_PAYMENT, AWAITING_DELIVERY, COMPLETED, RESOLVED }

    //References to the external contract addresses
    address USDCaddress;
    address WHIZaddress;
    address REVIEWSaddress;


    //This is the object for storing all Gig details
    struct Gig {
        string id;
        address hirer;
        address freelancer;
        ReviewsContract.Job jobDetails; 
        uint amountDeposited;
        Status status;
    }

    
    //Each hirer account has array of gigIDs 
    mapping (address => string[]) public hrGigIDs;
    
    //Each freelancer account has array of gigIDs 
    mapping (address => string[]) public flGigIDs;

    //A mapping of all gigID to Gig is maintained
    mapping (string => Gig) public gig;

    
    //Events log
    event CreateGig(string gigID, Gig gig, string msg);
    event ResolveGig(string gigID, Gig gig, string msg);
    event CompleteGig(string gigID, Gig gig, string msg);

    //Initialize smart contract
    constructor() {
        admin = msg.sender;
        USDCaddress = 0xFAFD46f3671b1fcfd7906CAe158C3008c2fFc358;
        WHIZaddress = 0xD2B44b2FF2D07F2b6fad9a728adf176B5639F87B;
        REVIEWSaddress = 0xfb8362626ddE20BC9b8f4e323d49b52D89dD98c8;
        totalValueLocked = 0;
        whizRewards = 100 * 1 ether; //rewards unit stored in wei
    }
    
    //Security for admin functions
    modifier onlyAdmin() {
        require(msg.sender == admin, "Only the admin can access this feature.");
        _;
    }
    
    
    
    ///// ----- CONTRACT FUNCTIONS ----- /////

    //Hirer creates a new gig contract
    //ERC20 tokens get moved to the escrow (this contract)
    function createGigContract(string memory gigID, Gig memory gigDetails, uint amount) 
    public returns (Gig memory) 
    {
        //check if the gigDetails are correct
        require(msg.sender == gigDetails.hirer, "Only hirer can create gig contract.");
        
        //escrow funds from hirer wallet 
        ERC20 usdc = ERC20(USDCaddress);
        usdc.transferFrom(msg.sender, address(this), amount);
        totalValueLocked += amount;
        
        //initialize the new Gig object 
        Gig memory newGig = gigDetails;
        newGig.amountDeposited = amount;
        newGig.status = Status.AWAITING_DELIVERY;
        
        //store the newly created Gig object
        gig[gigID] = newGig;
        
        //assign the gigID to respective fl/hr
        hrGigIDs[newGig.hirer].push(gigID);
        flGigIDs[newGig.freelancer].push(gigID);

        //cleanup - gig contract has been created successfully
        emit CreateGig(gigID, gig[gigID], "Gig created successfully.");
        return gig[gigID];
    }
    
  
    //Hirer confirms a gig delivery 
    //ERC20 tokens transferred to freelancer from this contract
    function confirmGigDelivery(string memory gigID) public returns (Gig memory)
    {
        Gig storage myGig = gig[gigID];

        //check if details of the gig qualify for payment
        require(msg.sender == myGig.hirer, "Only hirer can confirm delivery.");
        require(myGig.status == Status.AWAITING_DELIVERY, "Gig status error.");
        
        //transfer the deposited funds to the freelancer 
        ERC20 usdc = ERC20(USDCaddress);
        usdc.transfer(myGig.freelancer, myGig.amountDeposited);
        totalValueLocked -= myGig.amountDeposited;
        
        //send WHIZ rewards for completion of the gig
        issueWhizRewards(myGig.freelancer, whizRewards); 
        issueWhizRewards(myGig.hirer, whizRewards); 

        //cleanup - gig contract is completed successfully
        myGig.status = Status.COMPLETED;
        gig[gigID] = myGig;
        
        emit CompleteGig(gigID, gig[gigID], "Gig completed successfully.");
        return gig[gigID];
    }
   
   
    //Admin can send funds to hirer if dispute is in hirer's favor
    function resolveFundsToHirer(string memory gigID) public onlyAdmin returns (Gig memory)
    {
        Gig storage myGig = gig[gigID];

        //check if details of the gig qualify to resolve
        require(myGig.status == Status.AWAITING_DELIVERY, "Gig status error.");
        
        //transfer the deposited funds back to the hirer 
        ERC20 usdc = ERC20(USDCaddress);
        usdc.transfer(myGig.hirer, myGig.amountDeposited);
        totalValueLocked -= myGig.amountDeposited;
        
        //cleanup - gig dispute is resolved successfully
        myGig.status = Status.RESOLVED;
        gig[gigID] = myGig;

        emit ResolveGig(gigID, gig[gigID], "Resolved to Hirer.");
        return gig[gigID];
    }
   
   
    //Admin can send funds to freelancer if dispute is in freelancer's favor
    function resolveFundsToFrelancer(string memory gigID) public onlyAdmin returns (Gig memory)
    {
        Gig storage myGig = gig[gigID];

        //check if details of the gig qualify to resolve
        require(myGig.status == Status.AWAITING_DELIVERY, "Gig status error.");
        
        //transfer the deposited funds to the freelancer 
        ERC20 usdc = ERC20(USDCaddress);
        usdc.transfer(myGig.freelancer, myGig.amountDeposited);
        totalValueLocked -= myGig.amountDeposited;
        
        //cleanup - gig dispute is resolved successfully
        myGig.status = Status.RESOLVED;
        gig[gigID] = myGig;
        
        emit ResolveGig(gigID, gig[gigID], "Resolved to Freelancer.");
        return gig[gigID];
    }
   
   
    
    ///// ----- REWARDS FUNCTIONS ----- /////
    
    //Private function, can only be accessed internally
    //Sends WHIZ token rewards to the specified address
    function issueWhizRewards(address recipient, uint amount) private 
    {
        //get amount of WHIZ held in contract
        ERC20 whiz = ERC20(WHIZaddress);
        uint256 whizBalanceAmt = whiz.balanceOf(address(this));
        
        //only issues rewards if sufficient
        if(whizBalanceAmt >= amount)
        {
            whiz.transfer(recipient, amount);
            whizBalanceAmt -= amount;
        }
    }
    
    //Allows admin to top up the available WHIZ balance 
    function depositWhiz(uint amt) public onlyAdmin returns (uint256)
    {
        ERC20 whiz = ERC20(WHIZaddress);
        whiz.transferFrom(msg.sender, address(this), amt);
        return whiz.balanceOf(address(this)); 
    }
    
    //Allows admin to withdraw the available WHIZ balance
    function withdrawWhiz(uint amt) public onlyAdmin returns (uint256)
    {
        //Withdraws ONLY to the admin wallet
        ERC20 whiz = ERC20(WHIZaddress);
        whiz.transfer(admin, amt);
        return whiz.balanceOf(address(this)); 
    }
    
    
    
    ///// ----- GETTER/SETTER FUNCTIONS ----- /////

    //Get the details of a particular Gig contract 
    function getGigDetails(string memory gigID) public 
    view returns (Gig memory)
    {
        return gig[gigID];
    }
    
    //Get the list of all freelancer's Gigs 
    function getAllFreelancerGigs(address fl) public 
    view returns (Gig[] memory)
    {
        //get all the gigIDs associated with fl
        string[] memory allGigIds = flGigIDs[fl];
        uint arrLen = allGigIds.length;
        
        //add the gigDetails to an array
        Gig[] memory myGigs = new Gig[](arrLen);
        for (uint i=0; i<arrLen; i++) 
        {
            myGigs[i] = gig[allGigIds[i]];
        }
        
        //return the list of gigs
        return myGigs;
    }
    
    //Get the list of all the hirer's Gigs 
    function getAllHirerGigs(address hr) public 
    view returns (Gig[] memory)
    {
        //get all the gigIDs associated with hr
        string[] memory allGigIds = hrGigIDs[hr];
        uint arrLen = allGigIds.length;
        
        //add the gigDetails to an array
        Gig[] memory myGigs = new Gig[](arrLen);
        for (uint i=0; i<arrLen; i++) 
        {
            myGigs[i] = gig[allGigIds[i]];
        }
        
        //return the list of gigs
        return myGigs;
    }
    
    //Update the USDC/stablecoin token contract address 
    function setUSDCaddress(address a) public onlyAdmin returns (address)
    {
        USDCaddress = a;
        return USDCaddress;
    }
    
    //Update the WHIZ token contract address 
    function setWHIZaddress(address a) public onlyAdmin returns (address)
    {
        WHIZaddress = a;
        return WHIZaddress;
    }

    //Update the ReviewsContract address 
    function setREVIEWSaddress(address a) public onlyAdmin returns (address)
    {
        REVIEWSaddress = a;
        return REVIEWSaddress;
    }
    
    //Update the amount of WHIZ rewards to be issued 
    function setWHIZrewards(uint amt) public onlyAdmin returns (uint)
    {
        whizRewards = amt;
        return whizRewards;
    }
   
}
