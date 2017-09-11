const db = require('./db')

const createUser = function(user) {
  return db.query(`
  INSERT INTO
    users (user_  name, password)
  VALUES
    ($1::text, $2::text)
  RETURNING
    *
  `,
  [
    user.username,
    user.password,
  ])
  .catch(error =>  error)
}

module.exports = {
  createUser
}