const express= require('express')
const app= express()

// app.use(express.urlencoded())
// app.use(express.raw())
// app.use(express.text())
app.use(express.json())
// app.use(express.static(`${__dirname}/public/`))

const router= express.Router()

app.use(router)


router.get('/', (req, res) =>{
    res.send('This is Home Page')
})
router.post('/', (req, res) =>{
    console.log(req.body);
    console.log("hello");
    res.send('This is Another Home Page')
})

app.listen(3000, ()=>{
    console.log('listening to port 3000')
})