const path = require("path")
var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: process.env.ROLLBAR_KEY,
  captureUncaught: true,
  captureUnhandledRejections: true,
})

let database = []

module.exports = {
    home: (req,res) => {
        //console.log("hello")
        // try {
        //     s3141351()
        // }
        // catch{
        //     console.log("oops")
        //     rollbar.critical("404")
        // }
        res.sendFile(path.join( __dirname, "../../index.html"))

       
    },

    submitTravelogue: (req,res) => {
        console.log("Submitting Travelogue")
        //console.log(req.body)
        let {user,travelText}=req.body;
        console.log(req.body)
        if (user === ""){
            rollbar.warning("anonymous user")
            user="anonymous"
        }
        database.push({user,travelText})
        console.log(database)
        res.status(200).send("hello")
    },

    scriptServe: (req,res) => {
        res.sendFile(path.join( __dirname, "../../main.js"))

    }
}