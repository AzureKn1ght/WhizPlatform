// This function returns the list of jobs open for application
exports = async function(payload, response) {

    const jobs = context.services.get("mongodb-atlas").db("jobs").collection("jobs");
  
  // Convert the received body data from BSON to an EJSON object
    const body = EJSON.parse(payload.body.text());
    
  // Get all the details from the body object
    const hirer = body.hirer;
    try{
  // Finds document with the jobs with status assigned or delivered;
    const result = await jobs.find({job_hirer:hirer, gig_status:{$in:["ASSIGNED","DELIVERED"]}}).sort({created:-1}).limit(8).toArray();
    
    const ongoingJobs = { gigs:result
      
    }
  
    response.setStatusCode(200)
        response.setBody(JSON.stringify(ongoingJobs));
  }catch(error){
    response.setStatusCode(500)
    response.setBody("Server encountered an error" + error)
  }
  
  }