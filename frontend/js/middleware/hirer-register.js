const refEmail = document.getElementById("email");
const metamaskField = document.getElementById("metamask");
const meta = window.sessionStorage.getItem("accountId");
const register = document.getElementById("register-button");
const refCountryOperations = document.getElementById("country-operation");
const refCompanyName = document.getElementById("company-name");
const refOwnerName = document.getElementById("full-name");
const refCountryID = document.getElementById("country-id");
const refSkills = document.getElementById("skills");
const refIndustry = document.getElementById("industry");
const refLanguages = document.getElementById("languages");


const metaMaskValue = () => {
  
  metamaskField.placeholder = `${meta}`;

};


const handleSubmit = async (event) => {
  event.preventDefault();

  const enteredEmail = refEmail.value;

  const enteredCountryOperations = [...refCountryOperations.selectedOptions].map(option => option.value);
  const enteredCompanyName = refCompanyName.value;
  const enteredOwnerName = refOwnerName.value;
  const enteredCountryID = refCountryID.value;
  const enteredSkills = [...refSkills.selectedOptions].map((option) => option.value);
  const enteredIndustry = refIndustry.value;
  const enteredLanguages = [...refLanguages.selectedOptions].map((option) => option.value);

  
  
  const userData = {
    email: enteredEmail,
    meta: meta,
    country_operations: enteredCountryOperations,
    company_name: enteredCompanyName,
    full_name: enteredOwnerName,
    country_id: enteredCountryID,
    skills: enteredSkills,
    industry: enteredIndustry,
    languages: enteredLanguages,
  }

  console.log(userData);

  try{
    const res = await fetch("https://ap-southeast-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/whiz-ihwsd/service/hirers/incoming_webhook/createHirer", {
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
      `Account successfully created ${enteredOwnerName}! Redirecting you to login page!`
      )
      window.location.href= "login.html"
    
    }else {
    const message = await res.json();
    alert(message.error);
    }
  

}catch(error){
  console.log(error);

}
 
};

metaMaskValue();
register.addEventListener("click", handleSubmit);