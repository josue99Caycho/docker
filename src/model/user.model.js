const { Schema, model } = require(`mongoose`);

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: false
  },
  phone: {
    type: String,
    required: false
  }
}, { timestamps: true })

const User = model('user', userSchema);

module.exports = User