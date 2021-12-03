// This function is the webhook's request handler.
exports = async function(payload, response) {

    const jobs = context.services.get("mongodb-atlas").db("jobs").collection("jobs");
  
  // Convert the received body data from BSON to an EJSON object
    const body = EJSON.parse(payload.body.text());
    
  // Get all the details from the body object
    const applicant = body.applicant;
    try{
  // Finds document with the applicant and gig status of ASSIGNED and DELIVERED
    const result = await jobs.find({freelancer:applicant,gig_status:{$in:["ASSIGNED","DELIVERED"]}}).sort({created:-1}).limit(8).toArray();
    
    const appliedJobs = { gigs:result
      
    }
  
    response.setStatusCode(200)
        response.setBody(JSON.stringify(appliedJobs));
  }catch(error){
    response.setStatusCode(500)
    response.setBody("Server encountered an error" + error)
  }
  
  }