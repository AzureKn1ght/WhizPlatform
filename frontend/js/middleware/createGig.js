//create the variables for the title, budget, description, deadline, coding, design, other, required location, hirer, and hirer name
var title = document.getElementById("title");
var budget = document.getElementById("budget");
var description = document.getElementById("gig_requirement");
var deadline = document.getElementById("deadline");
var coding = document.getElementById("coding");
var design = document.getElementById("design");
var other = document.getElementById("other");
var requiredLocation = document.getElementById("location");
var hirer = window.sessionStorage.getItem("userId");
var hirerName = "";
//create click event for the create gig button
document.getElementById("createGig").addEventListener("click", getInput);

//create function to get hirer detatils from the database using the hirer id through fetch api
const getHirerDetails = async () => {
  let url =
    "https://ap-southeast-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/whiz-ihwsd/service/hirers/incoming_webhook/viewHirer";
  let data = {
    _id: hirer,
  };
  try {
    const res = await fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const details = await res.json();
    console.log(details);
    hirerName = details.full_name;
    console.log(hirerName);
  } catch (err) {
    console.log(err);
  }
};

//create function to post the gig to the database
const postGig = async (gig) => {
  let url =
    "https://ap-southeast-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/whiz-ihwsd/service/jobs/incoming_webhook/createGig";

  try {
    const res = await fetch(url, {
      method: "POST",
      body: JSON.stringify(gig),
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    console.log(data);
    window.location.href = "dashboard-hirer.html";
  } catch (err) {
    console.log(err);
  }
};

//create function to get the input from the user
function getInput(e) {
  //prevent the default action of the button
  e.preventDefault();
  //get the title input
  var titleInput = title.value;
  //get the budget input
  var budgetInput = parseInt(budget.value);
  //get the description input
  var descriptionInput = description.value;
  //get the deadline input
  var deadlineInput = deadline.value;
  //create array of skills
  var skills = [];
  //loop through the selected options for coding and push them to the array
  for (var i = 0; i < coding.options.length; i++) {
    if (coding.options[i].selected) {
      skills.push(coding.options[i].value);
    }
  }
  //loop through the selected options for design and push them to the array
  for (var i = 0; i < design.options.length; i++) {
    if (design.options[i].selected) {
      skills.push(design.options[i].value);
    }
  }
  //loop through the selected options for other and push them to the array
  for (var i = 0; i < other.options.length; i++) {
    if (other.options[i].selected) {
      skills.push(other.options[i].value);
    }
  }
  //get the location input
  var locationInput = requiredLocation.value;

  var image = Math.floor(Math.random() * 20) + 1;
  if(image <10){
  var profilePic = "img/marketplace/items/0" + image + ".jpg";
  var file = profilePic.toString();
  }
  else{
  var profilePic = "img/marketplace/items/" + image + ".jpg";
  var file = profilePic.toString();
  }

  //store the variables in an object
  var gig = {
    title: titleInput,
    budget: budgetInput,
    description: descriptionInput,
    deadline: deadlineInput,
    skills: skills,
    location: locationInput,
    hirer: hirer,
    hirerName: hirerName,
    background: file,
  };

  //display the object in the console
  console.log(gig);

  //post the gig to the database
  postGig(gig);
}

//call the get hirer details function
getHirerDetails();
