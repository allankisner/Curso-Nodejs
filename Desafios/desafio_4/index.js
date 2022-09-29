const express = require('express')
const exphbs = require('express-handlebars')
const app = express();

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(express.static("public"))

const products = [
    {
        id: "1",
        title: "Livro",
        price: 12.99
    },
    {
        id: "2",
        title: "lampada",
        price: 2.99
    },
    {
        id: "3",
        title: "cadeira",
        price: 102.99
    },
]

app.get('/', (req, res)=> {
   
    res.render('home', { products })
})

app.get('/products/:id', (req, res) => {
    const product = products[parseInt(req.params.id) - 1]
    
    res.render('products', { product })
})

app.listen(3000, ()=>{
    console.log('rodando app')
})