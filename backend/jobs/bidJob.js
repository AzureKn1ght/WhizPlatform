// This function adds an applicant to an open job.
exports = async function(payload, response) {

    const jobs = context.services.get("mongodb-atlas").db("jobs").collection("jobs");
  
    // Convert the received body data from BSON to an EJSON object
    const body = EJSON.parse(payload.body.text());
    
    // Get all the details from the body object
    const _id = new BSON.ObjectId(body._id);
    const applicants = body.applicants
    
    // Finds document with the id;
    const applied = await jobs.findOne({_id:_id, applicants:applicants});
    
    
    if(applied)
    {
        //if user has already applied for the job then return error
      throw "You have already applied for this job!";
    }
    else
    {
      try{
        //adds the applicant to the job
          const result = await jobs.findOneAndUpdate({_id:_id},{$push:{applicants:applicants}});
    
          response.setStatusCode(200);
          response.setBody(JSON.stringify(result));
      }
      catch (error){
          // Some exception has occured
          response.setStatusCode(500)
          response.setBody(`Error: Server has encountered an error. ` + error);
      }
    }
    
  };
  