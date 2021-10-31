const refEmail = document.getElementById("email");
const meta = window.sessionStorage.getItem("accountId");
const metamaskField = document.getElementById("metamask");
const register = document.getElementById("register-button");
const refCountry = document.getElementById("country");
const refCoding = document.getElementById("skills_coding");
const refDesign = document.getElementById("skills_design");
const refName = document.getElementById("full_name");
const refCountryID = document.getElementById("country-id");
const refOtherSkills = document.getElementById("skills_others");
const refLanguages = document.getElementById("languages");

const metaMaskValue = () => {
  
    metamaskField.placeholder = `${meta}`;
  
}

const handleSubmit = async (event) => {
  event.preventDefault();

  const enteredEmail = refEmail.value;
  const enteredCountry = refCountry.value;
  const enteredName = refName.value;
  const enteredCountryID = refCountryID.value;
  const enteredLanguages = [...refLanguages.selectedOptions].map(
    (option) => option.value
  );
  const enteredSkills = [];

  for (var option of refCoding.options) {if (option.selected) {enteredSkills.push(option.value);}
  };

  for (var option of refDesign.options) {if (option.selected) {enteredSkills.push(option.value);}
  };

  for (var option of refOtherSkills.options) {if (option.selected) {enteredSkills.push(option.value);}
  };

  const userData = {
    email: enteredEmail,
    meta: meta,
    country_residence: enteredCountry,
    full_name: enteredName,
    country_id: enteredCountryID,
    skills: enteredSkills,
    languages: enteredLanguages,
  };
  console.log(userData);
  try{
    const res = await fetch("https://ap-southeast-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/whiz-ihwsd/service/freelancers/incoming_webhook/registerFreelancer", {
      method: "POST",
      body: JSON.stringify(userData),
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if(res.ok){
      const data = await res.json();
    console.log(data);
    alert(
      `Account successfully created ${enteredName}! Redirecting you to login page!`
      );
    window.location.href='index.html'
    
    }else {
    const message = await res.text();
    alert(message);
    }
  

}catch(error){
  console.log(error);

} 


};
metaMaskValue();
register.addEventListener("click", handleSubmit);