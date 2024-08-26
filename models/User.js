const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  nome: String, 
  email: String,
  numero: String,
  senha: String,
});

const User = mongoose.model('User', userSchema);

module.exports = User;