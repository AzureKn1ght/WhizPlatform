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
getUserName();
changeHref();
