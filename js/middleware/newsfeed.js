const gigsList = document.getElementById("gigsContainer");

const init = async () => {
    let url = "https://ap-southeast-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/whiz-ihwsd/service/jobs/incoming_webhook/viewJobs";
    let elm = "";

    try{
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
        data.jobs.forEach((jobs)=>{
            
            var date = moment(parseInt(jobs.deadline.$date.$numberLong)) ;
            console.log(jobs);

            //Add to element
            elm += `
            <!-- TABLE ROW -->
            <div class="table-row small">
              <!-- TABLE COLUMN -->
              <div class="table-column">
                <!-- TABLE INFORMATION -->
                <div class="table-information">
                  <!-- TABLE TITLE -->
                  <p class="table-title"><a href="#" onclick="sessStorage('${jobs.title}')">${jobs.title}</p></a>
                  <!-- /TABLE TITLE -->
                </div>
                <!-- /TABLE INFORMATION -->
              </div>
              <!-- /TABLE COLUMN -->
  
              <!-- TABLE COLUMN -->
              <div class="table-column">
                <!-- TABLE TITLE -->
                <p class="table-text">${jobs.description}</p>
                <!-- /TABLE TITLE -->
              </div>
              <!-- /TABLE COLUMN -->
  
              <!-- TABLE COLUMN -->
              <div class="table-column centered padded-left">
                <!-- TEXT STICKER -->
                <p class="text-sticker void">
                  <!-- TEXT STICKER ICON -->
                  $${jobs.budget.$numberInt}
                </p>
                <!-- /TEXT STICKER -->
              </div>
              <!-- /TABLE COLUMN -->
              <div class="table-column padded-left">
                <!-- PROGRESS STAT WRAP -->
                <p class="text-sticker void">
                ${date}
                </p>
  
              </div>
              <!-- /TABLE COLUMN -->
            </div>`
            
        });

        gigsList.innerHTML = elm;
        

    } catch(error){
        console.log(error.message)
    }
};

const sessStorage = async (e) => {
  
  console.log(e);
  window.sessionStorage.setItem("title", e);
  window.location.href = "05_Gig_info.html";
};

init();

