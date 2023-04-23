

const express = require('express')
const app = express()

app.use(express.json())

const tourRouter = require('./routes/tourRoutes')
const userRouter = require('./routes/userRoutes')





app.use('/api/v1/tours',tourRouter)
app.use('/api/v1/users',userRouter)


app.get('/', (req, res) => res.status(200).send("Welcome"))

module.exports = app
