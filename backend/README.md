# Backend Services

## 1\. Freelancers

API endpoints to handle freelancer related functions. 


| Endpoint        | Description            | Parameters | Method | URL                                                                                                                                       |
|-----------------|------------------------|------------|--------|-------------------------------------------------------------------------------------------------------------------------------------------|
| loginFreelancer | Login for freelancers  | metamask   | POST   | https://ap-southeast-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/whiz-ihwsd/service/freelancers/incoming_webhook/loginFreelancer |
| registerFreelancer | Registration for freelancers | email, metamask, country of residence, full name, country of issued id, languages, skills | POST | https://ap-southeast-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/whiz-ihwsd/service/freelancers/incoming_webhook/registerFreelancer |
| viewFlSkills | Returns the details of a specific freelancer based on the freelancer id | Freelancer ID | POST | https://ap-southeast-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/whiz-ihwsd/service/freelancers/incoming_webhook/viewFlSkills |
| viewFreelancer | Returns all freelancers | NA | GET | https://ap-southeast-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/whiz-ihwsd/service/freelancers/incoming_webhook/viewFreelancers |
| updateFreelancer | updates a specified field for freelancer records that meet the requirements | metamask (or any other field but endpoint must be edited accordingly) | POST | https://ap-southeast-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/whiz-ihwsd/service/freelancers/incoming_webhook/updateFreelancer |


## 2\. Hirers

API endpoints to handle hirer related functions. 


| Endpoint        | Description            | Parameters | Method | URL                                                                                                                                       |
|-----------------|------------------------|------------|--------|-------------------------------------------------------------------------------------------------------------------------------------------|
| createHirer | creates a new hirer record when a hirer registers | email, metamask, country of operations, company name, full name, country of issued id, skills required, industry, languages required| POST | https://ap-southeast-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/whiz-ihwsd/service/hirers/incoming_webhook/createHirer |
| viewHirer | Returns details of specified hirer based on hirer ID | Hirer ID | POST | https://ap-southeast-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/whiz-ihwsd/service/hirers/incoming_webhook/viewHirer |
| loginHirer | Login for hirers | metamask | POST | https://ap-southeast-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/whiz-ihwsd/service/hirers/incoming_webhook/loginHirer |
| editHirer | updates a specified field for hirer records that meet the requirements| background img file (or any other field but endpoint must be edited accordingly) | POST | https://ap-southeast-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/whiz-ihwsd/service/hirers/incoming_webhook/editHirer |



## 3\. Jobs

API endpoints to handle job related functions. 


| Endpoint        | Description            | Parameters | Method | URL                                                                                                                                       |
|-----------------|------------------------|------------|--------|-------------------------------------------------------------------------------------------------------------------------------------------|

## 4\. Reviews

API endpoints to handle freelancer related functions. 


| Endpoint        | Description            | Parameters | Method | URL                                                                                                                                       |
|-----------------|------------------------|------------|--------|-------------------------------------------------------------------------------------------------------------------------------------------|
