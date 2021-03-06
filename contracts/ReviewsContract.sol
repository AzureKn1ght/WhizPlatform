// SPDX-License-Identifier: MPL-2.0-no-copyleft-exception
pragma solidity ^0.8.7;


contract ReviewsContract
{
    
    //Global Variables
    address owner;
    uint public totalReviewsCounter;
    constructor() 
    {
        owner = msg.sender;
        totalReviewsCounter = 0;
    }
    
    //Score variable definition (Rating 1-5, 0 = NIL)
    enum Score { NIL, BAD, CAN_IMPROVE, SATISFACTORY, GOOD, VERY_GOOD }
    
    //Grade variable definition (Grade 1-2, 0 = NIL)
    enum Grade { NIL, EXCEEDS_EXPECTATIONS, MEETS_EXPECTATIONS }

    //Rating data type definition
    struct Rating
    {
        Grade grading;
        Score overall;
        Score quality;
        Score communication;
        Score timeliness; 
    }


    //Job data type definition    
    struct Job
    {
        string jobID;
        uint budget;
        string title;
        string description;
        string[] skills;
        string location;
    }
    

    //Review data type definition
    struct Review
    {
        uint reviewID;
        address reviewer;
        address reviewee;
        Rating ratings;
        string comments;
        Job job;
    }
    
    
    //One account can hold many Reviews (both received and written)      
    mapping (address => Review[]) public __receivedReviews;
    mapping (address => Review[]) public __writtenReviews;

    //EVENTS, basically just a console.log for transactions log
    event Add(address reviewerAddress, address revieweeAddress, Review review);
    

    //GET TOTAL NO OF REVIEWS AN ACCOUNT HAS RECEIVED
    function getNoOfReceivedReviews(address reviewOwner) view public returns (uint)
    {
        uint quantity;
        quantity = __receivedReviews[reviewOwner].length;
        return quantity;
    }
    
    
    //GET TOTAL NO OF REVIEWS AN ACCOUNT HAS WRITTEN
    function getNoOfWrittenReviews(address reviewOwner) view public returns (uint)
    {
        uint quantity;
        quantity = __writtenReviews[reviewOwner].length;
        return quantity;
    }
    
    
    //RETURNS ALL THE REVIEWS AN ACCOUNT HAS RECEIVED
    function getAllReceivedReviews(address reviewOwner) public view returns (Review[] memory)
    {
        //Just retrieve the Reviews, no need permanent storage 
        Review[] memory myReviews = __receivedReviews[reviewOwner];
        return myReviews;
    }
    
    
    //RETURNS ALL THE REVIEWS AN ACCOUNT HAS WRITTEN
    function getAllWrittenReviews(address reviewOwner) public view returns (Review[] memory)
    {
        //Just retrieve the Reviews, no need permanent storage 
        Review[] memory myReviews = __writtenReviews[reviewOwner];
        return myReviews;
    }    
    
    
    
    //CREATES A NEW REVIEWS AND ADDS TO THE APPROPRIATE REVIEWER/REVEIWEE ADDRESS
    function addReview(Review memory review) public 
    {
        //Increment counter and create new Review
        totalReviewsCounter = totalReviewsCounter + 1;
        Review memory newReview = review;
        newReview.reviewID = totalReviewsCounter;
        
        //Add the newReview to the lists of Reviews
        address reviewerAddress = newReview.reviewer; 
        address revieweeAddress = newReview.reviewee;
        __receivedReviews[revieweeAddress].push(newReview);
        __writtenReviews[reviewerAddress].push(newReview);
        
        emit Add(reviewerAddress, revieweeAddress, newReview);
    }
    

}
