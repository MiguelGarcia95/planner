const User = require('../models/User');

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
    // Hash Here
    await user.save();
    req.status(201).send(user);
  } catch (error) {
    res.status(400).send({error});  
  }
}

exports.login = async (req, res) => {
  try {
    
  } catch (error) {
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
