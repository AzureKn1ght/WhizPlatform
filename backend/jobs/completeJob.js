// This function is called to mark a job as complete
exports = async function(payload, response) {

    const jobs = context.services.get("mongodb-atlas").db("jobs").collection("jobs");
  
    // Convert the received body data from BSON to an EJSON object
    const body = EJSON.parse(payload.body.text());
    
    // Get all the details from the body object
    const _id = new BSON.ObjectId(body._id);
    const freelancer = body.freelancer
    
    try{
          // Finds document with the id and status delivered;
          const delivered = await jobs.findOne({_id:_id, gig_status:"DELIVERED"});
  
            if(!delivered)
            {
              throw "Job has not been delivered!";
            }
            else
            {
                // Update the job status to complete
              const result = await jobs.findOneAndUpdate({_id:_id},{$set:{gig_status:"COMPLETED",payment_status:"PAID"}});
    
              response.setStatusCode(200);
              response.setBody(JSON.stringify(result));
            } 
    }
      catch (error){
          // Some exception has occured
          response.setStatusCode(500)
          response.setBody(`Error: Server has encountered an error. ` + error);
      }
    
    
  };
  