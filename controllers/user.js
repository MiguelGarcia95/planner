const User = require('../models/User');
const bcrypt = require('bcryptjs');

module.exports = {
  register: async (req, res) => {
    const user = await new User(req.body);
    try {
      await user.save();
      const token = await user.createAuthToken();
      res.status(201).send({user, token});
    } catch (error) {
      console.log(error);
      res.status(400).send({error});  
    }
  },

  loginWithToken: async (req, res) => {
    try {
      const user = await User.findById(req.decoded.id);
      res.status(201).send({user});
    } catch (error) {
      console.log(error);
      res.status(400).send({error});  
    }
  },

  login: async (req, res) => {
    try {
      const user = await User.findOne({email: req.body.email});
      const match = await bcrypt.compare(req.body.password, user.password);
      if (match) {
        const token = await user.createAuthToken();
        res.status(200).send({user, token});
      } else {
        res.status(401).send('Authentication error');  
      }
    } catch (error) {
      console.log(error);
      res.status(400).send({error});  
    }
  },

  logout: async (req, res) => {
    try {
      
    } catch (error) {
      res.status(400).send({error});  
    }
  }
}