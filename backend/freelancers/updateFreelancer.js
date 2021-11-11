// This function is .
exports = async function(payload, response) {
    
    // Get the collection of freelancers from MongoDB Atlas
    const freelancers = context.services.get("mongodb-atlas").db("users").collection("freelancers");
    // Convert the received body data from BSON to an EJSON object
    const body = EJSON.parse(payload.body.text());
    
    // Get all the details from the body object
    //const metamask = body.metamask;
  
    
    try{
        
        
        
        // To insert the new field into all freelancer records, change the desired_new_field after "set:{ " to the desired field name to be added
        const result = await freelancers.updateMany({},{$set:{
        desired_new_field: ""}});
        
        // Respond with an affirmative result
        if(result)
        {
          response.setStatusCode(200)
          response.setBody(JSON.stringify(result));
        }
        else
        // Respond with a negative result if the update failed
          throw "Adding not successful!";
  
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