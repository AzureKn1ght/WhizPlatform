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
    enum Rating { NIL, BAD, CAN_IMPROVE, SATISFACTORY, GOOD, VERY_GOOD }
    Rating constant defaultRating = Rating.NIL;

    //Ratings data type definition
    struct Ratings
    {
        Rating overallRating;
        Rating jobDescription;
        Rating communication;
        Rating workQuality;
        Rating timeliness; 
    }

    
    //User data type definition
    struct User
    {
        address userAddress;
        string userName;
    }
    

    //Review data type definition
    struct Review
    {
        uint reviewID;
        User reviewer;
        User reviewee;
        Ratings ratings;
        string comments;
    }
    
    
    //One account can hold many Reviews (both received and written)      
    mapping (address => Review[]) public __receivedReviews;
    mapping (address => Review[]) public __writtenReviews;


    //// WIP ////
    

}
