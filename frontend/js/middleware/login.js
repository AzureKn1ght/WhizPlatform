const emailFreelancerRef = useRef(null);
  const passFreelancerRef = useRef(null);
  const emailHirerRef = useRef(null);
  const passHirerRef = useRef(null);

  const loginFreelancer = async (event) => {
    event.preventDefault();

    const enteredEmail = emailFreelancerRef.current.value;
    const enteredPassword = passFreelancerRef.current.value;

    const userData = {
      email: enteredEmail,
      pwd: enteredPassword,
    };

    try {
      const res = await fetch("http://localhost:4000/freelancerlogin", {
        method: "POST",
        body: JSON.stringify(userData),
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.ok) {
        const data = await res.json();
        console.log(data);
        console.log(`Logged in successfully welcome ${enteredEmail}!`);
        window.location.href = "/dashboard";
      } else {
        const message = await res.text();
        alert(message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const loginHirer = async (event) => {
    event.preventDefault();

    const enteredEmail = emailHirerRef.current.value;
    const enteredPassword = passHirerRef.current.value;

    const userData = {
      email: enteredEmail,
      pwd: enteredPassword,
    };

    try {
      const res = await fetch("http://localhost:4000/hirerlogin", {
        method: "POST",
        body: JSON.stringify(userData),
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.ok) {
        const data = await res.json();
        console.log(data);
        alert(`Logged in successfully welcome ${enteredEmail}!`);
       //history.replace("/dashboard");
        window.location.href="/dashboard";
      } else {
        const message = await res.text();
        alert(message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const refreshTokenSetup = (res) => {
    // Timing to renew access token
    let refreshTiming = (res.tokenObj.expires_in || 3600 - 5 * 60) * 1000;

    const refreshToken = async () => {
      const newAuthRes = await res.reloadAuthResponse();
      refreshTiming = (newAuthRes.expires_in || 3600 - 5 * 60) * 1000;
      console.log("newAuthRes:", newAuthRes);
      // saveUserToken(newAuthRes.access_token);  <-- save new token
      localStorage.setItem("authToken", newAuthRes.id_token);

      // Setup the other timer after the first one
      setTimeout(refreshToken, refreshTiming);
    };

    // Setup first refresh timer
    setTimeout(refreshToken, refreshTiming);
  };

  const clientId =
    "447766182718-8v51ihfmm6ndehpe3d58hm4pnje93poa.apps.googleusercontent.com";

  //Google login handler to verify
  const handleFreelancerLogin = async (googleData) => {
    try {
      const res = await fetch(
        "http://localhost:4000/freelancer/api/v1/auth/google",
        {
          method: "POST",
          body: JSON.stringify(googleData),
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (res.ok) {
        const data = await res.json();
        console.log(data);
        console.log("Login Success: currentUser:", googleData.profileObj);
        /*alert(
          `Logged in successfully welcome ${googleData.profileObj.name} 😍. \n See console for full profile object.`
        );
        //history.replace("/dashboard");*/
        window.location.href="/dashboard";
      } else {
        const message = await res.text();

        alert(message);
      }

      refreshTokenSetup(res);
      // store returned user somehow
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleHirerLogin = async (googleData) => {
    try {
      const res = await fetch(
        "http://localhost:4000/hirer/api/v1/auth/google",
        {
          method: "POST",
          body: JSON.stringify({
            token: googleData.tokenId,
          }),
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (res.ok) {
        const data = await res.json();
        console.log(data);
        console.log("Login Success: currentUser:", googleData.profileObj);
        alert(
          `Logged in successfully welcome ${googleData.profileObj.name} 😍. \n See console for full profile object.`
        );
        window.location.href="/dashboard";
        //history.replace("/dashboard");
      } else {
        const message = await res.text();

        alert(message);
      }

      refreshTokenSetup(res);
      // store returned user somehow
    } catch (error) {
      console.log(error.message);
    }  
    };

    const hirerRegisterRedirect =  (e)=> {
      e.preventDefault(); 
      window.location.href = "/registerhirer";
    };

    const freelancerRegisterRedirect = (e) => {
      e.preventDefault();
      window.location.href = "/registerfreelancer";
  };