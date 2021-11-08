// THIS FUNCTION IS TO RETURN LIST OF ALL FREELANCERS
exports = async function (payload, response) {
  // Get list of freelancers from MongoDB Atlas database
  const collection = context.services
    .get("mongodb-atlas")
    .db("users")
    .collection("freelancers");
  let freelancersList = await collection.find().toArray();

  // Return the list of all freelancers
  return freelancersList;
};
