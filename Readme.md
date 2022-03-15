# Apollo Client Performance Test
  
  
## :rocket: Purpose
<br />
<br />
Tests the response time of your application. A pre requirement is that your application communicates with an graphql api, uses [Apollo Client](https://www.apollographql.com/ "Apollo Client") for sending the queries and [ReactJS](https://reactjs.org/ "ReactJS") as Frontend library.
  
This library will privide a modal where you can run pre defined performancetests. Each performancetest use your original used apollo client object from the application.
  
The results can be downloaded as JSON-File after execution of the performancetest.

<br /> 
<br />
  
<br />  
 <br />   
   
## :heavy_check_mark:Key Points(Pros):  
  
- :mag_right: Modal ist just visible during your app runns in `node_env === 'development'`.
- :wrench: use the same configuration of your apollo client object as production app does.
- :floppy_disk: download Performancetest data as JSON file.
-  :nut_and_bolt: individual configuration of your performancetests.
<br />
<br />

##  Installation
  
with npm:  
``npm i apollo_client_performance_test ``  
  
with yarn:  
``yarn add apollo_client_performance_test``  
  
   

## Usage

  

```jsx
import  {PerformanceTestModal, PerformanceTest  }  from  "apollo_client_performance_test";


<PerformanceTestModal  >
	//Performancetest executes Query 100 times. Apollo Cache is ACTIVATED
	<PerformanceTest
		client={client}  
		n={100}  
		fileName="SWFlatQuery.json"  
		withCache  
		query={Query}  
		title="flat query with SW"  />
					  
	//Performancetest executes Query 100 times. Apollo Cache is DEACTIVATED
	<PerformanceTest
		client={client}  
		n={100}  
		fileName="SWNestedtQuery.json"  
		query={Query}  
		title="nested query with SW"  />
	                  
	//Performancetest uses a query with variables
	<PerformanceTest
		client={client}  
		n={100}  
		fileName="SWListQuery.json"  
		query={Query}  
		variables={id: 123}  
		title="List Query with SW"  />
</PerformanceTestModal  >
```
<br />
<br />
  
    
![Modal of Performancetest](https://github.com/AdriBusse/apollo_client_performance_test/blob/master/demo/demopicture.png "Modal of Performancetest")  
<br />
<br />
  
### Parameters  
<br />   
  
`client`: Apollo Client Object to execute the query<br >
`n`: number of iterations the query will requested<br />
`filename`: name of the JSONfile with results<br />
`withCache`: set Apollos cache policy. true=cache-first; false=network-only<br />
`query`: query wich should used in performancetest. Type:`DocumentNode`(gql``)<br/>
`variables`: cariables to give inside the performancetest<br/>
`title`: title of the performancetest<br/>
<br />  
<br />


## JSON Result

```json
[
    {
        "name": "Time for Performancetest",
        "entryType": "measure",
        "startTime": 47627.59999990463,
        "duration": 1402.4000000953674
    },
    {
        "name": "0: Time for Request",
        "entryType": "measure",
        "startTime": 47627.59999990463,
        "duration": 220.70000004768372
    },
    {
        "name": "1: Time for Request",
        "entryType": "measure",
        "startTime": 47848.299999952316,
        "duration": 138.79999995231628
    },
    {
        "name": "2: Time for Request",
        "entryType": "measure",
        "startTime": 47987.200000047684,
        "duration": 113.19999980926514
    },
....
....
....
]
```


