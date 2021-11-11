// This function is the registers a new hirer profile.
exports = async function(payload, response) {
    
    // Get the collection of freelancers from MongoDB Atlas
    const hirers = context.services.get("mongodb-atlas").db("users").collection("hirers");
    // Convert the received body data from BSON to an EJSON object
    const body = EJSON.parse(payload.body.text());
    
    // Get all the details from the body object
    const email = body.email;
    const metamask = body.meta;
    const country_operations = body.country_operations;
    const company_name = body.company_name;
    const full_name = body.full_name;
    const country_id = body.country_id;
    const skills = body.skills;
    const industry = body.industry;
    const languages = body.languages;
    
    
    // Check whether metamask wallet address already exists in the database 
    const exists = await hirers.findOne({metamask: metamask});
    
  
    // If doesn't exist lets insert a new hirer record
    if(body && !exists) {
      try{

        
        // Insert hirer record
        const result = await hirers.insertOne({
            email: email,
            metamask: metamask,
            country_operations: country_operations,
            company_name: company_name,
            full_name: full_name,
            country_id: country_id,
            skills: skills,
            industry: industry,
            languages: languages,
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