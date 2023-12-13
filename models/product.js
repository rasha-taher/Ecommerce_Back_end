const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { type: String},
    description: { type: String},
    price: { type: Number},
    category: {type: String},
    vendorName:{type: String},
    image:{type : String},
    quantity:{type :Number}
  });
  
const Product = mongoose.model('Product', productSchema);
  
module.exports = Product ;