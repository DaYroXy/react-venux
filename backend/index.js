const express = require('express')
const cors = require("cors")
const app = express()
const serverless = require('serverless-http');
const PORT = process.env.PORT || 5500

require("dotenv").config();

const mongoose = require("mongoose")
const route = require("./Router/Route")
const cookieParser = require("cookie-parser")


// Headers And Cors
app.use(cors())
app.use(express.json())
app.use(cookieParser())

// Database connection
mongoose.connect(process.env.MONGO_CONNECTION, { useNewUrlParser: true })
    .then(() => {
        console.log("MongoDB is Connected..")
    }).catch(err => {
        console.log(err.message);
    })

app.use('/', route)

module.exports.handler = serverless(app);