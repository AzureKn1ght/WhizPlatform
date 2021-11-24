// This function gets the job information for the requested job id.
exports = async function(payload, response) {

    const jobs = context.services.get("mongodb-atlas").db("jobs").collection("jobs");
  
  // Convert the received body data from BSON to an EJSON object
    const body = EJSON.parse(payload.body.text());
    
  // Get all the details from the body object
    const _id = new BSON.ObjectId(body._id);
  // Finds document with the id;
    const result = await jobs.findOne({_id:_id})
  
   //returns the result
    response.setStatusCode(200)
        response.setBody(JSON.stringify(result));
  }