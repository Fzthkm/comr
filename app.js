const express = require('express')
const passport = require('passport')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')
const morgan = require('morgan')
const authRoutes = require('./routes/auth')
const applicationRoutes = require('./routes/application')
const organisationRoutes = require('./routes/organisation')
const consultantRoutes = require('./routes/consultant')
const app = express()

mongoose.connect('mongodb://0.0.0.0:27017')
    .then(() => console.log('MongoDB connected.'))
    .catch((error) => console.log(error))

app.use(passport.initialize())
require('./middleware/passport')(passport)

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(cors())

app.use('/api/auth', authRoutes)
app.use('/api/app', applicationRoutes)
app.use('/api/org', organisationRoutes)
app.use('/api/consult', consultantRoutes)

module.exports = app