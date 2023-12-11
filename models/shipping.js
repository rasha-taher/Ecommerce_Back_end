const mongoose = require('mongoose');

const shippingSchema = new mongoose.Schema({
    firstName: { type: String},
    lastName: { type: String},
    email: { type: String},
    phoneNUmber: { type: Number},
    country: { type: String},
    cityName: { type: String},
    postalCode: { type: Number},
    streetAddress: { type: String},
    totalPrice: { type: Number},
    status: {type:String}
  });
  
const Shippings = mongoose.model('Shippings', shippingSchema);
  
  module.exports = Shippings ;