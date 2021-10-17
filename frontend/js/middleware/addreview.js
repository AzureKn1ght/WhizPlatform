// (c) AzureKn1ght
const overallHirerRating = document.getElementById("overall_rating");
const jobBriefRating = document.getElementById("job_brief_rating");
const communicationRating = document.getElementById("comms_rating");
const comments = document.getElementById("comments");
const submitReviewFreelancer = document.getElementById(
  "submitfreelancerreview"
);
const web3 = new Web3(window.ethereum);
const conAddress = "0x829e6577d8F871f30bA187bdc481Da0e2F3b66Fe";
const contract = new web3.eth.Contract(abi, conAddress);

//Goals (goal_id, description, balance, date_created, user_id);

//Add Goal Function

//Create Contract instance
const reviewAdd = async (e) => {
  e.preventDefault(); //to prevent form from submitting and refreshing the page

  //to prevent empty input from submitting
  if (
    !overallHirerRating.value ||
    !jobBriefRating.value ||
    !communicationRating.value
  ) {
    alert("Error: Please check your inputs.");
    return;
  }

  //Step 1: Get the input data from the form
  var o = parseInt(
    overallHirerRating.options[overallHirerRating.selectedIndex].value
  );
  var j = parseInt(jobBriefRating.options[jobBriefRating.selectedIndex].value);
  var cR = parseInt(
    communicationRating.options[communicationRating.selectedIndex].value
  );
  var c = comments.value;

  var ratings = {
    overallRating: o,
    jobDescription: j,
    communication: cR,
    workQuality: 0,
    timeliness: 0,
  };

  console.log(ratings);

  var input = {
    reviewID: 0,
    reviewer: currentAccount,
    reviewee: currentAccount,
    ratings: ratings,
    comments: c,
    job: jobDetails,
  };

  console.log(input);
  //Step 2: Send transaction to smart contract

  contract.methods
    .addReview(input)
    .send({
      from: currentAccount,
    })
    .then((receipt) => {
      console.log(receipt);
      //window.location.href = "dashboard.html";
    })
    .catch((error) => {
      console.log(error);
    });

  //Alert user to wait for transactions
  alert("Processing: sending your request");
  console.log("Mark as complete: processing...");
};

//Add event listener for buttons
submitReviewFreelancer.addEventListener("click", reviewAdd);
/* document.getElementById("b2").onclick = function () {
  location.href = "dashboard.html";
}; */
