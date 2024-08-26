const mongoose = require('mongoose');
const { Schema } = mongoose;

const cartSchema = new Schema({
  produto_id: Number, 
  usuario_id: Number, 
  comprado: Boolean,
});

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;