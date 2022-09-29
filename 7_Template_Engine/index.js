const exphbs = require('express-handlebars')
const express = require('express')

const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.get('/dashboard', (req, res) => {
    res.render('dashboard')

})

app.get('/', (req, res) => {

    const user = {

        name: 'allan',
        surname: 'joão',
        age: '30',
    }

    const auth = true

    res.render('home', { user: user, auth })
})



app.listen(3000)