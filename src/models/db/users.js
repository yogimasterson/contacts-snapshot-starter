const db = require('./db')

const create = function(user){
  return db.query(`
  INSERT INTO 
    users (username, password)
  VALUES
    ($1::text, $2::text)
  RETURNING
    username
  `,
  [
    user.username,
    user.hash,
  ])
  .catch(error => {
    console.error({message: 'Error occurred while executing contacts.create',
                   arguments: arguments});
    throw error
  });
}

module.exports = {
  create
}