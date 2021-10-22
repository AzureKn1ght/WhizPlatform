// SPDX-License-Identifier: MPL-2.0-no-copyleft-exception
pragma solidity ^0.8.7;
import "./ReviewsContract.sol";
import "./WhizToken.sol";

contract GigsContract {
    
    //VARIABLES
    address admin;
    uint public whizRewards;
    uint256 public totalValueLocked;
    enum Status { AWAITING_PAYMENT, AWAITING_DELIVERY, COMPLETED, RESOLVED }

    //References to external contract addresses
    address USDCaddress;
    address WHIZaddress;
    address REVIEWSaddress;


    //Create the object for storing all Gig details
    struct Gig {
        address payable hirer;
        address payable freelancer;
        ReviewsContract.Job jobDetails; //Job Obj
        uint amountDeposited;
        Status status;
    }


    //Every gig is mapped to a gigID string
    mapping (string => Gig) public gig;
    mapping(address => mapping(string => Gig)) public myGigs; //ideal state: mapping of mappings
    
    //Events log
    event CreateGig(string gigID, Gig gig, string msg);
    event ResolveGig(string gigID, Gig gig, string msg);
    event CompleteGig(string gigID, Gig gig, string msg);

    //Initialize contract admin
    constructor() {
        admin = msg.sender;
    }
    
    //Modifier - Secure admin functions
    modifier onlyAdmin() {
        require(msg.sender == admin, "Only the admin can access this feature.");
        _;
    }
    
    
    
    ///// ----- CONTRACT FUNCTIONS ----- /////
    
    //Hirer deposits funds and initilizes the Gig contract
    function initGigContract(string memory gigID, Gig memory gigDetails) public payable returns (Status)
    {
        gig[gigID] = gigDetails;
        require(msg.sender == gig[gigID].hirer, "Only hirer can initialize a gig contract.");
        require(gig[gigID].status == Status.AWAITING_PAYMENT, "Gig is already initialized.");

        //Gig is created and awaiting delivery
        gig[gigID].status = Status.AWAITING_DELIVERY;
        totalValueLocked += gig[gigID].amountDeposited;
        emit CreateGig(gigID, gig[gigID], "Gig created successfully.");
        return gig[gigID].status;
    }
    
    
    //Hirer can confirm delivery when gig is completed
    function confirmDelivery(string memory gigID) public returns (bool)
    {
        Gig storage myGig = gig[gigID];
        address payable freelancer = myGig.freelancer;
        
        //check details of the gig
        require(msg.sender == myGig.hirer, "Only hirer can confirm delivery.");
        require(myGig.status == Status.AWAITING_DELIVERY, "Gig status error.");
        
        //complete the gig anf payout
        totalValueLocked -= myGig.amountDeposited;
        freelancer.transfer(myGig.amountDeposited);
        myGig.status = Status.RESOLVED;

        emit CompleteGig(gigID, myGig, "Gig completed successfully.");
        return true;
    }
   
   
    //Admin can send funds to hirer if dispute is in hirer's favor
    function resolveToHirer(string memory gigID) public onlyAdmin returns (bool)
    {
        Gig storage myGig = gig[gigID];
        address payable hirer = myGig.hirer;
        
        require(myGig.status == Status.AWAITING_DELIVERY, "Gig status error.");
        totalValueLocked -= myGig.amountDeposited;
        hirer.transfer(myGig.amountDeposited);
        myGig.status = Status.RESOLVED;

        emit ResolveGig(gigID, myGig, "Resolved to Hirer.");
        return true;
    }
   
   
    //Admin can send funds to freelancer if dispute is in freelancer's favor
    function resolveToFreelancer(string memory gigID) public onlyAdmin returns (bool)
    {
        Gig storage myGig = gig[gigID];
        address payable freelancer = myGig.freelancer;
        
        require(myGig.status == Status.AWAITING_DELIVERY, "Gig status error.");
        totalValueLocked -= myGig.amountDeposited;
        freelancer.transfer(myGig.amountDeposited);
        myGig.status = Status.COMPLETED;

        emit ResolveGig(gigID, myGig, "Resolved to Freelancer.");
        return true;
    }
    
    
    
    ///// ----- GETTER/SETTER FUNCTIONS ----- /////

    //Get the details of a particular Gig contract 
    function getGigDetails(address hirer, string memory gigID) public view returns (Gig memory)
    {
        return myGigs[hirer][gigID];
    }
    
    //Update the USDC/stablecoin token contract address 
    function setUSDCaddress(address a) public onlyAdmin returns (bool)
    {
        USDCaddress = a;
        return true;
    }
    
    //Update the WHIZ token contract address 
    function setWHIZaddress(address a) public onlyAdmin returns (bool)
    {
        WHIZaddress = a;
        return true;
    }

    //Update the ReviewsContract address 
    function setREVIEWSaddress(address a) public onlyAdmin returns (bool)
    {
        REVIEWSaddress = a;
        return true;
    }
    
    //Update the amount of WHIZ rewards to be issued 
    function setWHIZrewards(uint amt) public onlyAdmin returns (bool)
    {
        whizRewards = amt;
        return true;
    }
   
}
