require('dotenv').config()

module.exports = {
  apiRoot: '/v1',
  httpPort: process.env.HTTP_PORT,
  debugMode: process.env.DEBUG_MODE
}