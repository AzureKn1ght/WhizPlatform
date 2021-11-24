// THIS FUNCTION IS TO RETURN THE REVIEWS OF THE JOB ID
exports = async function(payload, response) {
   
    // Get list of freelancers from MongoDB Atlas database
    const reviews = context.services.get("mongodb-atlas").db("reviews").collection("reviews");
    
    // Convert the received body data from BSON to an EJSON object
   const body = EJSON.parse(payload.body.text());
   // Get the details from the body object
   const id = body.id;
 
   //Finds document with the job id;
   try{
   const result = await reviews.findOne({"job.jobID":id});
   
   
 
   // Respond with an affirmative result
       if(result)
       {
         response.setStatusCode(200)
         response.setBody(JSON.stringify(result));
       }
       else
         throw "Review Not Found!";
       
     } catch (error){
       // Some exception has occured
       response.setStatusCode(500)
       response.setBody(`Error: Server has encountered an error. ` + error);
     }
 };