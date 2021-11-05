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
var reviewFromFL ;
var reviewFromHR ; 

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
    delete data._id;
    data.reviewID = 0;
    console.log("FL review is:" + data);
    console.log(data);
    reviewFromFL = data;

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
    freelancer.innerHTML = `${data.full_name}`;
    //console.log(data);
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
    //console.log(jobs);
    jobDetails = {
      jobID: jobs._id,
      budget: jobs.budget,
      title: jobs.title,
      description: jobs.description,
      skills: jobs.skills_required,
      location: jobs.required_location,
    };

    var date = moment(jobs.deadline).format("DD MMM YYYY");
    //console.log(jobDetails);

    //Add to element
    title.innerHTML = `${jobs.title}`;
    description.innerHTML = `${jobs.description}`;
    deadline.innerHTML = `${date}`;
    skills.innerHTML = `${jobs.skills_required}`;
    jobLocation.innerHTML = `${jobs.required_location}`;
  
  } catch (error) {
    console.log(error.message);
  }
};


//Create Contract instance
const reviewAdd =  (e) => {
  //e.preventDefault(); //to prevent form from submitting and refreshing the page

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

  //console.log(ratings);

  var input = {
    reviewID: 0,
    reviewer: meta,
    reviewee: revieweeMeta,
    ratings: ratings,
    comments: c,
    job: jobDetails,
  };

  //console.log(input);
  reviewFromHR = input;

 
};

const updateMongoComplete = async () => {
  //send to mongodb a json object with the jobId and the freelancer as a post fetch request
  let url = "https://ap-southeast-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/whiz-ihwsd/service/jobs/incoming_webhook/completeJob";

  const gigId = {
    _id: jobId,
    freelancer: freelancer,
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
    const job = await res.json();
    console.log(job);
    window.location.href = "dashboard-hirer.html"
  } catch (error) {
    console.log(error);
  }
}

const confirmGigDelivery = async (e) => {
  e.preventDefault();
  reviewAdd();
  let confirmation = confirm("Are you sure you want to mark this job as complete and release payment?");

  if (confirmation == true) {
  try {
    let receipt = await gigsContract.methods
      .confirmGigDelivery(jobId,reviewFromFL,reviewFromHR)
      .send({ from: currentAccount });
    console.log(receipt);
    updateMongoComplete();
  } catch (error) {
    console.log(error);
  }
}else{
  alert("You have cancelled the job completion");
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
