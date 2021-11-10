// This function handles the login attempt by a freelancer.
exports = async function(payload, response) {
    
    // Get the collection of freelancers from MongoDB Atlas
    const freelancers = context.services.get("mongodb-atlas").db("users").collection("freelancers");
    // Convert the received body data from BSON to an EJSON object
    const body = EJSON.parse(payload.body.text());
    
    // Get all the details from the body object
    const metamask = body.metamask;
  
    
    try{
        // Find the freelancer with the given metamask address
        const result = await freelancers.findOne({
          metamask: metamask});
        
        // Respond with an affirmative result if the freelancer exists
        if(result)
        {
          response.setStatusCode(200)
          response.setBody(JSON.stringify(result));
        }
        else
        // Respond with a negative result if no matching user is found
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