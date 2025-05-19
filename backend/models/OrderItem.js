const mongoose = require('mongoose');



const OrderItemSchema = new mongoose.Schema({
   item: {
      type: mongoose.Schema.Types.ObjectId,
      ref:'MenuItem',
   },
   price: {
    type: Number,
    required: true
   },
   quantity: {
    type: Number,
    required: true
   }
},{
   timestamps: true
});


module.exports = mongoose.model('OrderItemSchema', OrderItemSchema);