const session = require('express-session')

const errorHandler = (error, request, response, next) => {
  response.status(500).send('Something bad happened. This page should be nicer looking');
};

const logErrors = (error, request, response, next) => {
  console.error(error.stack)
  next(error);
};

const notFoundHandler = (request, response) => {
  response.status(404).render('common/not_found', {name: 'Foobar'})
}

const setDefaultResponseLocals = (request, response, next) => {
  response.locals.query = ''

  if (!request.session.user) {
    response.locals.session = false
  } else {
    response.locals.session = true
  }

  next()
}

module.exports = { errorHandler, logErrors, notFoundHandler, setDefaultResponseLocals };
