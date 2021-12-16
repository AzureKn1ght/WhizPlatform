<div id="top"></div>
<!--
*** WHIZ DOCUMENTATION
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Stargazers][stars-shield]][stars-url]
[![Watchers][watchers-shield]][watchers-url]
[![Deployments][deployments-shield]][deployments-url]
[![License: CC BY-NC-ND 4.0][license-shield]][license-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a align="center" href="https://azurekn1ght.github.io/WhizPlatform">
    <img src="frontend/img/whiz/hat_coin_icon.png" alt="Logo" width="128" height="128">
  </a>

  <h3 align="center">WHIZ PLATFORM</h3>

  <p align="center">
    next-generation freelance ecosystem powered by blockchains
    <br />
    <a href="README.md"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://azurekn1ght.github.io/WhizPlatform">View Demo</a>
    ·
    <a href="https://github.com/AzureKn1ght/WhizPlatform/issues">Report Bug</a>
    ·
    <a href="https://github.com/AzureKn1ght/WhizPlatform/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-whiz">About Whiz</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#network-setup">Network Setup</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#frontend">Frontend</a></li>
    <li>
        <a href="#backend">Backend</a>
        <ul>
            <li><a href="#Freelancers">Freelancers</a></li>
            <li><a href="#Hirers">Hirers</a></li>
            <li><a href="#Jobs">Jobs</a></li>
            <li><a href="#Reviews">Reviews</a></li>
        </ul>
    </li>
    <li><a href="#smart-contracts">Smart Contracts</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About Whiz

[![Product Name Screen Shot][product-screenshot]](https://azurekn1ght.github.io/WhizPlatform)

Whiz is a blockchain-based global freelancing platform that offers verified high quality jobs and freelancers at low costs. Whiz does not charge commissions. You can save on what traditional freelance platforms charge as commissions for job matching. Whiz uses blockchains to process and log transactions, including reviews. This translates to authentic and immutable reviews, better quality jobs and freelancers, and cost savings.

Job agreements are written in smart contracts, coupled with payment escrow, onto the blockchain. When you enter a job agreement on Whiz, whether as a hirer or freelancer, the job scope is mutually defined and cannot be changed by either party. Payment is committed by the buyer, but locked away from either party into the smart contract until its fulfilment. Whiz does not have access to these funds at any point in time.

Key Benefits of Whiz:
* Access to Qualified Freelancers Globally
* Smart Contracts ensure Well-Defined Scopes & Payments
* Enjoy Zero Commission Fees, Only Pay For What You Need

In a nutshell, Whiz provides secure, traceable, reliable payments using smart contracts enabled via the blockchain. All your pain points with other freelancing platforms are well taken care off!

<p align="right">(<a href="#top">back to top</a>)</p>



### Built With

Whiz runs on a hybrid technology stack that employs the blockchain along with modern web technologies. The frontend client is built using HTML5, CSS3, and JavaScript. It is hosted on a web server and can be accessed via web browsers or installed on mobile devices as a progressive web application (PWA).

The backend components are hosted using a state-of-the-art serverless computing architecture by means of the MongoDB Atlas and MongoDB Realm services. A secured connection between the business functions in MongoDB Realm and the MongoDB Atlas database allows for the processing of information required for the web application to function. By adopting a serverless architecture, we further lower our overhead operating and maintenance costs resulting in significant efficiency gains.

Key Technologies Used:
* [Bootstrap](https://getbootstrap.com)
* [MongoDB Atlas](https://www.mongodb.com/atlas/database) 
* [MongoDB Realm](https://www.mongodb.com/realm) 
* [web3.js](https://github.com/ChainSafe/web3.js) 
* [MetaMask](https://metamask.io) 
* [Solidity](https://soliditylang.org)
* [Polygon](https://polygon.technology)  

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

We use web3.js to facilitate blockchain transactions, login and registration. You will need to have a Web3 compatible wallet installed on your browser and connected to the Polygon Testnet. 

### Prerequisites

If you have not already done so, please install MetaMask wallet on your device.

* [Install MetaMask](https://metamask.io/download) 

### Network Setup

_You will need to be connected to the [Mumbai Testnet](https://mumbai.polygonscan.com/) on [Polygon](https://polygon.technology/)._

* Please refer to the following guide: [Connect to Polygon's Testnet](https://docs.mobius.finance/guides/connect-to-polygons-testnet).  

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

The following video shows an example of a completed workflow. Starting from the homepage, to the freelancer applying for and completing a job, followed by confirmation and payment.

https://user-images.githubusercontent.com/1888822/144605790-3a99a67b-d0dc-4bde-b6d5-1df770d6dc9b.mp4

_For more details, please refer to [FAQ](https://azurekn1ght.github.io/WhizPlatform/FAQ.html)_

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Frontend

These are the frontend pages and their related features. 

  
| # | Name         | File                     | Description                                         | Features                                                                                                                                    |
|---|--------------|--------------------------|-----------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------|
| 1 | Landing Page | [index.html](frontend/index.html) | The landing page to introduce users to our platform | <ul> <li> Hero image, login/signup links</li>  <li> Introduction, platform benefits </li> <li> Highlights of the available gigs </li> </ul> |
| 2  | Login Page | [login.html](frontend/login.html)  | The login paged allows users to login to the platform using their metamask. Users whose metamask id is not registered, will be redirected to registration | <ul> <li> Hirer/Freelancer login switch button</li> <li> Connect with metamask button </li> </ul> |
| 3 | Freelancer Registration Page | [register-freelancer.html](frontend/register-freelancer.html) | The freelancer registration page allows a new user to create a freelancer account on the platform | <ul> <li> Input fields for user to fill up information about themselves</li> </ul> |
| 4 | Hirer Registration Page | [register-hirer.html](frontend/register-hirer.html) | The hirer registration page allows a new user to create a hirer account on the platform | <ul> <li> Input fields for user to fill up information about themselves</li> </ul> |
| 5 | Hirer Dashboard | [dashboard-hirer.html](frontend/dashboard-hirer.html) | The hirer dashboard page allows a the hirer to view recommended freelancers, their jobs in progress, jobs open for application, completed jobs, and reviews | <ul> <li> Recommended Freelancer </li> <li> Jobs in Progress </li> <li> Jobs open for application </li> <li> Completed Jobs </li> <li> Reviews </li> </ul> | 
| 6 | Freelancer Dashboard | [dashboard-freelancer.html](frontend/dashboard-freelancer.html) | The freelancer dashboard page allows a the freelancer to view the recommended jobs, jobs in progress, jobs applied for, completed jobs, and reviews | <ul> <li> Recommended Jobs </li> <li> Jobs in Progress </li> <li> Jobs Applied for </li> <li> Completed Jobs </li> <li> Reviews </li> </ul> |
| 7 | Create Gig Page | [create-gig.html](frontend/create-gig.html) | The create gig page allows a hirer to post a job on the platform | <ul> <li> Input fields for user to fill up information about the job </li> </ul> |
| 8 | Gig Search Page | [gig-search.html](frontend/gig-search.html) | The gig search page allows a freelancer to view jobs on the platform | <ul> <li> Available jobs </li> </ul> |
| 9 | Gig Info Page | [gig-info.html](frontend/gig-info.html) | The gig info page allows a freelancer to view the job details and apply for the job | <ul> <li> Job details </li> <li> Apply for job button </li> </ul> |
| 10 | Select Freelancer Page | [select-freelancer.html](frontend/select-freelancer.html) | The select freelancer page allows a hirer to select a freelancer for the job | <ul> <li> Job details </li> <li> Freelancer details </li> <li> Select freelancer button </li> </ul> |
| 11 | Contract Page | [contract.html](frontend/contract.html) | The contract page allows the hirer to confirm the escrowing of funds after selecting the freelancer and initialise the smart contract | <ul> <li> Job details </li> <li> Hirer Details </li> <li> Freelancer Details</li> <li> Approve USDC button </li> <li> Create Contract Button </li> </ul> |
| 12 | Complete Gig Freelancer Page | [complete-gig-fl.html](frontend/complete-gig-fl.html) | The complete gig freelancer page allows the freelancer to confirm the completion of the job and leave a review for the hirer | <ul> <li> Job details </li> <li> Ratings and comments </li> <li> Recommendation </li> <li> Submit Button </li> </ul> |
| 13 | Complete Gig Hirer Page | [complete-gig-hr.html](frontend/complete-gig-hr.html) | The complete gig hirer page allows the hirer to confirm the delivery of the job and leave a review for the freelancer | <ul> <li> Job details </li> <li> Ratings and comments </li> <li> Recommendation </li> <li> Submit Button </li> </ul> |
| 14 | Badges Page | [badges.html](frontend/badges.html) | The badges page allows a user to view the badges they have earned and their current experience and progress towards being a WHIZard | <ul> <li> Progress and experience </li><li> Badges </li> </ul> |
| 15 | Premium Features Page | [premium-features.html](frontend/premium-features.html) | The premium features page allows a user to view the premium features available for purchase or in exchange for the WHIZ tokens they have earned | <ul> <li> Premium features </li> </ul> |
| 16 | FAQ Page | [FAQ.html](frontend/FAQ.html) | The FAQ page allows a user to view the frequently asked questions and answers | <ul> <li> FAQ </li> </ul> |
| 17 | Freelancer Profile Page | [freelancer-profile.html](frontend/freelancer-profile.html) | The freelancer profile page allows a freelancer to view their profile | <ul> <li> Profile details </li> </ul> |
| 18 | 404 Page | [404.html](frontend/404.html) | The 404 page is displayed when a user tries to access a page that does not exist | <ul> <li> 404 error </li> </ul> |


<p align="right">(<a href="#top">back to top</a>)</p>



<!-- BACKEND -->
## Backend

### Freelancers

API endpoints to handle freelancer related functions. 


| Endpoint        | Description            | Parameters | Method |
|-----------------|------------------------|------------|--------| 
| loginFreelancer | Login for freelancers  | metamask   | POST   | 
| registerFreelancer | Registration for freelancers | email, metamask, country of residence, full name, country of issued id, languages, skills | POST |
| viewFlSkills | Returns the details of a specific freelancer based on the freelancer id | Freelancer ID | POST |
| viewFreelancer | Returns all freelancers | NA | GET |
| updateFreelancer | updates a specified field for freelancer records that meet the requirements | metamask (or any other field but endpoint must be edited accordingly) | POST |


### Hirers

API endpoints to handle hirer related functions. 

| Endpoint        | Description            | Parameters | Method |
|-----------------|------------------------|------------|--------|
| createHirer | creates a new hirer record when a hirer registers | email, metamask, country of operations, company name, full name, country of issued id, skills required, industry, languages required| POST |
| viewHirer | Returns details of specified hirer based on hirer ID | Hirer ID | POST |
| loginHirer | Login for hirers | metamask | POST |
| editHirer | updates a specified field for hirer records that meet the requirements| background img file (or any other field but endpoint must be edited accordingly) | POST |



### Jobs

API endpoints to handle job related functions. 

| Endpoint        | Description            | Parameters | Method |
|-----------------|------------------------|------------|--------|
| viewJobs | Returns all jobs with a status of open | NA | GET |
| createGig | Creates a new gig | title, budget, description, deadline, skills required, location, hirer, hirer name, background, date created | POST |
| jobInfo | Returns the details of a specific job | job ID | POST |
| bidJob | applies for the job and adds the freelancer to the array of applicants | freelancer ID, job ID | POST |
| confirmJob | confirms the job | job ID, freelancer ID, freelancer name | POST |
| completeJob | marks the job as completed | job ID | POST |
| appliedJobs | returns all jobs that the freelancer has applied for | freelancer ID | POST |
| jobsinProgress | returns all jobs that the freelancer is currently working on | freelancer ID | POST |
| completedJobs | returns all jobs that the freelancer has completed | freelancer ID | POST |
| recommendedJobs | returns all jobs that is recommended to the freelancer | skills | POST |
| hirerjobsopenforapplication | returns all jobs that the hirer has open for application | hirer ID | POST |
| hirerjobsinProgress | returns all jobs that the hirer has with an assigned freelancer with a status of ASSIGNED or DELIVERED | hirer ID | POST |
| hirercompletedJobs | returns all jobs that the hirer has with an assigned freelancer with a status of COMPLETED | hirer ID | POST |


### Reviews

API endpoints to handle review related functions. 


| Endpoint        | Description            | Parameters | Method |
|-----------------|------------------------|------------|--------|
| flReviews | Creates a new review | review ID, reviewer and reviewee metamask, ratings, comments, job details | POST |
| getReview | Returns the details of a specific review | job ID | POST |


<p align="right">(<a href="#top">back to top</a>)</p>



<!-- SMART CONTRACTS -->
## Smart Contracts

These are the smart contracts deployed to the [Mumbai Testnet](https://mumbai.polygonscan.com/) on the [Polygon Blockchain](https://polygon.technology/). In order to add the tokens to your MetaMask wallet, please refer to: [How to add unlisted tokens (custom tokens) in MetaMask](https://metamask.zendesk.com/hc/en-us/articles/360015489031-How-to-add-unlisted-tokens-custom-tokens-in-MetaMask). 
<br>
<br>

### USDC Token

An ERC-20 testnet token representing the USDC stablecoin. 

**Source File:** [USDCToken.sol](contracts/USDCToken.sol)

**Deployed Address:** [0xFAFD46f3671b1fcfd7906CAe158C3008c2fFc358](https://mumbai.polygonscan.com/token/0xFAFD46f3671b1fcfd7906CAe158C3008c2fFc358)  
<br>
<br>

### WHIZ Token

An ERC-20 native token used for issuing rewards for our platform. 

**Source File:** [WhizToken.sol](contracts/WhizToken.sol)

**Deployed Address:** [0xD2B44b2FF2D07F2b6fad9a728adf176B5639F87B](https://mumbai.polygonscan.com/token/0xD2B44b2FF2D07F2b6fad9a728adf176B5639F87B)  
<br>
<br>

### Reviews Contract

A smart contract for verified gig reviews to be stored on the blockchain. 

**Source File:** [ReviewsContract.sol](contracts/ReviewsContract.sol)

**Deployed Address:** [0xfb8362626ddE20BC9b8f4e323d49b52D89dD98c8](https://mumbai.polygonscan.com/address/0xfb8362626ddE20BC9b8f4e323d49b52D89dD98c8)  
<br>
<br>

### Gigs Contract

A smart contract to escrow funds, manage gigs, reviews, and issue rewards. 

**Source File:** [GigsContract.sol](contracts/GigsContract.sol)

**Deployed Address:** [0x9383fB4D8302a17044D34ffbA924a15d9C6Db292](https://mumbai.polygonscan.com/address/0x9383fB4D8302a17044D34ffbA924a15d9C6Db292)
<br>
<br>

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

If you have any further questions or comments, please feel free to reach out to any of our core contributors:

* [AzureKn1ght](https://github.com/AzureKn1ght)
* [Bright3stday](https://github.com/Bright3stday)
* [Kenneth Cheong](https://github.com/kenneth-cheong) | [Email](mailto:clarinet.kenneth@gmail.com)
* [yihching8](https://github.com/yihching8)
* [kennethzhg](https://github.com/kennethzhg)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

We would like to take this opportunity to thank the [NUS School of Computing](https://www.comp.nus.edu.sg/) and [NUS FinTech Lab](https://fintechlab.nus.edu.sg/) for the experience of working on this exciting project!

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/AzureKn1ght/WhizPlatform?style=for-the-badge
[contributors-url]: https://github.com/AzureKn1ght/WhizPlatform/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/AzureKn1ght/WhizPlatform?style=for-the-badge
[forks-url]: https://github.com/AzureKn1ght/WhizPlatform/network/members
[stars-shield]: https://img.shields.io/github/stars/AzureKn1ght/WhizPlatform?style=for-the-badge
[stars-url]: https://github.com/AzureKn1ght/WhizPlatform/stargazers
[issues-shield]: https://img.shields.io/github/issues/AzureKn1ght/WhizPlatform?style=for-the-badge
[issues-url]: https://github.com/AzureKn1ght/WhizPlatform/issues
[watchers-shield]: https://img.shields.io/github/watchers/AzureKn1ght/WhizPlatform?style=for-the-badge
[watchers-url]: https://github.com/AzureKn1ght/WhizPlatform/watchers
[license-shield]: https://img.shields.io/badge/License-CC%20BY--NC--ND%204.0-lightgrey.svg?style=for-the-badge
[license-url]: https://creativecommons.org/licenses/by-nc-nd/4.0/
[deployments-shield]: https://img.shields.io/github/deployments/AzureKn1ght/WhizPlatform/github-pages?style=for-the-badge
[deployments-url]: https://github.com/AzureKn1ght/WhizPlatform/deployments
[product-screenshot]: screenshots/devices.png

