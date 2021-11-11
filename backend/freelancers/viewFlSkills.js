// THIS FUNCTION IS TO search for a specific freelancer that the frontend sends to the backend
exports = async function(payload, response) {
   
    // Get list of freelancers from MongoDB Atlas database
    const freelancers = context.services.get("mongodb-atlas").db("users").collection("freelancers");
    
    // Convert the received body data from BSON to an EJSON object
   const body = EJSON.parse(payload.body.text());
   // Get the details from the body object
   const _id = new BSON.ObjectId(body._id);
 
   //Finds document with the id of the specific freelancer;
   try{
   const result = await freelancers.findOne({_id:_id});
 
   // Respond with an affirmative result and returns the json of the freelancer records in the database
       if(result)
       {
         response.setStatusCode(200)
         response.setBody(JSON.stringify(result));
       }
       else
       // Respond with a negative result if the freelancer not found
         throw "User Not Found!";
       
     } catch (error){
       // Some exception has occured
       response.setStatusCode(500)
       response.setBody(`Error: Server has encountered an error. ` + error);
     }
 };