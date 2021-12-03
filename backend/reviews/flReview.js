// This function creates a new review
exports = async function(payload, response) {
    
    // Get the collection of reviews from MongoDB Atlas
    const reviews = context.services.get("mongodb-atlas").db("reviews").collection("reviews");
    const jobs = context.services.get("mongodb-atlas").db("jobs").collection("jobs");
    // Convert the received body data from BSON to an EJSON object
    const body = EJSON.parse(payload.body.text());
    
    // Get all the details from the body object
    const reviewID = body.reviewID;
    const reviewer = body.reviewer;
    const reviewee = body.reviewee;
    const ratings = body.ratings;
    const comments = body.comments;
    const job = body.job;
    const id = body.job.jobID;
    const _id = new BSON.ObjectId(id);
    
    
    // Check whether review already exists in the database 
    const exists = await reviews.findOne({"job.jobID": id });
    
  
    // If doesn't exist lets insert a new review record
    if(body && !exists) {
      try{
        
     
        
        // Insert review record
        const result = await reviews.insertOne({
          reviewID:reviewID ,
          reviewer: reviewer,
          reviewee: reviewee,
          ratings:ratings,
          comments:comments,
          job:job,
        });
        
        
        const updated = await jobs.findOneAndUpdate({_id:_id},{$set:{gig_status:"DELIVERED"}});
        // Respond with an affirmative result
        response.setStatusCode(200)
        response.setBody(JSON.stringify(result));
        
      } catch (error){
        // Some exception has occured
        response.setStatusCode(500)
        response.setBody(`Error: Server has encountered an error. ` + error);
      }
      
    } else {
      // Respond with a malformed request error
      response.setStatusCode(400)
      response.setBody(`Error: job already exists or malformed inputs.` +error);
    }
    
    
    // This return value does nothing because we already modified the response object.
    // If you do not modify the response object and you enable *Respond with Result*,
    // Realm will include this return value as the response body.
    return { msg: "finished!" };
    
  };