// This function retuns the recommended jobs for the user
exports = async function(payload, response) {

    const jobs = context.services.get("mongodb-atlas").db("jobs").collection("jobs");
  
  // Convert the received body data from BSON to an EJSON object
    const body = EJSON.parse(payload.body.text());
    
  // Get all the details from the body object
    let skills = body.skills;
    
  
  try{
    // Finds the document with the skills in skils required by the user
    const result = await jobs.find({gig_status:"OPEN",skills_required:{$in:skills}}).sort({created:-1}).limit(8).toArray();
    
    if(!result) throw "No jobs available for those skills!";
    
    const recommendedJobs = { gigs:result
      
    }
  
    response.setStatusCode(200)
        response.setBody(JSON.stringify(recommendedJobs));
        
  }catch (error){
        // Some exception has occured
        response.setStatusCode(500)
        response.setBody(`Error: Server has encountered an error. ` + error);
      }
  };