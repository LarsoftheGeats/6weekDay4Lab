const express = require('express')
const app = express()
const path = require('path')
require('dotenv').config()
const {
  home,
  submitTravelogue,
  scriptServe
}=require('./controller/controller.js')

app.use(express.json())

// include and initialize the rollbar library with your access token
var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: process.env.ROLLBAR_KEY,
  captureUncaught: true,
  captureUnhandledRejections: true,
})


// rollbar.log('Hello world!')
// rollbar.info("something")

const port = process.env.PORT || 5050

app.get("/", home)
app.post("/submit", submitTravelogue)
app.get("/js", scriptServe)

app.listen(port, () => console.log(`Server listening on ${port}`))