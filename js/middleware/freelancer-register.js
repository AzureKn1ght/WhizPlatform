const refEmail = document.getElementById("email");
const meta = window.sessionStorage.getItem("accountId");

const refCountry = document.getElementById("country");
const refCoding = document.getElementById("coding");
const refDesign = document.getElementById("design");
const refName = document.getElementById("name");
const refCountryID = document.getElementById("country-id");
const refOtherSkills = document.getElementById("other-skills");
const refLanguages = document.getElementById("languages");

const handleSubmit = async (event) => {
  event.preventDefault();

  const enteredEmail = refEmail.value;
  const enteredPwd = refPwd.value;
  const enteredPswRepeat = refPswRepeat.value;
  const enteredCountry = refCountry.value ;
  const enteredName = refName.value;
  const enteredCountryID = refCountryID.value;
  const str = `${refCoding.current.value}, ${refDesign.current.value}, ${refOtherSkills.current.value}`;
  const langs = refLanguages.current.value;
  const  enteredLanguages= langs.split(",").map(item=>item.trim());
  const enteredSkills = str.split(",").map(item=>item.trim());


  if(enteredPwd !="" && enteredPwd == enteredPswRepeat){

  const userData = {
    email: enteredEmail,
    password: enteredPwd,
    country_residence: enteredCountry,
    full_name: enteredName,
    country_id: enteredCountryID,
    skills: enteredSkills,
    languages: enteredLanguages
  }
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
      `Account successfully created ${enteredName}!`
      );
    window.location.href='/'
    
    }else {
    const message = await res.text();
    alert(message);
    }
  

}catch(error){
  console.log(error);

} 
} else{
alert(
  "Error: Please check that you've entered and confirmed your password!"
); 
}
}