# Task Delete
project members: 
Diego Hidalgo ,
Kevin Guaña
## Requirements

- [Node.js](https://nodejs.org/) (version 14)
- [Docker](https://www.docker.com/get-started)

 first we have to clone the github repository with the docker-compose file
 
```sh
https://github.com/jdhidal/Microservice-Shop.git
```
We open a terminal in the cloned project and enter the following command

```sh
docker-compose up --build
```
and then the created containers will be automatically executed 
To check the microservices, the following code must be run on the assigned port:

## User service

Open your browser and navigate to [http://localhost:5001/users](http://localhost:5001/users)

On this page you can see the users in json format that are created.


## login Service

Open your browser and navigate to [http://localhost:5002/login](http://localhost:5002/login)

We open a new terminal and place the following CURL

   ``` sh
    $headers = @{
    "Content-Type" = "application/json"
    }

    $body = @{
    "username" = "john"
    "password" = "password123"
    } | ConvertTo-Json

    Invoke-RestMethod -Uri "http://localhost:5002/login" -Method POST -Headers $headers -Body $body
 ```
 And we must observe that a successful Login message is displayed

 
## purchase service
Open your browser and navigate to [http://localhost:5003/purchase](http://localhost:5003/purchase).
We open a new terminal and place the following CURL
 ``` sh
    $headers = @{
    "Content-Type" = "application/json"
    }

    $body = @{
      "username" = "john"
    } | ConvertTo-Json

    Invoke-RestMethod -Uri "http://localhost:5003/purchase" -Method POST -Headers $headers -Body $body
 ```
And we must observe that a successful Purchase successful is displayed
