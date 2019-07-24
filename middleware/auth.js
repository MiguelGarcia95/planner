const jwt = require('jsonwebtoken');
// const User = require('../models/User');

// const user = async (req, res, next) => {
//   try {
//     // const token = req.header('Authorization').replace('Bearer ', '');
//     // const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     // const user = await User.findOne({_id: decoded._id, 'tokens.token': token});

//     // if (!user) {
//     //   throw new Error();
//     // };
//     // req.token = token;
//     // req.user = user;
//     // next();
//   } catch (e) {
//     res.status(401).send('Please Authenticate')
//   }
// }

module.exports = {
  validateToken: (req, res, next) => {
    const authHeader = req.headers.authorization;
    let result;
    if (authHeader) {
      const token = req.headers.authorization.split(' ')[1];
      const options = { expiresIn: '2d', issuer: 'Planner app' };
      try {
        // Check if token valid/expired, pass decodedTokenback, and 
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