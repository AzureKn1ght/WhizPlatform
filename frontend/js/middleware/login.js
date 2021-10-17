  const emailFreelancerRef = document.getElementById("freelancer-email");
  const passFreelancerRef = document.getElementById("freelancer-password");
  const emailHirerRef = document.getElementById("hirer-email");
  const passHirerRef = document.getElementById("hirer-password");
  const freelancerLoginButton = document.getElementById("freelancer-login");
  const hirerLoginButton = document.getElementById("hirer-login");
  const freelancerMetaLog = document.getElementById("meta-freelancer");
  const hirerMetaLog = document.getElementById("meta-hirer");
  
  function freelancerMetalogin() {
    ethereum
      .request({ method: "eth_requestAccounts" })
      .then(() => {
        handleAccountsChanged;
        console.log("connection done");
        //window.location.href = "newsfeed.html";
      })
      .catch((err) => {
        if (err.code === 4001) {
          // EIP-1193 userRejectedRequest error
          // If this happens, the user rejected the connection request.
          alert("Please connect to MetaMask.");
        } else {
          alert("Error connecting to MetaMask. Please try again.");
          console.error(err);
        }
      });
  }

  function hirerMetalogin() {
    ethereum
      .request({ method: "eth_requestAccounts" })
      .then(() => {
        handleAccountsChanged;
        console.log("connection done");
        //window.location.href = "dashboard.html";
      })
      .catch((err) => {
        if (err.code === 4001) {
          // EIP-1193 userRejectedRequest error
          // If this happens, the user rejected the connection request.
          alert("Please connect to MetaMask.");
        } else {
          alert("Error connecting to MetaMask. Please try again.");
          console.error(err);
        }
      });
  }
 
  const loginFreelancer = async (event) => {
    event.preventDefault();

    var enteredEmail = emailFreelancerRef.value;
    const enteredPassword = passFreelancerRef.value;

    const userData = {
      email: enteredEmail,
      password: enteredPassword,
    };

    try {
      const res = await fetch("https://ap-southeast-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/whiz-ihwsd/service/freelancers/incoming_webhook/loginFreelancer", {
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
        window.sessionStorage.setItem("userId",data._id)
        window.location.href = "02_Newsfeed.html";
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

    const enteredEmail = emailHirerRef.value;
    const enteredPassword = passHirerRef.value;

    const userData = {
      email: enteredEmail,
      password: enteredPassword,
    };

    try {
      const res = await fetch("https://ap-southeast-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/whiz-ihwsd/service/hirers/incoming_webhook/loginHirer", {
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
        console.log(data._id);
        console.log(`Logged in successfully welcome ${enteredEmail}!`);
        window.sessionStorage.setItem("userId",data._id)
        window.location.href="02_Newsfeed.html";
      } else {
        const message = await res.text();
        alert(message);
      }
    } catch (error) {
      console.log(error);
    }
  };


  const clientId =
    "447766182718-8v51ihfmm6ndehpe3d58hm4pnje93poa.apps.googleusercontent.com";

  //Google login handler to verify
  const handleCredentialResponseFreelancer = async (response) => {
    console.log("Encoded JWT ID token: " + response.credential);
    /* try {
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
        //history.replace("/dashboard");
        window.location.href="/dashboard";
      } else {
        const message = await res.text();

        alert(message);
      }

      refreshTokenSetup(res);
      // store returned user somehow
    } catch (error) {
      console.log(error.message);
    } */
  };

  const handleCredentialResponseHirer = async (googleData) => {
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

  freelancerLoginButton.addEventListener("click", loginFreelancer);
  hirerLoginButton.addEventListener("click",loginHirer);
  freelancerMetaLog.addEventListener("click", freelancerMetalogin)
  hirerMetaLog.addEventListener("click",hirerMetalogin)