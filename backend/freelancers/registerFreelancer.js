// This function is the handles the registration by a freelancer.
exports = async function(payload, response) {
    
    // Get the collection of freelancers from MongoDB Atlas
    const freelancers = context.services.get("mongodb-atlas").db("users").collection("freelancers");
    // Convert the received body data from BSON to an EJSON object
    const body = EJSON.parse(payload.body.text());
    
    // Get all the details from the body object
    const email = body.email;
    const metamask = body.meta;
    const country_residence = body.country_residence;
    const full_name = body.full_name;
    const country_id = body.country_id;
    const languages = body.languages;
    const skills = body.skills;
    
    // Check whether the metamask wallet address already exists in the database 
    const exists = await freelancers.findOne({metamask: metamask});
    
  
    // If doesn't exist lets insert a new freelancer record
    if(body && !exists) {
      try{
        
        
        // Insert the new freelancer record
        const result = await freelancers.insertOne({
          email: email,
          metamask: metamask,
          country_residence: country_residence,
          full_name: full_name,
          country_id: country_id,
          skills: skills,
          languages: languages
        });
        
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
      response.setBody(`Error: Account already exists or malformed inputs.`);
    }
    
    
    // This return value does nothing because we already modified the response object.
    // If you do not modify the response object and you enable *Respond with Result*,
    // Realm will include this return value as the response body.
    return { msg: "finished!" };
    
  };