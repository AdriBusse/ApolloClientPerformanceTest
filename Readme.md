# Apollo Client Performance Test

  

## :rocket: Purpose

Tests the response time of your application. A pre requirement is that your application communicates with an graphql api, uses [Apollo Client](https://www.apollographql.com/) for sending the queries and [ReactJS](https://reactjs.org/) as Frontend library.

This library will privide a modal where you can run pre defined performancetests. Each performancetest use your original used apollo client object from the application.

The results can be downloaded as JSON-File after execution of the performancetest.

  

---

  

## :heavy_check_mark:Key Points(Pros):

- :mag_right: Modal ist just visible during your app runns in `node_env === 'development'`.
- :wrench: use the same configuration of your apollo client object as production app does.
- :floppy_disk: download Performancetest data as JSON file.
-  :nut_and_bolt: individual configuration of your performancetests.

##  Installation

with npm:
    ``npm i apollo_client_performance_test ``
with yarn:
``yarn add apollo_client_performance_test`` 


## Usage

```jsx
import  {PerformanceTestModal, PerformanceTest  }  from  "apollo_client_performance_test";


<PerformanceTestModal  >
	//Performancetest executes Query 100 times. Apollo Cache is activated
	<PerformanceTest  client={client}  
					  n={100}  
					  fileName="SWFlatQuery.json"  
					  withCache  
					  query={Query}  
					  title="flat query with SW"  />
					  
	//Performancetest executes Query 100 times. Apollo Cache is deactivated
	<PerformanceTest  client={client}  
	                  n={100}  
	                  fileName="SWNestedtQuery.json"  
	                  query={Query}  
	                  title="nested query with SW"  />
	                  
	//Performancetest uses a query with variables
	<PerformanceTest  client={client}  
		              n={100}  
		              fileName="SWListQuery.json"  
		              query={Query}  
		              variables={id: 123}  
		              title="List Query with SW"  />
</PerformanceTestModal  >
```


![Modal of Performancetest](/demo/demopicture.jpg?raw=true "Modal of Performancetest")


---
### Parameters

`client`: Apollo Client Object to execute the query<br >
`n`: number of iterations the query will requested<br />
`filename`: name of the JSONfile with results<br />
`withCache`: set Apollos cache policy. true=cache-first; false=network-only<br />
`query`: query wich should used in performancetest. Type:`DocumentNode`(gql``)<br/>
`variables`: cariables to give inside the performancetest<br/>
`title`: title of the performancetest<br/>




