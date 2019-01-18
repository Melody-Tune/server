const jwt = require('jsonwebtoken')
require('dotenv').config()

module.exports = {
  verification: (token, cb) => {
    jwt.verify(token, process.env.SECRET_JWT, cb)
  },

  getToken: (param) => {
    let token = jwt.sign(param, process.env.SECRET_JWT);
    return token
  }
}