const gigsList = document.getElementById("gigsContainer");

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

const init = async () => {
  let url =
    "https://ap-southeast-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/whiz-ihwsd/service/jobs/incoming_webhook/viewJobs";
  let elm = "";

  try {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    data.forEach((jobs) => {
      //var date = moment(jobs.deadline).format("DD MMM YYYY");
      console.log(jobs);

      var image= jobs.background;
    

      //Add to element
      elm += `
      <div class="product-preview">
      <!-- PRODUCT PREVIEW IMAGE -->
      <a href="gig-info.html?gigId=${jobs._id}&bidding=true">
        <figure class="product-preview-image liquid">
          <img src="${image}" alt="item-01">
        </figure>
      </a>
      <!-- /PRODUCT PREVIEW IMAGE -->
  
      <!-- PRODUCT PREVIEW INFO -->
      <div class="product-preview-info">
        <!-- TEXT STICKER -->
        <p class="text-sticker"><span class="highlighted">$</span> ${jobs.budget}</p>
        <!-- /TEXT STICKER -->
  
        <!-- PRODUCT PREVIEW TITLE -->
        <p class="product-preview-title"><a href="gig-info.html?gigId=${jobs._id}&bidding=true">${jobs.title}</a></p>
        <!-- /PRODUCT PREVIEW TITLE -->
  
        <!-- PRODUCT PREVIEW CATEGORY -->
        <p class="product-preview-category digital"><a href="gig-info.html?gigId=${jobs._id}&bidding=true">${jobs.skills_required}</a></p>
        <!-- /PRODUCT PREVIEW CATEGORY -->
  
        <!-- PRODUCT PREVIEW TEXT -->
        <p class="product-preview-text"> ${jobs.description}</p>
        <!-- /PRODUCT PREVIEW TEXT -->
      </div>
      <!-- /PRODUCT PREVIEW INFO -->
  
      <!-- PRODUCT PREVIEW META -->
      <div class="product-preview-meta">
        <!-- PRODUCT PREVIEW AUTHOR -->
        <div class="product-preview-author">
          <!-- PRODUCT PREVIEW AUTHOR IMAGE -->
          <a class="product-preview-author-image user-avatar micro no-border" href="gig-info.html?gigId=${jobs._id}&bidding=true">
            <!-- USER AVATAR CONTENT -->
            <div class="user-avatar-content">
              <!-- HEXAGON -->
              <div class="hexagon-image-18-20" data-src="img/avatar/28.jpg"></div>
              <!-- /HEXAGON -->
            </div>
            <!-- /USER AVATAR CONTENT -->
          </a>
          <!-- /PRODUCT PREVIEW AUTHOR IMAGE -->
  
          <!-- PRODUCT PREVIEW AUTHOR TITLE -->
          <p class="product-preview-author-title">Posted By</p>
          <!-- /PRODUCT PREVIEW AUTHOR TITLE -->
  
          <!-- PRODUCT PREVIEW AUTHOR TEXT -->
          <p class="product-preview-author-text"><a href="gig-info.html?gigId=${jobs._id}&bidding=true">${jobs.hirer_name}</a></p>
          <!-- /PRODUCT PREVIEW AUTHOR TEXT -->
        </div>
        <!-- /PRODUCT PREVIEW AUTHOR -->
  
        <!-- RATING LIST -->
        <div class="rating-list">
          <!-- RATING -->
          <div class="rating filled">
            <!-- RATING ICON -->
            <svg class="rating-icon icon-star">
              <use xlink:href="#svg-star"></use>
            </svg>
            <!-- /RATING ICON -->
          </div>
          <!-- /RATING -->
  
          <!-- RATING -->
          <div class="rating filled">
            <!-- RATING ICON -->
            <svg class="rating-icon icon-star">
              <use xlink:href="#svg-star"></use>
            </svg>
            <!-- /RATING ICON -->
          </div>
          <!-- /RATING -->
  
          <!-- RATING -->
          <div class="rating filled">
            <!-- RATING ICON -->
            <svg class="rating-icon icon-star">
              <use xlink:href="#svg-star"></use>
            </svg>
            <!-- /RATING ICON -->
          </div>
          <!-- /RATING -->
  
          <!-- RATING -->
          <div class="rating filled">
            <!-- RATING ICON -->
            <svg class="rating-icon icon-star">
              <use xlink:href="#svg-star"></use>
            </svg>
            <!-- /RATING ICON -->
          </div>
          <!-- /RATING -->
  
          <!-- RATING -->
          <div class="rating">
            <!-- RATING ICON -->
            <svg class="rating-icon icon-star">
              <use xlink:href="#svg-star"></use>
            </svg>
            <!-- /RATING ICON -->
          </div>
          <!-- /RATING -->
        </div>
        <!-- /RATING LIST -->
      </div>
      <!-- /PRODUCT PREVIEW META -->
    </div>`;
    });

    gigsList.innerHTML = elm;
  } catch (error) {
    console.log(error.message);
  }
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
};

/* const sessStorage = async (e) => {
  console.log(e);
  onclick="sessStorage('${jobs._id.$oid}')"
  window.sessionStorage.setItem("gigId", e);
  window.location.href = "gig-info.html";
}; */

init();
