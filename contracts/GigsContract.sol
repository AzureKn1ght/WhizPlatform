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
        address hirer;
        address freelancer;
        ReviewsContract.Job jobDetails; 
        uint amountDeposited;
        Status status;
    }


    //Every hirer has a mapping of gigs by the gigID string
    mapping(address => mapping(string => Gig)) public myGigs; 
    
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
        whizRewards = 100;
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
        //transfer USDC from hirer wallet to this contract
        ERC20 usdc = ERC20(USDCaddress);
        usdc.transferFrom(msg.sender, address(this), amount);
        totalValueLocked += amount;
        
        //initialize new Gig object by hirer address and gigID
        myGigs[msg.sender][gigID] = gigDetails;
        myGigs[msg.sender][gigID].amountDeposited = amount;
        myGigs[msg.sender][gigID].status = Status.AWAITING_DELIVERY;

        //cleanup - gig contract has been created successfully
        emit CreateGig(gigID, myGigs[msg.sender][gigID], "Gig created successfully.");
        return myGigs[msg.sender][gigID];
    }
    
  
    //Hirer confirms a gig delivery 
    //ERC20 tokens transferred to freelancer from this contract
    function confirmGigDelivery(string memory gigID) public returns (Gig memory)
    {
        Gig storage gig = myGigs[msg.sender][gigID];

        //check if details of the gig qualify for payment
        require(msg.sender == gig.hirer, "Only hirer can confirm delivery.");
        require(gig.status == Status.AWAITING_DELIVERY, "Gig status error.");
        
        //transfer the deposited funds to the freelancer 
        ERC20 usdc = ERC20(USDCaddress);
        usdc.transfer(gig.freelancer, gig.amountDeposited);
        totalValueLocked -= gig.amountDeposited;
        
        //send WHIZ rewards for completion of the gig
        issueWhizRewards(gig.freelancer, whizRewards); 
        issueWhizRewards(gig.hirer, whizRewards); 

        //cleanup - gig contract is completed successfully
        gig.status = Status.COMPLETED;
        emit CompleteGig(gigID, gig, "Gig completed successfully.");
        return gig;
    }
   
   
    //Admin can send funds to hirer if dispute is in hirer's favor
    function resolveFundsToHirer(address hirer, string memory gigID) public onlyAdmin returns (Gig memory)
    {
        //Get the gig details from the hirer's records
        Gig storage gig = myGigs[hirer][gigID];

        //check if details of the gig qualify to resolve
        require(gig.status == Status.AWAITING_DELIVERY, "Gig status error.");
        
        //transfer the deposited funds back to the hirer 
        ERC20 usdc = ERC20(USDCaddress);
        usdc.transfer(gig.hirer, gig.amountDeposited);
        totalValueLocked -= gig.amountDeposited;
        
        //cleanup - gig dispute is resolved successfully
        gig.status = Status.RESOLVED;
        emit ResolveGig(gigID, gig, "Resolved to Hirer.");
        return gig;
    }
   
   
    //Admin can send funds to freelancer if dispute is in freelancer's favor
    function resolveFundsToFrelancer(address hirer, string memory gigID) public onlyAdmin returns (Gig memory)
    {
        //Get the gig details from the hirer's records
        Gig storage gig = myGigs[hirer][gigID];

        //check if details of the gig qualify to resolve
        require(gig.status == Status.AWAITING_DELIVERY, "Gig status error.");
        
        //transfer the deposited funds to the freelancer 
        ERC20 usdc = ERC20(USDCaddress);
        usdc.transfer(gig.freelancer, gig.amountDeposited);
        totalValueLocked -= gig.amountDeposited;
        
        //cleanup - gig dispute is resolved successfully
        gig.status = Status.RESOLVED;
        emit ResolveGig(gigID, gig, "Resolved to Freelancer.");
        return gig;
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
    function getGigDetails(address hirer, string memory gigID) public 
    view returns (Gig memory)
    {
        return myGigs[hirer][gigID];
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
