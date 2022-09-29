const http = require("http")

const port = 3000

const server = http.createServer((req, res)=>{
    res.statusCode = 200 
    res.setHeader('Contenty-Type', 'text/html')
    res.end('<h1>Hello World!</h1> <br> <p>me mama</p>')
})

server.listen(port, ()=>{
    console.log("rodando...")
})