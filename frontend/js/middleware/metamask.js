/*****************************************/
/* Detect the MetaMask Ethereum provider */
/*****************************************/
if (typeof window.ethereum !== "undefined") {
  console.log("MetaMask is installed!");
} else {
  alert("Please install MetaMask.");
  if (!on_index) window.location.href = "index.html";
}

/**********************************************************/
/* Handle chain (network) and chainChanged (per EIP-1193) */
/**********************************************************/
ethereum.on("chainChanged", handleChainChanged);
function handleChainChanged(_chainId) {
  // We recommend reloading the page, unless you must do otherwise
  window.location.href = "index.html";
}

/***********************************************************/
/* Handle user accounts and accountsChanged (per EIP-1193) */
/***********************************************************/
let currentAccount = null;
ethereum
  .request({ method: "eth_accounts" })
  .then(handleAccountsChanged)
  .catch((err) => {
    alert("Please connect to MetaMask.");
    console.error(err);
    if (!on_index) window.location.href = "index.html";
  });

// Note that this event is emitted on page load.
// If the array of accounts is non-empty, you're already connected.
ethereum.on("accountsChanged", handleAccountsChanged);

// For now, 'eth_accounts' will continue to always return an array
function handleAccountsChanged(accounts) {
  if (accounts.length === 0 && !on_index) {
    // MetaMask is locked or the user has not connected any accounts
    alert("Please connect to MetaMask.");
    window.location.href = "index.html";
  } else if (accounts[0] !== currentAccount) {
    currentAccount = accounts[0];
    console.log(currentAccount);
    sessionStorage.setItem("accountId", currentAccount);
  }
}

/***********************************************************/
/*              Handle account disconnection               */
/***********************************************************/
ethereum.on("disconnect", handleAccountsDisconnected);

function handleAccountsDisconnected() {
  alert("Please connect to MetaMask.");
  if (!on_index) window.location.href = "index.html";
}

//Create function to log out user and clear session storage
function logOut() {
  sessionStorage.clear();
  window.location.href = "login.html";
}

//create function to get user's name from session storage
function getUserName() {
  var name = sessionStorage.getItem("userName");
  if (name) {
    document.getElementById("username_1").innerHTML = name;
    document.getElementById("username_2").innerHTML = name;
    document.getElementById("username_3").innerHTML = `Hi ${name}!`;
  }
}

//create function to change the href depending on user type
const changeHref = () => {
  const userType = sessionStorage.getItem("userType");
  const newGigSideBar = document.getElementById("newGigSideBar");
  const dashboardSideBar = document.getElementById("dashboardSideBar");
  const newGigMenu = document.getElementById("newGigMenu");
  const dashboardMenu = document.getElementById("dashboardMenu");
  const dashboardTopBar = document.getElementById("dashboardTopBar");
  const newGigNavBar = document.getElementById("newGigNavBar");
  const dashboardNavBar = document.getElementById("dashboardNavBar");

  if (userType == "freelancer") {
    newGigSideBar.href = "gig-search.html";
    newGigSideBar.setAttribute("data-title", "Gig Search");
    dashboardSideBar.href = "dashboard-freelancer.html";
    newGigMenu.href = "gig-search.html";
    newGigMenu.innerHTML = `<svg class="menu-item-link-icon icon-overview">
        <use xlink:href="#svg-revenue"></use>
        </svg>Gig Search`;
    dashboardMenu.href = "dashboard-freelancer.html";
    dashboardTopBar.href = "dashboard-freelancer.html";
    newGigNavBar.href = "gig-search.html";
    newGigNavBar.innerHTML = `<svg class="menu-item-link-icon icon-overview">
        <use xlink:href="#svg-revenue"></use>
        </svg>Gig Search`;
    dashboardNavBar.href = "dashboard-freelancer.html";

  } else if (userType == "hirer") {

    newGigSideBar.href = "create-gig.html";
    newGigSideBar.setAttribute("data-title", "Create Gig");
    dashboardSideBar.href = "dashboard-hirer.html";
    dashboardSideBar.title = "Dashboard";
    newGigMenu.href = "create-gig.html";
    newGigMenu.innerHTML = `<svg class="menu-item-link-icon icon-overview">
        <use xlink:href="#svg-revenue"></use>
      </svg>Create Gig`;
    dashboardMenu.href = "dashboard-hirer.html";
    dashboardTopBar.href = "dashboard-hirer.html";
    newGigNavBar.href = "create-gig.html";
    newGigNavBar.innerHTML = `<svg class="menu-item-link-icon icon-overview">
        <use xlink:href="#svg-revenue"></use>
        </svg>Create Gig`;
    dashboardNavBar.href = "dashboard-hirer.html";
  }
};

//create a function to check the accountId from session storage and change the href accordingly
const checkAccountId = () => {
  const accountId = sessionStorage.getItem("accountId");
  //create const to select dom elements by id for elements "profileLink1" to "profileLink28"
  const profileLink1 = document.getElementById("profileLink1");
  const profileLink2 = document.getElementById("profileLink2");
  const profileLink3 = document.getElementById("profileLink3");
  const profileLink4 = document.getElementById("profileLink4");
  const profileLink5 = document.getElementById("profileLink5");
  const profileLink6 = document.getElementById("profileLink6");
  const profileLink7 = document.getElementById("profileLink7");
  const profileLink8 = document.getElementById("profileLink8");
  const profileLink9 = document.getElementById("profileLink9");
  const profileLink10 = document.getElementById("profileLink10");
  const profileLink11 = document.getElementById("profileLink11");
  const profileLink12 = document.getElementById("profileLink12");
  const profileLink13 = document.getElementById("profileLink13");
  const profileLink14 = document.getElementById("profileLink14");
  const profileLink15 = document.getElementById("profileLink15");
  const profileLink16 = document.getElementById("profileLink16");
  const profileLink17 = document.getElementById("profileLink17");
  const profileLink18 = document.getElementById("profileLink18");
  const profileLink19 = document.getElementById("profileLink19");
  const profileLink20 = document.getElementById("profileLink20");
  const profileLink21 = document.getElementById("profileLink21");
  const profileLink22 = document.getElementById("profileLink22");
  const profileLink23 = document.getElementById("profileLink23");
  const profileLink24 = document.getElementById("profileLink24");
  const profileLink25 = document.getElementById("profileLink25");
  const profileLink26 = document.getElementById("profileLink26");
  const profileLink27 = document.getElementById("profileLink27");
  const profileLink28 = document.getElementById("profileLink28");


  if (accountId != "0xb88d7171a62a0c62e22f62af811c9c859fce4618") {
    //set the href of all profile links to "#"
    profileLink1.href = "#";
    profileLink2.href = "#";
    profileLink3.href = "#";
    profileLink4.href = "#";
    profileLink5.href = "#";
    profileLink6.href = "#";
    profileLink7.href = "#";
    profileLink8.href = "#";
    profileLink9.href = "#";
    profileLink10.href = "#";
    profileLink11.href = "#";
    profileLink12.href = "#";
    profileLink13.href = "#";
    profileLink14.href = "#";
    profileLink15.href = "#";
    profileLink16.href = "#";
    profileLink17.href = "#";
    profileLink18.href = "#";
    profileLink19.href = "#";
    profileLink20.href = "#";
    profileLink21.href = "#";
    profileLink22.href = "#";
    profileLink23.href = "#";
    profileLink24.href = "#";
    profileLink25.href = "#";
    profileLink26.href = "#";
    profileLink27.href = "#";
    profileLink28.href = "#";
  };
};



getUserName();
changeHref();
checkAccountId();
