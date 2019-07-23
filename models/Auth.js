const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const authSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  bgColor: {
    type: String,
    default: '#f9f9f9',
  },
  navColor: {
    type: String,
    default: '#11998e',
  },
  boards: {
    type: Array,
    required: false,
  },
  tokens: [{
    token: {
      type: String,
      required: true,
    }
  }]
});

// Generate Auth Token
authSchema.methods.generateAuthToken = async () => {
  // const user = this;
  // const token = jwt.sign({_id: user._id.toString()}, 'secretstring');
  // user.tokens = user.tokens.concat({token});
  // await user.save();
  // return token;
}

// Hash password
authSchema.pre('save', async next => {
  // const user = this;

  // if (user.isModified('password')) {
  //   user.password =  await bcrypt.hash(user.password, 8);
  //   next();
  // }
});

const Auth = mongoose.model('Auth', authSchema);

module.exports = Auth;
