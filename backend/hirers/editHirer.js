// This function is the webhook's request handler.
exports = async function(payload, response) {
    
    // Get the collection of hirers from MongoDB Atlas
    const hirers = context.services.get("mongodb-atlas").db("jobs").collection("jobs");
    
    
    
  
    
    try{
        
        
        
        // To insert the new field into all hirer records, change the desired_new_field after "set:{ " to the desired field name to be added
        const result = await hirers.updateMany({background:{$exists:false}},{$set:{
         desired_new_field : ""}});
        
        // Respond with an affirmative result
        if(result)
        {
          response.setStatusCode(200)
          response.setBody(JSON.stringify(result));
        }
        else
          throw "User Not Found!";
  
      } catch (error){
        // Some exception has occured
        response.setStatusCode(500)
        response.setBody(`Error: Server has encountered an error. ` + error);
      }
      
    
    
    // This return value does nothing because we already modified the response object.
    // If you do not modify the response object and you enable *Respond with Result*,
    // Realm will include this return value as the response body.
    return { msg: "finished!" };
    
  };