# microservice

Microservice template

## Installation

1. Install dependencies: `npm i`
1. Set/change desired `HTTP_PORT` in `.env`
1. Run the server: `npm index.js`
1. Test the service in the browser:

`http://localhost:<HTTP_PORT>/v1/utils/test`

You should see 
```json
{
"status": "OK"
}
```