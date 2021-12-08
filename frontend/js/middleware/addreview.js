// (c) AzureKn1ght
// define variables
const title = document.getElementById("title");
const description = document.getElementById("description");
const deadline = document.getElementById("deadline");
const skills = document.getElementById("skills");
const jobLocation = document.getElementById("location");
const hirer = document.getElementById("hirer");
const urlParams = new URLSearchParams(window.location.search);
const jobId = urlParams.get("gigId");
const reviewee = urlParams.get("hirer");
var jobDetails = null;
const overallHirerRating = document.getElementById("overall_rating");
const communicationRating = document.getElementById("comms_rating");
const quality = document.getElementById("quality_rating");
const comments = document.getElementById("comments");
const timeliness = document.getElementById("timeliness_rating");
const submitReviewFreelancer = document.getElementById(
  "submitfreelancerreview"
);
const web3 = new Web3(window.ethereum);
const conAddress = "0xfb8362626ddE20BC9b8f4e323d49b52D89dD98c8";
const contract = new web3.eth.Contract(abi, conAddress);
const meta = window.sessionStorage.getItem("accountId");
var revieweeMeta = "";

//function to fetch the details of the hirer
const hirerDetails = async () => {
  
  //declare the url to call the api 
  let url =
    "https://ap-southeast-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/whiz-ihwsd/service/hirers/incoming_webhook/viewHirer";

  // store the id of the hirer from the reviewee constant in the json object to send to the API 
  const hrData = {
    _id: reviewee,
  };

  //try to fetch the data from the API
  try {
    const res = await fetch(url, {
      method: "POST",
      body: JSON.stringify(hrData),
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    });

     //if there is successful response, store the response in a variable
    const data = await res.json();

    //assign the hirers metamask from the received json object to a variable
    revieweeMeta = data.metamask;
    console.log("reviewee meta is:" + data);


  } catch (error) {             //catch any errors and log them to the console
    console.log(error);
  }
};


// function to fetch the details of the job
const gigDetails = async () => {
  
// declare the url to call the api
  let url =
    "https://ap-southeast-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/whiz-ihwsd/service/jobs/incoming_webhook/jobInfo";

  // store the id of the job from the jobId constant in the json object to send to the API
  let idJob = jobId;
  const gigId = {
    _id: idJob,
  };


 //try to fetch the data from the API
  try {
    const res = await fetch(url, {
      method: "POST",
      body: JSON.stringify(gigId),
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    });

    //if there is successful response, store the response in a variable
    const jobs = await res.json();
    console.log(jobs);

    //assign the job details from the received json object to a jobDetails object
    jobDetails = {
      jobID: jobs._id,
      budget: jobs.budget,
      title: jobs.title,
      description: jobs.description,
      skills: jobs.skills_required,
      location: jobs.required_location,
    }
    
    //assign the deadline from the received json object to a variable and format it to the correct date format
    var date = moment(jobs.deadline).format("DD MMM YYYY");
    console.log(jobDetails);

    //Add to element
    title.innerHTML = `${jobs.title}`;
    description.innerHTML = `${jobs.description}`;
    deadline.innerHTML = `${date}`;
    skills.innerHTML = `${jobs.skills_required}`;
    jobLocation.innerHTML = `${jobs.required_location}`;
    hirer.innerHTML = `${jobs.hirer_name}`;

    //hides the review button if the job status is open
    if(jobs.gig_status == "OPEN"){
      submitReviewFreelancer.style.display = "none";
    }     

    
  } catch (error) {   //catch any errors and log them to the console
    console.log(error.message);
  }
};


//function to add the review to the database
const reviewAdd = async (e) => {
  e.preventDefault(); //to prevent form from submitting and refreshing the page

  

  //Step 1: Get the input data from the form
  var timelinessRating = parseInt(timeliness.options[timeliness.selectedIndex].value);
  var qualityRating = parseInt(quality.options[quality.selectedIndex].value);
  var overallRating = parseInt(
    overallHirerRating.options[overallHirerRating.selectedIndex].value
  );

  var commRating = parseInt(
    communicationRating.options[communicationRating.selectedIndex].value
  );
  var comment = comments.value;

  var recommendation = parseInt(
    document.querySelector('input[name="recommendation"]:checked').value
  );

  var ratings = {
    overall: overallRating,
    communication: commRating,
    quality: qualityRating,
    timeliness: timelinessRating,
    grading: recommendation,
  };

  console.log(ratings);

  //store the input data in a json object to send to the API
  var input = {
    reviewID: jobId,
    reviewer: meta,
    reviewee: revieweeMeta,
    ratings: ratings,
    comments: comment,
    job: jobDetails,
  };

  console.log(input);

  //declare the url to call the api
  let url =
    "https://ap-southeast-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/whiz-ihwsd/service/flReview/incoming_webhook/flReview";

  //try to send the data from the API
  try {
    const res = await fetch(url, {
      method: "POST",
      body: JSON.stringify(input),
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    });

  
    //if there is successful response, store the response in a variable
    if(res.ok){
      const data = await res.json();
    console.log(data);

    //alert the user that the review has been added
    alert(
      `Review submitted successfully!`
      );
    //redirect the user to the their dashboard
      window.location.href= "dashboard-freelancer.html";
    
    }else { //if there is an error, alert the user
    console.log(res);
    const message = await res.json();
    alert(message.error);
    };

  } catch (error) { //catch any errors and log them to the console
    console.log(error);
  }

};

//Add event listener for buttons
submitReviewFreelancer.addEventListener("click", reviewAdd);

//call the functions on page load
hirerDetails();
gigDetails();
