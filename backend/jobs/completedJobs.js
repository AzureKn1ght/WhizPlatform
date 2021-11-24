// This function returns the completed jobs
exports = async function(payload, response) {

    const jobs = context.services.get("mongodb-atlas").db("jobs").collection("jobs");
  
  // Convert the received body data from BSON to an EJSON object
    const body = EJSON.parse(payload.body.text());
    
  // Get all the details from the body object
    const applicant = body.applicant;
  // Finds document where the user has been assigned as the freelancer and job status is completed abd sorts it according to the latest jobs and limited to 8 jobs;
    const result = await jobs.find({freelancer:applicant,gig_status:"COMPLETED"}).sort({created:-1}).limit(8).toArray();
    
    const appliedJobs = { gigs:result
      
    }
  
    response.setStatusCode(200)
        response.setBody(JSON.stringify(appliedJobs));
  }