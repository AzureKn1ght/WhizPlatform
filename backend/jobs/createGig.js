// This function create a new gig.
exports = async function(payload, response) {

    const jobs = context.services.get("mongodb-atlas").db("jobs").collection("jobs");
  
   // Convert the received body data from BSON to an EJSON object
    const body = EJSON.parse(payload.body.text());
    
    // Get all the details from the body object
    const title = body.title;
    const budget = body.budget;
    const description = body.description;
    const deadline = new Date(body.deadline);
    const skills = body.skills;
    const location = body.location;
    const hirer = body.hirer;
    const hirerName = body.hirerName;
    const background= body.background;
    const created = new Date();
    
    
  
    // If body has content insert job
    if(body) {
      try{
        
        // Insert job record
        const result = await jobs.insertOne({
            title:title,
            budget:budget,
            description:description,
            deadline:deadline,
            skills_required:skills,
            required_location:location,
            job_hirer:hirer,
            freelancer:"",
            gig_status:"OPEN",
            applicants:[],
            payment_status:"",
            freelancer_name:"",
            hirer_name:hirerName,
            created:created,
            background:background,
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
  
  }