const http = require("http")

const port = 3000

const server = http.createServer((req, res)=>{
      
    res.write('Oi Allan')
    res.end()
})

server.listen(port, ()=>{
    console.log("rodando...")
})