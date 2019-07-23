const mongoose = require('mongoose');
// const validator = require('validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const authSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: false,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  bgColor: {
    type: String,
    default: '#f9f9f9',
  },
  navColor: {
    type: String,
    default: '#11998e',
  },
  // boards: {
  //   type: Array,
  //   required: false,
  // }
});

const Auth = mongoose.model('Auth', authSchema);

module.exports = Auth;
