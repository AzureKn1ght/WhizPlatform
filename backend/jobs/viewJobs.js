exports = async function (payload, response) {
  // Get list of jobs from MongoDB Atlas database
  const collection = context.services
    .get("mongodb-atlas")
    .db("jobs")
    .collection("jobs");
  let jobsList = await collection.find({ gig_status: "OPEN" }).toArray();

  // Return the list of all freelancers
  response.setStatusCode(200);
  response.setBody(JSON.stringify(jobsList));
};
