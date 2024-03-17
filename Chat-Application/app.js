//external imports
const express= require('express')
const dotenv= require('dotenv')
const mongoose= require('mongoose')
const path= require('path')
const cookieParser = require('cookie-parser')

//internal imports
const {notFoundHandler, errorhandler}= require('./middlewares/common/errorHandler')

const loginRouter= require('./router/loginRouter')
const userRouter= require('./router/userRouter')
const inboxRouter= require('./router/inboxRouter')

const app= express()
dotenv.config()

// database connection
try {
    mongoose.connect(process.env.MONGO_CONNECTION_STRING);
    console.log("Connection successful");
} catch (err) {
    console.log(err);
}

// request parser
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// set view engine
app.set('view engine', 'ejs')

// set static folder
app.use(express.static(path.join(__dirname, 'public') ))

// parse cookies
app.use(cookieParser(process.env.COOKIE_SECRET))

// routing setup
app.use('/', loginRouter)
app.use('/users', userRouter)
app.use('/inbox', inboxRouter)

// error handling- 404 not found handler
app.use(notFoundHandler)

// common error handler
app.use(errorhandler)



app.listen(process.env.PORT, ()=>{
    console.log(`Listening to port ${process.env.PORT}`);
})