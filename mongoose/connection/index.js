const express= require('express')
const mongoose= require('mongoose')
const dotenv = require("dotenv");
const todoHandler= require('./routeHandler/todoHandler')
const userHandler= require('./routeHandler/userHandler')

//express app initializaiton
const app= express()
dotenv.config()
app.use(express.json())

//database connection with mongoose
try {
    mongoose.connect("mongodb://localhost/todos");
    console.log("Connection successful");
} catch (err) {
    console.log(err);
}

//application routes
app.use('/todo', todoHandler)
app.use('/user', userHandler)


//default error handler
function errorHandler(err, req, res, next){
    if(res.headersSent){
        return next(err)
    }
    res.status(500).json({error: err})
}

app.listen(3000, ()=>{
    console.log("Listening to port 3000");
})