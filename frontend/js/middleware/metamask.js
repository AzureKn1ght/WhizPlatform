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
  window.location.href = "index.html";
}
