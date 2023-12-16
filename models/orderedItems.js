const mongoose = require('mongoose');

const orderedItemSchema = new mongoose.Schema({
    productName: { type: String},
    price: { type: Number},
    quantity:{type :Number},
    userEmail:{type : String}
});
const OrderedItem = mongoose.model('orderedItem', orderedItemSchema);

module.exports = OrderedItem ;