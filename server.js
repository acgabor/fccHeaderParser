// server.js
// where your node app starts

// init project
const express = require('express')
const app = express()

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'))

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", (request, response) => {
  //response.send(request.params)
  
  
  var ip=request.headers['x-forwarded-for'].split(',')[0] || request.connection.remoteAddress;
  var language=request.headers['accept-language'].split(',')[0] ;
  var operatingSystem=request.headers['user-agent'].match(/\((.*)\)/)[1];
   
  response.send({"IP address": ip, "language": language,"operating system":operatingSystem})
})


/*
// Simple in-memory store
const dreams = [
  "Find and count some sheep",
  "Climb a really tall mountain",
  "Wash the dishes"
]

// could also use the POST body instead of query string: http://expressjs.com/en/api.html#req.body
app.post("/dreams", (request, response) => {
  dreams.push(request.query.dream)
  response.sendStatus(200)
})
*/

// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log(`Your app is listening on port ${listener.address().port}`)
})
