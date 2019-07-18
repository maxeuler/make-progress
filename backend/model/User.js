const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
  },
});

userSchema.pre('save', async function(next) {
  this.password = await bcrypt.hash(this.password, 8);
  next();
});

const User = mongoose.model('user', userSchema);

module.exports = User;
