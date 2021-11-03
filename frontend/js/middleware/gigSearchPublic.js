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
    data.jobs.forEach((jobs) => {
      var date = moment(parseInt(jobs.deadline.$date.$numberLong)).format("DD MMM YYYY");
      console.log(jobs);
      console.log(jobs._id.$oid);
      console.log(typeof(jobs._id.$oid));
      if(gigCount==5) {  
        gigCount = 0;
    }
      console.log(gigCount);
      switch(gigCount) {
        case 0:
          var image = "img/marketplace/items/01.jpg";
          break;
        case 1:
          var image = "img/marketplace/items/13.jpg";
          break;
        case 2:
          var image = "img/marketplace/items/03.jpg";
          break;
        case 3:
          var image = "img/marketplace/items/05.jpg";
          break;
        case 4:
          var image = "img/marketplace/items/10.jpg";
      }
      gigCount++;
      console.log(gigCount);

      //Add to element
      elm += `
      <div class="product-preview">
      <!-- PRODUCT PREVIEW IMAGE -->
      <a href="marketplace-product.html">
        <figure class="product-preview-image liquid">
          <img src="${image}" alt="item-01">
        </figure>
      </a>
      <!-- /PRODUCT PREVIEW IMAGE -->
  
      <!-- PRODUCT PREVIEW INFO -->
      <div class="product-preview-info">
        <!-- TEXT STICKER -->
        <p class="text-sticker"><span class="highlighted">$</span> ${jobs.budget.$numberInt}</p>
        <!-- /TEXT STICKER -->
  
        <!-- PRODUCT PREVIEW TITLE -->
        <p class="product-preview-title"><a href="marketplace-product.html">${jobs.title}</a></p>
        <!-- /PRODUCT PREVIEW TITLE -->
  
        <!-- PRODUCT PREVIEW CATEGORY -->
        <p class="product-preview-category digital"><a href="marketplace-category.html">${jobs.skills_required}</a></p>
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
          <a class="product-preview-author-image user-avatar micro no-border" href="profile-timeline.html">
            <!-- USER AVATAR CONTENT -->
            <div class="user-avatar-content">
              <!-- HEXAGON -->
              <div class="hexagon-image-18-20" data-src="img/avatar/34.jpg"></div>
              <!-- /HEXAGON -->
            </div>
            <!-- /USER AVATAR CONTENT -->
          </a>
          <!-- /PRODUCT PREVIEW AUTHOR IMAGE -->
  
          <!-- PRODUCT PREVIEW AUTHOR TITLE -->
          <p class="product-preview-author-title">Posted By</p>
          <!-- /PRODUCT PREVIEW AUTHOR TITLE -->
  
          <!-- PRODUCT PREVIEW AUTHOR TEXT -->
          <p class="product-preview-author-text"><a href="profile-timeline.html">${jobs.hirer_name}</a></p>
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

/* const sessStorage = async (e) => {
  console.log(e);
  onclick="sessStorage('${jobs._id.$oid}')"
  window.sessionStorage.setItem("gigId", e);
  window.location.href = "gig-info.html";
}; */

init();
