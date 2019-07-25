const mongoose = require('mongoose');
// const validator = require('validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
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

// Encrypt password before save
userSchema.pre('save', async function (next) {
  const user = this;

  if (user.isModified || user.isNew) {
    user.password = await bcrypt.hash(user.password, 8);
  }

  next();
});

// Create Token
userSchema.methods.createAuthToken = async () => {
  const user = this;
  const payload = {user: user.name};
  const options = {expiresIn: '2d', issuer: 'Planner app'};
  const secret = process.env.JWT_SECRET;
  const token = jwt.sign(payload, secret, options);
  return token;
}



const User = mongoose.model('User', userSchema);

module.exports = User;
