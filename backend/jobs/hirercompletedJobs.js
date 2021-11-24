// This function is used to get the completed jobs of the hirer
exports = async function(payload, response) {

    const jobs = context.services.get("mongodb-atlas").db("jobs").collection("jobs");
  
  // Convert the received body data from BSON to an EJSON object
    const body = EJSON.parse(payload.body.text());
    
  // Get all the details from the body object
    const hirer = body.hirer;
    
    try{
  // Finds document with the given hirer id and returns the jobs that are completed
    const result = await jobs.find({job_hirer:hirer ,gig_status:"COMPLETED"}).sort({created:-1}).limit(8).toArray();
    
    if(!result) throw "No completed jobs found"
    
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