const fs= require('fs')
const http= require('http')

const server= http.createServer((req, res) =>{
    const myReadStream= fs.createReadStream(`${__dirname}/bigText.txt`, 'utf-8')
    myReadStream.pipe(res)
})

server.listen(3000)

console.log('listening on port 3000');