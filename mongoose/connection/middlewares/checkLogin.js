const jwt= require('jsonwebtoken')

const checkLogin= (req, res, next)=>{
    const {authorization}= req.headers
    try{
        const token= authorization.split(' ')[1]
        const decoded= jwt.verify(token, process.env.JWT_SECRET)
        const {username, userId}= decoded
        req.username= username
        req.userId= userId
        // console.log('hello');
        next()
    }catch{
        next('Authentication failure!')
    }
}

module.exports= checkLogin