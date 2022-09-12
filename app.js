// imports
require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const app = express()

//Open route - Public route
app.get('/', (req, res) => {
  res.status(200).json({msg: "bem vindo à minha API!"})
})

app.listen(3000)