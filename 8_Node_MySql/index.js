const express = require('express')
const mysql = require('mysql')
const exphbs = require('express-handlebars')

const app = express()

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'nodemysql'
})

app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('home')
})

app.post('/books/insertbook', (req, res) => {
    const title = req.body.title;
    const pages = req.body.pages;

    const sqlComm = `INSERT INTO books (title, pages) VALUES ('${title}', '${pages}')`

    conn.query(sqlComm, function (err) {
        if (err) {
            console.log(err)
        }
        res.redirect('/books')
    })
})

app.get('/books', (req, res) => {

    const sqlBooks = 'SELECT * FROM books'

    conn.query(sqlBooks, function (err, data) {
        if (err) {
            console.log(err)
            return
        }
        info = data

        res.render('books', { info })
    })
})

app.get('/books/:id', function (req, res) {
    const id = req.params.id

    const query = `SELECT * FROM books WHERE id = ${id}`

    conn.query(query, function (err, data) {
        if (err) {
            console.log(err)
        }

        const book = data[0]

      

        res.render('book', { book })
    })
})

app.get('/books/edit/:id', (req, res)=>{
    id = req.params.id

    const sql = `SELECT * FROM books WHERE id = ${id}`

    conn.query(sql, function(err, data){
        if(err) {
            console.log(err)
        }

        const book = data[0]

        res.render('editbook', { book })
    })
})

app.post('/books/updatebook', (req, res)=>{
    const id = req.body.id;
    const title = req.body.title;
    const pages = req.body.pages;
    
    const sql = `UPDATE books SET title = '${title}', pages = ${pages} WHERE id = ${id}`

    conn.query(sql, function(err){
        if(err){
            console.log(err)
            return
        }

        res.redirect('/books')
    })
})

app.post('/books/remove/:id', (req, res)=>{
    const id = req.params.id;

    const sql = `DELETE FROM books WHERE id = ${id}`

    conn.query(sql, function(err){
        if(err){
            console.log(err)
            return
        }
        res.redirect('/books')
    })
})


conn.connect(function (err) {
    if (err) {
        console.log(err)
    }

    console.log('MysqlRodando')

    app.listen(3000)
})