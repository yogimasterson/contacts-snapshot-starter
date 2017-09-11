const bcrypt = require('bcrypt')
const saltRounds = 10

bcrypt.hash(password, saltRounds).then(function(hash) {
  
})