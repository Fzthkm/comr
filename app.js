const express = require('express')
const passport = require('passport')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')
const morgan = require('morgan')
const authRoutes = require('./routes/auth')
const applicationRoutes = require('./routes/application')
const organisationRoutes = require('./routes/organisation')
const workplaceRoutes = require('./routes/workplace')
const consultantRoutes = require('./routes/consultant')
const app = express()

mongoose.connect('mongodb://localhost:27017')
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
app.use('/api/organisation', organisationRoutes)
app.use('/api/workplace', workplaceRoutes)
app.use('/api/consultant', consultantRoutes)

module.exports = app