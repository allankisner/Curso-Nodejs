const express = require('express')
const exphbs = require('express-handlebars')

const app = express()
const conn = require('./db/conn')

const Address = require('./models/Address')
const User = require('./models/User')

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(
  express.urlencoded({
    extended: true,
  }),
)

app.use(express.json())

app.use(express.static('public'))


app.get('/', async (req, res) => {
  const users = await User.findAll({ raw: true })

  res.render('home', { users: users })
})

app.get('/users/create', function (req, res) {
  res.render('adduser')
})

app.post('/users/create', function (req, res) {
  const name = req.body.name
  const occupation = req.body.occupation
  let newsletter = req.body.newsletter

  if (newsletter === 'on') {
    newsletter = true
  }

  User.create({ name, occupation, newsletter })

  res.redirect('/')
})

app.get('/users/:id', async (req, res) => {
  const id = req.params.id

  const user = await User.findOne({ raw: true, where: { id: id } })

  res.render('userview', { user })
})

app.post('/users/delete/:id', async (req, res) => {
  id = req.params.id

  await User.destroy({ where: { id: id } })

  res.redirect('/')

})

app.get('/users/edit/:id', async (req, res) => {
  id = req.params.id

  try {

    const user = await User.findOne({ include: Address, where: { id: id } })

    res.render('useredit', { user: user.get({ plain: true }) })
  } catch (error) {

    console.log(error)

  }
})

app.post('/users/update', function (req, res) {
  const id = req.body.id
  const name = req.body.name
  const occupation = req.body.occupation
  let newsletter = req.body.newsletter

  if (newsletter === 'on') {
    newsletter = true
  } else {
    newsletter = false
  }

  const userData = {
    id,
    name,
    occupation,
    newsletter,
  }

  console.log(req.body)
  console.log(userData)

  User.update(userData, {
    where: {
      id: id,
    },
  })
    .then((user) => {
      console.log(user)
      res.redirect('/')
    })
    .catch((err) => console.log(err))
})

app.post('/address/create', async function (req, res) {
  const UserId = req.body.UserId
  const street = req.body.street
  const number = req.body.number
  let city = req.body.city

  const address = {
    UserId,
    street,
    number,
    city,
  }

  await Address.create(address)

  res.redirect(`/users/edit/${UserId}`)
})

app.post('/address/delete', async (req, res) => {
  const UserId = req.body.UserId
  const id = req.body.id;

  await Address.destroy({
    where: { id: id },
  })

  res.redirect(`/users/edit/${UserId}`)
})



// Criar tabelas e rodar o app
conn
  .sync()
  //  .sync({force: true})
  .then(() => {
    app.listen(3000)
  })
  .catch((err) => console.log(err))