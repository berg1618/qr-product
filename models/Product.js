const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
  nome: String, 
  qr_code: String,
  preco: String,
  codigo_barras: String,
  loja_id: Number,
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;