const gigsList = document.getElementById("gigsPublic");

const init = async () => {
  let url =
    "https://ap-southeast-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/whiz-ihwsd/service/jobs/incoming_webhook/viewJobs";
  let elm = "";
  let gigCount = 0;

  try {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    data.forEach((jobs) => {
      //var date = moment(parseInt(jobs.deadline.$date.$numberLong)).format("DD MMM YYYY");
      console.log(jobs);
      
      var image = jobs.background;

      //Add to element
      elm += `
      <div class="product-preview">
          <!-- PRODUCT PREVIEW IMAGE -->
          <a href="login.html">
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
            <p class="product-preview-title" style="overflow: hidden;text-overflow: ellipsis;white-space: nowrap" style="margin-top:20px;color:#8f91ac;font-size:1.1rem;font-weight:500;line-height:1.4285714286em;overflow: hidden;text-overflow: ellipsis;white-space: nowrap"><a href="login.html">${jobs.title}</a></p>
            <!-- /PRODUCT PREVIEW TITLE -->
      
            <!-- PRODUCT PREVIEW CATEGORY -->
            <p class="product-preview-category digital" style="overflow: hidden;text-overflow: ellipsis;white-space: nowrap"><a href="login.html">${jobs.skills_required}</a></p>
            <!-- /PRODUCT PREVIEW CATEGORY -->
      
            <!-- PRODUCT PREVIEW TEXT -->
            <p class="product-preview-text" style="margin-top:20px;color:#8f91ac;font-size:1rem;font-weight:500;line-height:1.4285714286em;overflow: hidden;text-overflow: ellipsis;white-space: nowrap">${jobs.description}</p>
            <!-- /PRODUCT PREVIEW TEXT -->
          </div>
          <!-- /PRODUCT PREVIEW INFO -->
      
          <!-- PRODUCT PREVIEW META -->
          <div class="product-preview-meta">
            <!-- PRODUCT PREVIEW AUTHOR -->
            <div class="product-preview-author">
              <!-- PRODUCT PREVIEW AUTHOR IMAGE -->
              <a class="product-preview-author-image user-avatar micro no-border" href="login.html">
                <!-- USER AVATAR CONTENT -->
                <div class="user-avatar-content">
                  <!-- HEXAGON -->
                  <div class="hexagon-image-18-20" data-src="img/avatar/default_profile.jpg"></div>
                  <!-- /HEXAGON -->
                </div>
                <!-- /USER AVATAR CONTENT -->
              </a>
              <!-- /PRODUCT PREVIEW AUTHOR IMAGE -->
      
              <!-- PRODUCT PREVIEW AUTHOR TITLE -->
              <p class="product-preview-author-title">Posted By</p>
              <!-- /PRODUCT PREVIEW AUTHOR TITLE -->
      
              <!-- PRODUCT PREVIEW AUTHOR TEXT -->
              <p class="product-preview-author-text"><a href="login.html">${jobs.hirer_name}</a></p>
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
        </div>`
    });

    gigsList.innerHTML = elm;
  } catch (error) {
    console.log(error.message);
  }
};



init();
