
const crypto = require('crypto');

const jwtSecretKey = process.env.JWT_SECRET_KEY || crypto.randomBytes(32).toString('hex');

module.exports = {
  jwtSecretKey,

};
