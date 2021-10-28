const applicantCard = document.getElementById("applicant-card");
const title = document.getElementById("title");
const description = document.getElementById("description");
const deadline = document.getElementById("deadline");
const skills = document.getElementById("skills");
const jobLocation = document.getElementById("location");
const budget = document.getElementById("budget");
const urlParams = new URLSearchParams(window.location.search);
const jobId = urlParams.get('gigId');
var applicants = [];
let elm = "";

function loadScript(url) {
    // Adding the script tag to the head as suggested before
    var body = document.body;
    var script = document.createElement("script");
    script.defer = true;
    script.type = "text/javascript";
    script.src = url;
  
    // Fire the loading
    body.appendChild(script);
  }

const selectFreelancer = (e) =>{
    window.location.href=`contract.html?gigId=${jobId}&freelancer=${e}`;
};

const showFreelancer = async (freelancer) =>{

    let url = "https://ap-southeast-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/whiz-ihwsd/service/freelancers/incoming_webhook/viewFlSkills"

        

        const flData = {
            _id: freelancer,
        };

        try{
            const res = await fetch(url, {
                method: "POST",
                body: JSON.stringify(flData),
                mode: "cors",
                headers: {
                  "Content-Type": "application/json",
                },
              });
              const data = await res.json();
              console.log(data);

              elm += `  <div class="user-preview">
              <!-- USER PREVIEW COVER -->
              <figure class="user-preview-cover liquid">
                  <img src="img/cover/02.jpg" alt="cover-01">
              </figure>
              <!-- /USER PREVIEW COVER -->

              <!-- USER PREVIEW INFO -->
              <div class="user-preview-info">
                  <!-- USER SHORT DESCRIPTION -->
                  <div class="user-short-description">
                      <!-- USER SHORT DESCRIPTION AVATAR -->
                      <a class="user-short-description-avatar user-avatar medium"
                          href="profile-timeline.html">
                          <!-- USER AVATAR BORDER -->
                          <div class="user-avatar-border">
                              <!-- HEXAGON -->
                              <div class="hexagon-120-132"></div>
                              <!-- /HEXAGON -->
                          </div>
                          <!-- /USER AVATAR BORDER -->

                          <!-- USER AVATAR CONTENT -->
                          <div class="user-avatar-content">
                              <!-- HEXAGON -->
                              <div class="hexagon-image-82-90" data-src="img/avatar/01.jpg"></div>
                              <!-- /HEXAGON -->
                          </div>
                          <!-- /USER AVATAR CONTENT -->

                          <!-- USER AVATAR PROGRESS -->
                          <div class="user-avatar-progress">
                              <!-- HEXAGON -->
                              <div class="hexagon-progress-100-110"></div>
                              <!-- /HEXAGON -->
                          </div>
                          <!-- /USER AVATAR PROGRESS -->

                          <!-- USER AVATAR PROGRESS BORDER -->
                          <div class="user-avatar-progress-border">
                              <!-- HEXAGON -->
                              <div class="hexagon-border-100-110"></div>
                              <!-- /HEXAGON -->
                          </div>
                          <!-- /USER AVATAR PROGRESS BORDER -->

                          <!-- USER AVATAR BADGE -->
                          <div class="user-avatar-badge">
                              <!-- USER AVATAR BADGE BORDER -->
                              <div class="user-avatar-badge-border">
                                  <!-- HEXAGON -->
                                  <div class="hexagon-32-36"></div>
                                  <!-- /HEXAGON -->
                              </div>
                              <!-- /USER AVATAR BADGE BORDER -->

                              <!-- USER AVATAR BADGE CONTENT -->
                              <div class="user-avatar-badge-content">
                                  <!-- HEXAGON -->
                                  <div class="hexagon-dark-26-28"></div>
                                  <!-- /HEXAGON -->
                              </div>
                              <!-- /USER AVATAR BADGE CONTENT -->

                              <!-- USER AVATAR BADGE TEXT -->
                              <p class="user-avatar-badge-text">12</p>
                              <!-- /USER AVATAR BADGE TEXT -->
                          </div>
                          <!-- /USER AVATAR BADGE -->
                      </a>
                      <!-- /USER SHORT DESCRIPTION AVATAR -->

                      <!-- USER SHORT DESCRIPTION TITLE -->
                      <p class="user-short-description-title"><a href="profile-timeline.html">${data.full_name}</a></p>
                      <p class="user-short-description-text">joined 1 year ago</p>
                      <!-- /USER SHORT DESCRIPTION TITLE -->

                      <!-- /USER SHORT DESCRIPTION -->

                      <!-- USER PREVIEW STATS SLIDES -->
                      <br>
                      <!-- USER PREVIEW STATS SLIDE -->

                      <!-- USER STAT -->
                      <div class="user-stat">
                          <!-- USER STAT TITLE -->
                          <p class="user-stat-title">Skills</p>
                          <!-- /USER STAT TITLE -->

                          <!-- USER STAT TEXT -->
                          <p class="user-stat-text">${data.skills}</p><br>
                          <!-- /USER STAT TEXT -->
                          <!-- USER STAT TITLE -->
                          <p class="user-stat-title">Languages</p>
                          <!-- /USER STAT TITLE -->

                          <!-- USER STAT TEXT -->
                          <p class="user-stat-text">${data.languages}</p>
                          <!-- /USER STAT TEXT -->

                      </div>
                      <!-- /USER STAT -->
                  </div>
                  <br><button class="button secondary" onclick="selectFreelancer('${data._id}')">Select Freelancer</button><br><br>
                  <button class="button primary" id="b1">View Profile</button>
                  <!-- /USER STATS -->
              </div>
          </div>`;
          applicantCard.innerHTML = elm;

          var scripts = [
            "js/vendor/simplebar.min.js",
            "js/utils/liquidify.js",
            "js/vendor/Chart.bundle.min.js",
            "js/global/global.hexagons.js",
            "js/global/global.tooltips.js",
            "js/global/global.popups.js",
            "js/global/global.charts.js",
            "js/header/header.js",
            "js/sidebar/sidebar.js",
            "js/content/content.js",
            "js/form/form.utils.js",
            "js/utils/svg-loader.js",
            "js/utils/db.js",
            "js/utils/page-loader.js",
          ];
      
          scripts.forEach((element) => {
            loadScript(element);
          });

          

        
        }catch(error){
            console.log(error);
        }
    };
    


const getEachApplicant = async (applicants) => {
    console.log(applicants);
    applicants.forEach((freelancer)=>{
        console.log(freelancer);
        if(!freelancer) return; 
        showFreelancer(freelancer);
    })
    
};
        

const gigDetails = async (e) => {
    //e.preventDefault();
  
    let url =
      "https://ap-southeast-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/whiz-ihwsd/service/jobs/incoming_webhook/jobInfo";
  
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
      budget.innerHTML = `$${jobs.budget}`;

      applicants = jobs.applicants;

    

      console.log("Sent applicants:" + applicants)

      getEachApplicant(applicants);
  
    } catch (error) {
      console.log(error.message);
    }
  };


  gigDetails();