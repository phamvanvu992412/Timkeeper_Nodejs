import cookieParser from 'cookie-parser'
// import session from 'express-session'
import express from 'express'
import dotenv from 'dotenv'
import ExpressMongoSanitize from 'express-mongo-sanitize'
dotenv.config()
// import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import cors from 'cors'
import logger from 'morgan'


import router_api from './routers/api.js'
import moment from 'moment-timezone'
import useragent from 'express-useragent'


const app = express()

// app.use(
// 	session({
// 		secret: process.env.ACCESS_TOKEN_SECRET,
// 		resave: true,
// 		saveUninitialized: true,
// 		cookie: {
// 			secure: false,
// 			maxAge: 6000000,
// 		},
// 	})
// )

app.use(useragent.express())
app.use(bodyParser.json({ limit: '50mb' }))
app.use(bodyParser.text({ type: 'text/plain' }))

app.use(bodyParser.urlencoded({ extended: true, limit: '50mb', parameterLimit: 10000 }))
app.use(bodyParser.text({ type: 'text/plain' }))

app.use(cors())
app.set('views', './resources/views')
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(logger('dev'))

app.listen(process.env.PORT || 8000, () => {
	console.log(`===================================================================================`)
	console.log(`Server is running with port ${process.env.PORT || 8000}`)
})
app.use(ExpressMongoSanitize())
app.use(cookieParser())

function customErrorLogger(...args) {
	console.log('Custom error logger:', ...args) // tất cả các lỗi lên ghi lại tại đây
}
// import * as router_api from './routers/api.js'
app.use('/',router_api)
app.get('/',(req, res, next) =>{
	return res.send("ok")
})


