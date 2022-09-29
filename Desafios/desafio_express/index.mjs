import  express  from "express";
import path from "path";
import { fileURLToPath } from 'url';
import router from './contato/index.mjs'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const port = 5000;
const basePath = path.join(__dirname, 'templates')
const contato = router

app.use(express.urlencoded({
    extended: true,
}))
app.use(express.json())

app.use('/contato', contato)

app.use(express.static('public'))

app.get('/', (req, res)=> {

    res.sendFile(`${basePath}/home.html`)

})

app.use(function(req, res, next){
    res.status(404).sendFile(`${basePath}/404.html`)
})

app.listen(port, ()=>{
    console.log(`rodando app na porta ${port}`)
})

