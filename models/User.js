const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
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
  }
})

const User = mongoose.model('User', userSchema);

module.exports = User;
