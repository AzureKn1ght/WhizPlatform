// This function returns all the jobs the user has applied to.
exports = async function(payload, response) {

    const jobs = context.services.get("mongodb-atlas").db("jobs").collection("jobs");
  
  // Convert the received body data from BSON to an EJSON object
    const body = EJSON.parse(payload.body.text());
    
  // Get all the details from the body object
    const applicant = body.applicant;
  // Finds document with the applicant;
  
  try{
    const result = await jobs.find({applicants:applicant,gig_status:"OPEN"}).sort({created:-1}).limit(8).toArray();
    
    if(!result) throw "No applied jobs found"
    
    const appliedJobs = { gigs:result
      
    }
  
    response.setStatusCode(200)
        response.setBody(JSON.stringify(appliedJobs));
        
    
  }catch (error){
        // Some exception has occured
        response.setStatusCode(500)
        response.setBody(`Error: Server has encountered an error. ` + error);
  }
  }