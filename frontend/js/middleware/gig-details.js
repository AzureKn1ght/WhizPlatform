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
      const message = await res.text();
      alert(message);
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
    if (jobs.freelancer === "") {
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
            <h3>Hirer</h3>
            <br>
            <p>${jobs.hirer_name}</p>
            <br>
            </div>
            <button class="button secondary" onclick="bidGig()">Bid for Gig</button>
              <br><br>
              <button class="button primary" onclick="goBack()">Go Back</button>
            <!-- /SECTION TITLE -->
          </div>
            `;
    } else {
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
            <h3>Hirer</h3>
            <br>
            <p>${jobs.hirer_name}</p>
            <br>
            </div>
              <button class="button primary" onclick="goBack()">Go Back</button>
            <!-- /SECTION TITLE -->
          </div>
            `;
    }

    gigInfo.innerHTML = elm;
  } catch (error) {
    console.log(error.message);
  }
};

gigDetails();


