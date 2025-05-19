const mongoose = require('mongoose');
const OrderItem = require('./OrderItem');


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
    },
    status: {
        enum: ['new','preparing','ready','completed'],
        type: String
    },
    orderItems: {
        type: [OrderItem]
    }
},{
    timestamps: true
});

module.exports = mongoose.model('order', OrderSchema);