const gigsInProgress = document.getElementById("gigs-in-progress");
const user = window.sessionStorage.getItem("userId");

const gigsProgress = async () => {
  let url =
    "https://ap-southeast-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/whiz-ihwsd/service/jobs/incoming_webhook/jobsinProgress";
  let elm = "";
  const freelancer = {
    applicant: user,
  };

  try {
    const res = await fetch(url, {
      method: "POST",
      body: JSON.stringify(freelancer),
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    console.log(data);
    data.gigs.forEach((gigs) => {
      var date = moment(gigs.deadline).format("ddd, MMM  YYYY");
      console.log(gigs);
      var image = Math.floor(Math.random() * 3) + 34;
      var profilePic = "img/avatar/" + image + ".jpg";
      var file = profilePic.toString();
      console.log(file);
      console.log(typeof file);

      //Add to element
      elm += `<!-- USER PREVIEW -->
      <div class="user-preview">
        <!-- USER PREVIEW COVER -->
        <figure class="user-preview-cover liquid">
          <img src="img/cover/57.jpg" alt="cover-01">
      </figure>
      <!-- /USER PREVIEW COVER -->

      <!-- USER PREVIEW INFO -->
      <div class="user-preview-info">
        <!-- USER SHORT DESCRIPTION -->

        <div class="user-short-description">
          <!-- USER SHORT DESCRIPTION AVATAR -->
          <a class="user-short-description-avatar user-avatar medium" href="profile-timeline.html">
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
              <div class="hexagon-image-82-90" data-src="${file}"></div>
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
              <p class="user-avatar-badge-text">✓</p>
              <!-- /USER AVATAR BADGE TEXT -->
            </div>
            <!-- /USER AVATAR BADGE -->
          </a>
          <!-- /USER SHORT DESCRIPTION AVATAR -->

          <!-- USER SHORT DESCRIPTION TITLE -->
          <p class="user-short-description-title"><a href="profile-timeline.html">${gigs.job_hirer}</a></p>
          <!-- /USER SHORT DESCRIPTION TITLE -->

          <!-- USER SHORT DESCRIPTION TEXT -->
          <p class="user-short-description-text"><a href="#">${gigs.title}</a></p>
          <!-- /USER SHORT DESCRIPTION TEXT -->
        </div>
        <!-- /USER SHORT DESCRIPTION -->

        <!-- USER PREVIEW STATS SLIDES -->
        <div id="user-preview-stats-slides-01" class="user-preview-stats-slides">
          <!-- USER PREVIEW STATS SLIDE -->
          <div class="user-preview-stats-slide">
            <!-- USER STATS -->
            <div class="user-stats">
              <!-- USER STAT -->
              <div class="user-stat">
                <!-- USER STAT TITLE -->
                <p class="user-stat-title">12 Oct 2021</p>
                <!-- /USER STAT TITLE -->

                <!-- USER STAT TEXT -->
                <p class="user-stat-text">Accepted</p>
                <!-- /USER STAT TEXT -->
              </div>
              <!-- /USER STAT -->

              <!-- USER STAT -->
              <div class="user-stat">
                <!-- USER STAT TITLE -->
                <p class="user-stat-title">USD${gigs.budget}</p>
                <!-- /USER STAT TITLE -->

                <!-- USER STAT TEXT -->
                <p class="user-stat-text">Budget</p>
                <!-- /USER STAT TEXT -->
              </div>
              <!-- /USER STAT -->

              <!-- USER STAT -->
              <div class="user-stat">
                <!-- USER STAT TITLE -->
                <p class="user-stat-title">${date}</p>
                <!-- /USER STAT TITLE -->

                <!-- USER STAT TEXT -->
                <p class="user-stat-text">Deadline</p>
                <!-- /USER STAT TEXT -->
              </div>
              <!-- /USER STAT -->
            </div>
            <!-- /USER STATS -->
          </div>

        </div>

        <!-- USER PREVIEW ACTIONS -->
        <div class="user-preview-actions">
          <!-- BUTTON -->
          <p class="button secondary" onclick="sessStorage('${gigs._id}')">Gig Details</p>
          <!-- /BUTTON -->

          <!-- BUTTON -->
          <p class="button primary" onclick="updateStatus('${gigs._id}')">Update Status</p>
          <!-- /BUTTON -->
        </div>
        <!-- /USER PREVIEW ACTIONS -->
      </div>
      <!-- /USER PREVIEW INFO -->
      </div>
      <!-- /USER PREVIEW -->`;
    });

    gigsInProgress.innerHTML = elm;

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
  } catch (error) {
    console.log(error.message);
  }
};

const updateStatus = async (e) => {
  console.log(e);
  window.sessionStorage.setItem("gigId", e);
  window.location.href = "complete-gig-fl.html";
};

gigsProgress();

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

const sessStorage = async (e) => {
  console.log(e);
  window.sessionStorage.setItem("gigId", e);
  window.location.href = "gig-info.html";
};