const router = require('express').Router()
const DbUsers = require('../../db/users')
const {renderError} = require('../utils')

router.get('/', (request, response) => {
  response.render('signup')
})

router.post('/', (request, response, next) => {
  DbUsers.createUser(request.body)
    .then(function(user) {
      if (user) return response.redirect(`/signup`)
      next()
    })
    .catch( error => renderError(error, response, response) )
})

module.exports = router