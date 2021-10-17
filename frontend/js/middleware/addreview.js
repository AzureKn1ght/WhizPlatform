// (c) AzureKn1ght
const overallHirerRating = document.getElementById("overall_rating");
const jobBriefRating = document.getElementById("job_brief_rating");
const communicationRating = document.getElementById("comms_rating");
const comments = document.getElementById("comments");
const submitReviewFreelancer = document.getElementById("submitfreelancerreview");
const web3 = new Web3(window.ethereum);
const conAddress = "0xc27bdDa1f693a1f20F69d3B1a377F2BCe0840241";
const contract = new web3.eth.Contract(abi, conAddress);
  
//Goals (goal_id, description, balance, date_created, user_id);

//Add Goal Function

//Create Contract instance
const reviewAdd = async (e) => {
  

  e.preventDefault(); //to prevent form from submitting and refreshing the page

  //to prevent empty input from submitting
  if (!overallHirerRating.value || !jobBriefRating.value || !communicationRating.value ) {
    alert("Error: Please check your inputs.");
    return;
  }

  //Step 1: Get the input data from the form
  var  o = overallHirerRating.options[overallHirerRating.selectedIndex].text;
  var j = jobBriefRating.options[jobBriefRating.selectedIndex].text;
  var cR = communicationRating.options[communicationRating.selectedIndex].text;
  var c = comments.value;

  var test = {
    reviewID: 0,
    reviewer: 0x769c4342bac4559cd32c9d5b0f9109131c934a0f,
    reviewee: 0x769c4342bac4559cd32c9d5b0f9109131c934a0f,
    overallrating: o,
    jobbriefrating: j,
    comms: cR,
    comments: c
  };

  console.log(test);

 /*  var input = {
         reviewID: 0,
         reviewer: 0x769c4342bac4559cd32c9d5b0f9109131c934a0f,
         reviewee: 0x769c4342bac4559cd32c9d5b0f9109131c934a0f,
         comments: 'some comment',
     };

  //Step 2: Send transaction to smart contract

  contract.methods
    .addGoal(inputs)
    .send({
      from: currentAccount,
    })
    .then((receipt) => {
      console.log(receipt);
      window.location.href = "dashboard.html";
    })
    .catch((error) => {
      console.log(error);
    });

    //Alert user to wait for transactions
    alert("Processing: sending your request");
    console.log("Mark as complete: processing..."); */
   
};

//Add event listener for buttons
submitReviewFreelancer.addEventListener("click", reviewAdd);
document.getElementById("b2").onclick = function () {
  location.href = "dashboard.html";
};
