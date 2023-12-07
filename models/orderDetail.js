const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    email: { type: String},
    productName: { type: String},
    price: { type: Number},
  });
  
const Product = mongoose.model('Product', productSchema);
  
  module.exports = Product ;