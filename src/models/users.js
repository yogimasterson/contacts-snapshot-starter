const db = require('./db/users');

module.exports = {
  create: db.create,
  findUser: db.findUser
}