const mongoose = require('mongoose');
const { Schema } = mongoose;

const shopSchema = new Schema({
  name: String, 
  cnpj: String,
  endereco: String,
  filial: Boolean,
});

const Shop = mongoose.model('Shop', shopSchema);

module.exports = Shop;