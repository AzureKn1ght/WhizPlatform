const gigInfo = document.getElementById("gigInfo");

//const input = document.getElementById("input");
let data = sessionStorage.getItem("gigId");
let idFreelancer = sessionStorage.getItem("userId");
var jobDetails = null;

const goBack = async (e) => {
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
           
            
            `;
    

    gigInfo.innerHTML = elm;
  } catch (error) {
    console.log(error.message);
  }
};

gigDetails();


