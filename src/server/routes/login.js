const users = require('../../models/users')

const bcrypt = require('bcrypt')
const router = require('express').Router()

router.get('/', (request, response) => {
  response.render('auth/login')
  console.log('Hello')
})

router.post('/', (request, response, next) => {
  const username = request.body.username;
  const password = request.body.password;
  
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
    .catch( error => next(error) )
})

module.exports = router