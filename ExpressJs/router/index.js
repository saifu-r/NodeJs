const express= require('express')
const app= express()

const publicRouter= require('./publicRouter')
const adminRouter= require('./adminRouter')

app.use('/', publicRouter)
app.use('/admin', adminRouter)

app.listen(3000, ()=>{
    console.log('Listening to port 3000');
})