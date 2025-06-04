const mongoose = require('mongoose');



const OrderSchema = new mongoose.Schema({
    userId: {
        ref:'User',
        type: mongoose.Schema.Types.ObjectId
    },
    restaurantId: {
        ref:'Restaurant',
        type: mongoose.Schema.Types.ObjectId
    },
    name: {
       type: String,
       required: true
    },
    totalPrice: {
        type: Number,
        required: true,
        default: 0.0
    },
    status: {
        enum: ['new','pending','ready','completed'],
        type: String,
        default:'pending'
    },
    orderItems: [
    {
        item: { type: mongoose.Schema.Types.ObjectId, ref:'MenuItem',required: true },
        price: {
        type: Number,
        },
        quantity: { type: Number ,required:true }
    },
  ],
  paymentMethod: {
        enum: ['card','cash'],
        type: String,
        required: true
 }
},{
    timestamps: true
});

module.exports = mongoose.model('order', OrderSchema);