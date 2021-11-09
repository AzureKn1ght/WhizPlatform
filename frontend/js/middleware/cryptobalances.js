// (c) AzureKn1ght
const usdcBal = document.getElementById("usdc-bal");
const whizBal = document.getElementById("whiz-bal");
const myweb3 = new Web3(window.ethereum);

//USDC CONTRACT
const usdcCon = new myweb3.eth.Contract(usdcABI, USDCaddress);

//WHIZ CONTRACT
const whizCon = new myweb3.eth.Contract(WhizABI, WHIZaddress);

//Initialize the page on load
function load() {
  //Get user name and id
  var accountHash = sessionStorage.getItem("accountId") || currentAccount;

  //Get account balance from token contracts
  getTokenBal(accountHash, usdcCon, usdcBal, 0);
  getTokenBal(accountHash, whizCon, whizBal, 0);
}

//Function to get token balance
function getTokenBal(id, tokContract, elm, dec) {
  tokContract.methods
    .balanceOf(id)
    .call()
    .then((result) => {
      let bal = Number.parseFloat(myweb3.utils.fromWei(result)).toFixed(dec);
      console.log(bal);
      elm.innerText = `${bal}`;
    })
    .catch((error) => {
      console.log(error);
    });
}

load();
