// (c) AzureKn1ght
const title = document.getElementById("title");
const description = document.getElementById("description");
const deadline = document.getElementById("deadline");
const skills = document.getElementById("skills");
const jobLocation = document.getElementById("location");
const freelancer = document.getElementById("freelancer");
const urlParams = new URLSearchParams(window.location.search);
const jobId = urlParams.get("gigId");
const reviewee = urlParams.get("freelancer");
var jobDetails = null;
const overallHirerRating = document.getElementById("overall_rating");
const communicationRating = document.getElementById("comms_rating");
const quality = document.getElementById("quality_rating");
const comments = document.getElementById("comments");
const timeliness = document.getElementById("timeliness_rating");
const submitReviewHirer = document.getElementById("submit-hirer-review");
const web3 = new Web3(window.ethereum);
const conAddress = "0xfb8362626ddE20BC9b8f4e323d49b52D89dD98c8";
const contract = new web3.eth.Contract(abi, conAddress);
const meta = window.sessionStorage.getItem("accountId");
const gigsContract = new web3.eth.Contract(GigsABI, GigsAddress);
var revieweeMeta = "";


const getReview = async (e) => {
  let url = "https://ap-southeast-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/whiz-ihwsd/service/flReview/incoming_webhook/getReview";
  
  const reviewData = {
    id: jobId,
  };
  try{
    const res = await fetch(url, {
      method: "POST",
      body: JSON.stringify(reviewData),
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    console.log(data);
   /*  if(data.reviews.length > 0){
      var review = data.reviews[0];
      console.log(review);
      overallHirerRating.value = review.overall_rating;
      communicationRating.value = review.communication_rating;
      quality.value = review.quality_rating;
      comments.value = review.comments;
      timeliness.value = review.timeliness_rating;
    } */
  }
  catch(error){
    console.log(error);
  }
};

const freelancerDetails = async () => {
  let url =
    "https://ap-southeast-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/whiz-ihwsd/service/freelancers/incoming_webhook/viewFlSkills";

  const flData = {
    _id: reviewee,
  };

  try {
    const res = await fetch(url, {
      method: "POST",
      body: JSON.stringify(flData),
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    revieweeMeta = data.metamask;
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

const gigDetails = async (e) => {
  //e.preventDefault();

  let url =
    "https://ap-southeast-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/whiz-ihwsd/service/jobs/incoming_webhook/jobInfo";
  let elm = "";
  let idJob = jobId;
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

    var date = moment(jobs.deadline).format("DD MMM YYYY");
    console.log(jobDetails);

    //Add to element
    title.innerHTML = `${jobs.title}`;
    description.innerHTML = `${jobs.description}`;
    deadline.innerHTML = `${date}`;
    skills.innerHTML = `${jobs.skills_required}`;
    jobLocation.innerHTML = `${jobs.required_location}`;
    freelancer.innerHTML = `${jobs.freelancer_name}`;
  } catch (error) {
    console.log(error.message);
  }
};
//Goals (goal_id, description, balance, date_created, user_id);

//Add Goal Function

//Create Contract instance
/* const reviewAdd = async (e) => {
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
    reviewer: meta,
    reviewee: revieweeMeta,
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
}; */



const confirmGigDelivery = async (e) => {
  e.preventDefault();
  try {
    let receipt = await gigsContract.methods
      .confirmGigDelivery(jobId)
      .send({ from: currentAccount });
    console.log(receipt);
  } catch (error) {
    console.log(error);
  }
};

getReview(currentAccount);
//Add event listener for buttons
submitReviewHirer.addEventListener("click", confirmGigDelivery);
/* document.getElementById("b2").onclick = function () {
  location.href = "dashboard.html";
}; */

gigDetails();
freelancerDetails();
getReview();
