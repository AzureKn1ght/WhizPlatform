// (c) AzureKn1ght
const gigInfo = document.getElementById("gigInfo");
let data = sessionStorage.getItem("gigId");
var jobDetails = null;
const overallHirerRating = document.getElementById("overall_rating");
const communicationRating = document.getElementById("comms_rating");
const quality = document.getElementById("quality_rating");
const comments = document.getElementById("comments");
const timeliness = document.getElementById("timeliness_rating");
const submitReviewHirer = document.getElementById(
  "submit-hirer-review"
);
const web3 = new Web3(window.ethereum);
const conAddress = "0xfb8362626ddE20BC9b8f4e323d49b52D89dD98c8";
const contract = new web3.eth.Contract(abi, conAddress);


const gigDetails = async (e) => {
    //e.preventDefault();
  
    let url =
      "https://ap-southeast-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/whiz-ihwsd/service/jobs/incoming_webhook/jobInfo";
    let elm = "";
    let idJob = data;
    const gigId = {
      _id: idJob,
    };
  
    try {
      const res = await fetch(url, {
        method: "POST",
        body: JSON.stringify(gigId),
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const jobs = await res.json();
      console.log(jobs);
      jobDetails = {
        jobID: jobs._id,
        budget: jobs.budget,
        title: jobs.title,
        description: jobs.description,
        skills: jobs.skills_required,
        location: jobs.required_location,
      };
  
      console.log(jobDetails);
    
        //Add to element
        elm += `
              <h3 class="section-title">${jobs.title}</h3>
              <br><br>
              <h3>Description</h3>
              <br>
              <p>${jobs.description}</p>
              <br><br>
              <h3>Deadline</h3>
              <br>
              <p>${jobs.deadline}</p>
              <br><br>
              <h3>Skills Required</h3>
              <br>
              <p>${jobs.skills_required}</p>
              <br><br>
              <h3>Location</h3>
              <br>
              <p>${jobs.required_location}</p>
              <br><br>
              <h3>Freelancer</h3>
              <br>
              <p>${jobs.freelancer_name}</p>
              <br>
              `;
      
  
      gigInfo.innerHTML = elm;
    } catch (error) {
      console.log(error.message);
    }
  };
//Goals (goal_id, description, balance, date_created, user_id);

//Add Goal Function

//Create Contract instance
const reviewAdd = async (e) => {
  e.preventDefault(); //to prevent form from submitting and refreshing the page

  //to prevent empty input from submitting
  

  //Step 1: Get the input data from the form
  var t = parseInt(timeliness.options[timeliness.selectedIndex].value);
  var q = parseInt(quality.options[quality.selectedIndex].value);
  var o = parseInt(
    overallHirerRating.options[overallHirerRating.selectedIndex].value
  );

  var cR = parseInt(
    communicationRating.options[communicationRating.selectedIndex].value
  );
  var c = comments.value;

  var recommendation = parseInt(document.querySelector('input[name="recommendation"]:checked').value);

  var ratings = {
    overall: o,
    communication: cR,
    quality: q,
    timeliness: t,
    grading: recommendation

  };

  console.log(ratings);

  var input = {
    reviewID: 0,
    reviewer: "0x4b7d0309042Be687F432B6fB73BCbcd405CD25e5",
    reviewee: "0xb88d7171a62a0c62e22f62af811c9c859fce4618",
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

const getReview = async (e)=>{
  let result = await contract.methods.getAllReceivedReviews(currentAccount).call();
  console.log(result);
  
};

getReview(currentAccount);
//Add event listener for buttons
submitReviewHirer.addEventListener("click", reviewAdd);
/* document.getElementById("b2").onclick = function () {
  location.href = "dashboard.html";
}; */

gigDetails();
