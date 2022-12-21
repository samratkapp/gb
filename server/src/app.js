// var express = require('express');
import express from 'express'
import cookieParser from 'cookie-parser'
// var path = require('path');
import logger from 'morgan'
import helmet from 'helmet'
import cors from 'cors'
import compression from 'compression'

import indexRouter from './routes/index.js'
import { handleExeption } from './middleware/error/handleExeption.js'
import response from './config/response.js'

const app = express()

app.use(cors())
app.use(helmet())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
// compress all responses
app.use(compression())

app.get('/ping',  (req, res, next) => {
  res.send(`{
        "status": "OK",
        "status_code": 200  
    }`)
})
app.use('/', indexRouter)

 
// error handler
app.use((err,req,res, next) => {
  console.log('ERROR HANDLER')
  // send some notification to Admin
  console.error(err.stack)
  response.internalServerError(res,'Something went wrong!')
})

handleExeption()

export default app
