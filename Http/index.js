const http= require('http')

const server= http.createServer((req, res) =>{
    if(req.url === '/'){
        res.write('hi ')
        res.write('Saifur')
        res.end()
    }else if(req.url === '/about'){
        res.write('This is about page')
        res.end()
    }else{
        res.write('Not Found') 
        res.end()
    }
})

server.listen(3000)

console.log('Listening on port 3000')