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

const findUser = function(username){
  return db.query(`
  SELECT
    *
  FROM
    users
  WHERE
    username = $1::text
  `,
  [
    username
  ])
  .catch(error => {
    console.error({message: 'Error occurred while executing contacts.create',
    arguments: arguments});
    throw error
  });
}

const findAdmin = function(role){
  return db.query(`
  SELECT
    *
  FROM
    users
  WHERE
    role = $1::text
  `,
  [
    role
  ])
  .catch(error => {
    console.error({message: 'Error occurred while executing contacts.create',
    arguments: arguments});
    throw error
  });
}

module.exports = {
  create,
  findUser,
  findAdmin
}