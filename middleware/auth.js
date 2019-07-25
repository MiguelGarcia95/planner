const jwt = require('jsonwebtoken');
// const User = require('../models/User');

module.exports = {
  validateToken: (req, res, next) => {
    const authHeader = req.headers.authorization;
    let result;
    if (authHeader) {
      const token = req.headers.authorization.split(' ')[1];
      const options = { expiresIn: '2d', issuer: 'Planner app' };
      try {
        result = jwt.verify(token, process.env.JWT_SECRET, options);
        req.decoded = result;
        next();
      } catch (error) {
        throw new Error(error);
      }
    } else {
      res.status(401).send({error: 'Authentication error. Token required'})
    }
  }
};