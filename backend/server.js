require('dotenv').config()

const morgan = require('morgan')
const express = require('express')
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workoutsRoutes')
const userRoutes = require('./routes/userRoutes')

// express app
const app = express();

// middlewares
app.use(express.json())
app.use(morgan('dev'))

// routes
app.use('/api/workouts',workoutRoutes)
app.use('/api/user',userRoutes)


mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests 
    app.listen(process.env.PORT, () => {
      console.log('connected to db & listening on port 4000')
    })
  })
  .catch(err => console.log(err))

