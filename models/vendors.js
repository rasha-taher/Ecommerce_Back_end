const mongoose = require('mongoose');

const vendorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    lastName: { type: String },
    email: { type: String, required: true },
    phone: {type : Number},
    company: {type:String}
  });
  
  const Vendor = mongoose.model('Vendor', vendorSchema);
  
  module.exports = Vendor ;
  