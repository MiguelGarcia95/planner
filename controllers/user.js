const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

/**
 * Try this out later
module.exports = {
  add: (req, res) => {
    return;
  }
}
 */

exports.register = async (req, res) => {
  const user = await new User(req.body);
  try {
    await user.save();
    const token = await user.createAuthToken();
    res.status(201).send({user, token});
  } catch (error) {
    console.log(error);
    res.status(400).send({error});  
  }
}

exports.login = async (req, res) => {
  try {
    const user = await User.findOne({email: req.body.email});
    const match = await bcrypt.compare(req.body.password, user.password);
    if (match) {
      // Authenticated, create token!
      const payload = {user: user.name};
      const options = {expiresIn: '2d', issuer: 'Planner app'};
      const secret = process.env.JWT_SECRET;
      const token = jwt.sign(payload, secret, options);

      res.status(200).send({user, token});
    } else {
      res.status(401).send('Authentication error');  
    }
  } catch (error) {
    console.log(error);
    res.status(400).send({error});  
  }
}

exports.logout = async (req, res) => {
  try {
    
  } catch (error) {
    res.status(400).send({error});  
  }
}

exports.logoutAll = async (req, res) => {
  try {
    
  } catch (error) {
    res.status(400).send({error});  
  }
}
