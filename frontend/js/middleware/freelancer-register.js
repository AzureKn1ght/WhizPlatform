const refEmail = useRef(null);
const refPwd = useRef(null);
const refPswRepeat = useRef(null);
const refCountry = useRef(null);
const refCoding = useRef(null);
const refDesign = useRef(null);
const refName = useRef(null);
const refCountryID = useRef(null);
const refOtherSkills = useRef(null);
const refLanguages = useRef(null);

const handleSubmit = async (event) => {
  event.preventDefault();

  const enteredEmail = refEmail.current.value;
  const enteredPwd = refPwd.current.value;
  const enteredPswRepeat = refPswRepeat.current.value;
  const enteredCountry = refCountry.current.value ;
  const enteredName = refName.current.value;
  const enteredCountryID = refCountryID.current.value;
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