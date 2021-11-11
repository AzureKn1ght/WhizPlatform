// THIS FUNCTION IS TO RETURN THE HIRER DETAILS
exports = async function (payload, response) {
  // Get list of hirers from MongoDB Atlas database
  const hirers = context.services
    .get("mongodb-atlas")
    .db("users")
    .collection("hirers");

  // Convert the received body data from BSON to an EJSON object
  const body = EJSON.parse(payload.body.text());
  // Get the details from the body object
  const _id = new BSON.ObjectId(body._id);

  //Finds document with the id;
  try {
    const result = await hirers.findOne({ _id: _id });

    // Respond with an affirmative result
    if (result) {
      response.setStatusCode(200);
      response.setBody(JSON.stringify(result));
    } else throw "User Not Found!";
  } catch (error) {
    // Some exception has occured
    response.setStatusCode(500);
    response.setBody(`Error: Server has encountered an error. ` + error);
  }
};
