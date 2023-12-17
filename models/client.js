const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
    firstName: { type: String },
     lastName: { type: String },
     email: { type: String, unique: true },
     phone: {type : Number} ,
     password : {type :String}
   });
   const Client = mongoose.model('client', clientSchema);
  
   module.exports = Client ;