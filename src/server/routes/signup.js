const users = require('../../models/users')

const bcrypt = require('bcrypt')
const router = require('express').Router()

router.get('/', (request, response) => {
  response.render('auth/signup')
})

router.post('/', (request, response, next) => {
  const { username, password } = request.body
  const passwordConfirmation = request.body['password-confirmation']
  const saltRounds = 10;
  let errorMessage

  if (!password || !username) {
    errorMessage = 'Please provide an email and password'
  } else if (password !== passwordConfirmation) {
    errorMessage = 'Paswords do not match'
  }

  if (errorMessage) {
    response.render('auth/signup', { err: errorMessage })
  } else {
    bcrypt.hash(password, saltRounds)
      .then(hash => users.create({ username, hash })) 
      .then(username => {
        request.session.user = username
        response.redirect('/')
      })
      .catch(error => {
        console.warn(error)
        next()
      })
    }
})

module.exports = router