// dependencies
const http= require('http')
const url= require('url')
const {StringDecoder}= require('string_decoder')

// app object- module scaffolding
const app= {}

// configuration
app.config= {
    port: 3000
}

// create serve

app.createServer= ()=>{
    const server= http.createServer(app.handleReqRes)
    server.listen(app.config.port, ()=>{
        console.log(`listening to port ${app.config.port}`);
    })
}

// handle request response

app.handleReqRes= (req, res) =>{
    const parseUrl= url.parse(req.url, true) //to accept the queryString
    const path= parseUrl.pathname
    const trimmedPath= path.replace(/^\/+|\/+$/g, '')
    const method= req.method.toLowerCase()
    const queryStringObject= parsedUrl.query
    const headersObject= req.headers

    //declaring a new class
    const decoder= new StringDecoder('utf-8')
    let realData= ''

    req.on('data', (buffer)=>{
        realData+= decoder.write(buffer)
    })

    req.on('end', ()=>{
        realData+= decoder.end()

        console.log(realData);
        res.end('hello World and saifur ')
    })

    console.log(headersObject);

  


}

app.createServer()

