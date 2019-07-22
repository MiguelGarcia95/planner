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
})

const Auth = mongoose.model('Auth', authSchema);

module.exports = Auth;
