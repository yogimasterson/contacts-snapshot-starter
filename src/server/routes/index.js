const router = require('express').Router();
const contacts = require('./contacts')
const login = require('./login')
const signup = require('./signup')
const DbContacts = require('../../db/contacts');


router.get('/', (request, response) => {
  DbContacts.getContacts()
    .then((contacts) => {response.render('index', { contacts })})
    .catch( err => console.log('err', err) )
})

router.use('/contacts', contacts); // /contacts/search
router.use('/login', login); // /login
router.use('/signup', signup); // /login

module.exports = router;
