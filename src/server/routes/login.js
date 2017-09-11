const router = require('express').Router()
const {renderError} = require('../utils')

router.get('/', (request, response) => {
  response.render('login')
})

module.exports = router