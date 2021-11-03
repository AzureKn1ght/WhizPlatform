const title = document.getElementById("title");
const description = document.getElementById("description");
const deadline = document.getElementById("deadline");
const skills = document.getElementById("skills");
const jobLocation = document.getElementById("location");
const budget = document.getElementById("budget");
const hirer = document.getElementById("hirer");
//const input = document.getElementById("input");
const urlParams = new URLSearchParams(window.location.search);
const data = urlParams.get("gigId");
const bidding = urlParams.get("bidding");
const bidButton = document.getElementById("bid-button");
let idFreelancer = sessionStorage.getItem("userId");
var jobDetails = null;
const userType = sessionStorage.getItem("userType");
const newGigSideBar = document.getElementById("newGigSideBar");
const dashboardSideBar = document.getElementById("dashboardSideBar");
const newGigMenu = document.getElementById("newGigMenu");
const dashboardMenu = document.getElementById("dashboardMenu");
const dashboardTopBar = document.getElementById("dashboardTopBar");

//create function to change the href depending on user type
const changeHref = () => {
  if (userType == "freelancer") {
    newGigSideBar.href = "gig-search.html";
    newGigSideBar.setAttribute("data-title", "Gig Search");
    dashboardSideBar.href = "dashboard-freelancer.html";
    newGigMenu.href = "gig-search.html";
    newGigMenu.innerHTML = `<svg class="menu-item-link-icon icon-overview">
        <use xlink:href="#svg-revenue"></use>
        </svg>Gig Search`;
    dashboardMenu.href = "dashboard-freelancer.html";
    dashboardTopBar.href = "dashboard-freelancer.html";
  } else if (userType == "hirer") {
    newGigSideBar.href = "create-gig.html";
    newGigSideBar.setAttribute("data-title", "Create Gig");
    dashboardSideBar.href = "dashboard-hirer.html";
    dashboardSideBar.title = "Dashboard";
    newGigMenu.href = "create-gig.html";
    newGigMenu.innerHTML = `<svg class="menu-item-link-icon icon-overview">
        <use xlink:href="#svg-revenue"></use>
      </svg>Create Gig`;
    dashboardMenu.href = "dashboard-hirer.html";
    dashboardTopBar.href = "dashboard-hirer.html";
  }
};

const goBack = (e) => {
  window.history.back();
};

const bidGig = async (e) => {
  let url =
    "https://ap-southeast-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/whiz-ihwsd/service/jobs/incoming_webhook/bidJob";
  let idJob = data;
  const gigApply = {
    _id: idJob,
    applicants: idFreelancer,
  };

  try {
    const res = await fetch(url, {
      method: "POST",
      body: JSON.stringify(gigApply),
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.ok) {
      alert("Gig successfully bid for!");
    } else {
      const message = await res.json();
      console.log(message);
      alert(message.error);
    }
  } catch (error) {
    console.log(error);
  }
};

const gigDetails = async (e) => {
  //e.preventDefault();

  let url =
    "https://ap-southeast-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/whiz-ihwsd/service/jobs/incoming_webhook/jobInfo";

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
    var date = moment(jobs.deadline).format("DD MMM YYYY");
    console.log(jobDetails);

    //Add to element
    title.innerHTML = `${jobs.title}`;
    description.innerHTML = `${jobs.description}`;
    deadline.innerHTML = `${date}`;
    skills.innerHTML = `${jobs.skills_required}`;
    jobLocation.innerHTML = `${jobs.required_location}`;
    hirer.innerHTML = `${jobs.hirer_name}`;
    budget.innerHTML = `$${jobs.budget}`;
  } catch (error) {
    console.log(error.message);
  }
};

const hideBidButton = () => {
  if (bidding) {
    bidButton.style.display = "block";
  } else {
    bidButton.style.display = "none";
  }
};

gigDetails();
hideBidButton();
changeHref();
