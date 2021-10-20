// SPDX-License-Identifier: MPL-2.0-no-copyleft-exception
pragma solidity ^0.8.7;

contract GigsContract {
    
    //VARIABLES
    address admin;
    uint256 public totalValueLocked;
    enum Status { AWAITING_PAYMENT, AWAITING_DELIVERY, COMPLETED, RESOLVED }

    //This is the USDC erc20 contract address
    //address constant USDCaddress = 0;

    //Object for storing Gig details
    struct Gig {
        address payable hirer;
        address payable freelancer;
        string jobDetails; //to update with Job Obj later
        uint amount;
        Status status;
    }

    //Every gig is mapped to a gigID string
    mapping (string => Gig) public gig;
    
    //Events log
    event CreateGig(string gigID, Gig gig, string msg);
    event ResolveGig(string gigID, Gig gig, string msg);
    event CompleteGig(string gigID, Gig gig, string msg);


    //Initialize contract as admin
    constructor() {
        admin = msg.sender;
    }
    
    //MODIFIERS
    modifier onlyAdmin() {
        require(msg.sender == admin, "Only admin can unlock escrow.");
        _;
    }
    
    
    //FUNCTIONS
    //Hirer deposits funds and initilizes the Gig contract
    function initGigContract(string memory gigID, Gig memory gigDetails) public payable returns (Status)
    {
        gig[gigID] = gigDetails;
        require(msg.sender == gig[gigID].hirer, "Only hirer can initialize a gig contract.");
        require(gig[gigID].status == Status.AWAITING_PAYMENT, "Gig is already initialized.");

        //Gig is created and awaiting delivery
        gig[gigID].status = Status.AWAITING_DELIVERY;
        totalValueLocked += gig[gigID].amount;
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
        totalValueLocked -= myGig.amount;
        freelancer.transfer(myGig.amount);
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
        totalValueLocked -= myGig.amount;
        hirer.transfer(myGig.amount);
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
        totalValueLocked -= myGig.amount;
        freelancer.transfer(myGig.amount);
        myGig.status = Status.COMPLETED;

        emit ResolveGig(gigID, myGig, "Resolved to Freelancer.");
        return true;
    }
   
}
