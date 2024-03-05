const express= require('express')
const publicRouter= express.Router()

publicRouter.get('/', (req, res)=>{
    res.send('Dashboard')
})
publicRouter.get('/home', (req, res)=>{
    res.send('Home Page')
})

module.exports= publicRouter
