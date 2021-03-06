const secret = process.env.JWT_SECRET || 'secret';
const JWT = require('jsonwebtoken');

module.exports = (token) => {
  const decoded = JWT.verify(token, secret);
  const result = decoded;
  return result;
};