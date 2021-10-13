const refEmail = useRef(null);
const refPwd = useRef(null);
const refPswRepeat = useRef(null);
const refCountryOperations = useRef(null);
const refCompanyName = useRef(null);
const refOwnerName = useRef(null);
const refCountryID = useRef(null);
const refSkills = useRef(null);
const refIndustry = useRef(null);
const refLanguages = useRef(null);

const handleSubmit = async (event) => {
  event.preventDefault();

  const enteredEmail = refEmail.current.value;
  const enteredPwd = refPwd.current.value;
  const enteredPswRepeat = refPswRepeat.current.value;
  const enteredCountryOperations = refCountryOperations.current.value ;
  const enteredCompanyName = refCompanyName.current.value;
  const enteredOwnerName = refOwnerName.current.value;
  const enteredCountryID = refCountryID.current.value;
  const enteredSkills = refSkills.current.value;
  const enteredIndustry = refIndustry.current.value;
  const enteredLanguages = refLanguages.current.value

  
  if(enteredPwd !="" && enteredPwd == enteredPswRepeat){
  const userData = {
    email: enteredEmail,
    password: enteredPwd,
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
    const res = await fetch("https://ap-southeast-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/whiz-ihwsd/service/hirers/incoming_webhook/webhook0", {
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
      `Account successfully created ${enteredOwnerName}!`
      )
      window.location.href= "/"
    
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