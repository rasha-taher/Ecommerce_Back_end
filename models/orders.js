const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    firstName: { type: String},
    lastName: { type: String},
    email: { type: String},
    phoneNUmber: { type: Number},
    country: { type: String},
    cityName: { type: String},
    postalCode: { type: Number},
    streetAddress: { type: String},
    totalPrice: { type: Number},
  });
  
const Orders = mongoose.model('Orders', orderSchema);
  
  module.exports = Orders ;