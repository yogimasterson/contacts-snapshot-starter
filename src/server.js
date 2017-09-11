const express = require('express')
const bodyParser = require('body-parser')
const dbContacts = require('./db/contacts')
const {renderError} = require('./server/utils')
const routes = require('./server/routes')
const session = require('express-session')

const app = express()

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views')

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use((request, response, next) => {
  response.locals.query = ''
  next()
})

app.use('/', routes)

app.use((request, response) => {
  response.render('not_found')
})

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})
