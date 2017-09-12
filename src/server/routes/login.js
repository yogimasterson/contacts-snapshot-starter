const users = require('../../models/users')

const bcrypt = require('bcrypt')
const router = require('express').Router()

router.get('/', (request, response) => {
  response.render('auth/login')
})

router.post('/', (request, response, next) => {
  const username = request.body.username;
  const password = request.body.password;
  let errorMessage;
  
  users.findUser(username)
    .then(user => bcrypt.compare(password, user[0].password))
    .then(result => {
      if (result) {
        request.session.user = username
        response.redirect('/')
      } else {
        throw new Error()
      }
    })
    .catch( err => {
      errorMessage = 'Incorrect username and/or password'
      response.render('auth/login', { err: errorMessage })
    })
})

module.exports = router