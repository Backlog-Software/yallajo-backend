'use strict'
require('dotenv').config()
const express = require("express")
const app = express()
const cors = require('cors');
app.use(cors());
app.use(express.json())
const mongoose = require('mongoose');

///////////////////// Hod-blogSchema
const { handleGetBlogs } = require('./routes/handleGetBlogs');
///////////////////// Hod-blogSchema

mongoose.connect(process.env.MONGO_PORT, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("OH NO ERROR!!!!")
        console.log(err)
    })

app.listen(3001, () => {
    console.log('welcome to radio 3001')
})

///////////////////// Hod-blogSchema
app.get('/blog', handleGetBlogs)
///////////////////// Hod-blogSchema