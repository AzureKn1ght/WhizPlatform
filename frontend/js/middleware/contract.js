const title = document.getElementById("title");
const description = document.getElementById("description");
const deadline = document.getElementById("deadline");
const skills = document.getElementById("skills");
const jobLocation = document.getElementById("location");
const jobBudget = document.getElementById("budget");
const urlParams = new URLSearchParams(window.location.search);
const jobId = urlParams.get("gigId");
const freelancer = urlParams.get("freelancer");
const gigInfo = document.getElementById("gigInfo");
const user = window.sessionStorage.getItem("userId");
const meta = window.sessionStorage.getItem("accountId");
const web3 = new Web3(window.ethereum);
const gigsAddress = "0xEfE959E84B1A4B7Dd4BF6962a25FFB3e1191BE4d";
const gigsContract = new web3.eth.Contract(GigsABI, gigsAddress);
const usdcAddress = "0xFAFD46f3671b1fcfd7906CAe158C3008c2fFc358";
const usdcContract = new web3.eth.Contract(usdcABI, usdcAddress);
const approveButton = document.getElementById("approve-button");
var approveStatus = false;
var budget = 0;

var Gig = {
  hirer: currentAccount,
  freelancer: "freelancermetamask",
  jobDetails: {
    jobID: "12345",
    budget: 100,
    title: "Create website",
    description: "Create a website using xxxx",
    skills: ["Coding", "Design"],
    location: "Singapore",
  },
  amountDeposited: 0,
  status: 0,
};

const freelancerDetails = async () => {
  let url =
    "https://ap-southeast-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/whiz-ihwsd/service/freelancers/incoming_webhook/viewFlSkills";

  const flData = {
    _id: freelancer,
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
    Gig.freelancer = data.metamask;
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

const gigDetails = async () => {
  //e.preventDefault();

  let url =
    "https://ap-southeast-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/whiz-ihwsd/service/jobs/incoming_webhook/jobInfo";

  const gigId = {
    _id: jobId,
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

    Gig.jobDetails = jobDetails;
    budget = jobs.budget;
    var date = moment(jobs.deadline).format("DD MMM YYYY");
    console.log(jobDetails);

    //Add to element
    title.innerHTML = `${jobs.title}`;
    description.innerHTML = `${jobs.description}`;
    deadline.innerHTML = `${date}`;
    skills.innerHTML = `${jobs.skills_required}`;
    jobLocation.innerHTML = `${jobs.required_location}`;
    jobBudget.innerHTML = `$${jobs.budget}`;
  } catch (error) {
    console.log(error.message);
  }
};

const approveUSDC = async () => {
  try {
    let approved = await usdcContract.methods
      .approve(gigsAddress,budget)
      .send({
        from: currentAccount,
      });
    console.log(approved);
    approveStatus = approved.status;
    if (approveStatus === true) {
      console.log("Success");
      approveButton.innerText = "Create Gigs Contract";
    } else {
      console.log("Failed");
    }
  } catch (error) {
    console.log(error);
  }
};

const createGigContract = async () => {
  try {
    let confirmedGig = await gigsContract.methods
      .createGigContract(jobId, Gig, budget)
      .send({
        from: currentAccount,
      });
    console.log(confirmedGig);
    window.location.href = "/dashboard-hirer";
  } catch (error) {
    alert(error);
  }
};

const processClick = async () => {
  if (approveStatus) {
  } else {
    approveUSDC();
  }
};

approveButton.addEventListener("click", processClick);

gigDetails();
freelancerDetails();
