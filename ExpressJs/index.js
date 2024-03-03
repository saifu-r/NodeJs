const express= require('express')
const app= express()

// app.use(express.urlencoded())
// app.use(express.raw())
// app.use(express.text())
app.use(express.json())
// app.use(express.static(`${__dirname}/public/`))

app.param('id', (req, res, next, id)=>{
    const user={
        userId: id,
        name: 'Saifur Rahman'
    }
    req.userDetails= user
    next()
})

app.get('/user/:id', (req, res)=>{
    console.log(req.userDetails);
    res.send('Welcome to the application!')
})


app.get('/', (req, res) =>{
    res.send('This is Home Page')
})
app.post('/', (req, res) =>{
    console.log(req.body);
    console.log("hello");
    res.send('This is Another Home Page')
})

app.listen(3000, ()=>{
    console.log('listening to port 3000')
})