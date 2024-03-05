const express= require('express')
const adminRouter= express.Router()

adminRouter.get('/', (req, res)=>{
    res.send('admin')
})
adminRouter.get('/home', (req, res)=>{
    res.send('Admin Home Page')
})

module.exports= adminRouter