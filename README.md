# Arrive Test

The task is to build a RESTful API to fetch  users and hobbies records data from a remote database.

# Get Started

- Clone the repository using git clone https://github.com/ndrymes/ArriveApp-tasks.git
- Run `npm i` or `npm install` to install all app dependencies
- Make a copy of the .env.sample file and rename to .env
- Start the app using
  - `npm run dev` for development
  - `npm run build` for build
  - `npm run srart` for prod

# Demo

The default endpoint is an health check endpoint that returns a success response.

## API


| Status Code | Description                                 |
| ----------- | ------------------------------------------- |
| 0           | Operation was successful                    |
| 1000        | Invalid request payload provided            |
| 1001        | Generic code error in creating a new resource|
| 1002        | Generic code for error when fetching a resouece            |
| 1003        | Generic error code for when an update fails            |

> These codes are custom to the app and the http status codes are still going to be sent 

### Request Parameters

```
    {
       "name":"travelling",
       "passionLevel":"high",
       "year":"1991"
    }
```

### Sample Success Response Parameters

```
    {
    "code": 0,
    "msg": "Success",
    "hobbies": {
        "_id": "61148fe838d7fd038a077333",
        "name": "travelling",
        "passionLevel": "HIGH",
        "year": "1991-01-01T00:00:00.000Z",
        "createdAt": "2021-08-12T03:05:12.247Z",
        "updatedAt": "2021-08-12T03:05:32.822Z",
        "__v": 0
    }
  }
```

### Sample Error Response Parameters

```
    {
        "code": 500,
        "msg": "Error",
        "hobbies": []
    }
```

# Project Structure

![file structure](https://i.postimg.cc/1gRLJvNr/Screenshot-2021-08-12-at-06-30-07.png)

<a href="https://blog.logrocket.com/the-perfect-architecture-flow-for-your-next-node-js-project/">Source information on  LogRocket</a>

# Libraries Used

- Jest - For running unit tests
- Express - Popular framework with a robust set of features for running apps
- Dotenv - For using environment variables in development
- Joi - For validating data
- Http Status Codes - For a complete set of status codes
- Mongoose - ODM for mongodb that makes maning the database much easier
- SuperTest - Library used for running api integration tests to assert response codes and response body

# Todo

I had a lot of fun building this but there are some improvements I can still make:

- More tests, especially integration tests, unit tests for the services and api tests using super test.
- Use a DTO object to handle transfer of data from the api routes to the service layer, this will help keep data consistent even data names change
- Add push pre-hooks that runs eslint and prettifier before every push
- Add a mock database (e.g. in memory mongodb database) to be used for integration tests
- Add a dependency injection library like awilix to handle injection of dependencies
- Include a makefile to ease the execution of some common tasks

# Testing

- To run the tests, simply type `npm test`
- We can also get code coverage by `npm run coverage`

Thank you 👍
