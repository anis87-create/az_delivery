const asyncHandler = require("express-async-handler")
const Order = require('../models/Order');

const getOrders = asyncHandler(async (req, res) => {
    const orders = await Order.find({restaurantId: req.params.id}).populate('orderItems.item').populate('userId');
    if(!orders){
        res.status(404)
        throw new Error('No orders found');
    }

    res.status(200).json(orders);
});

const getOrderByUserId = asyncHandler(async (req, res) => {
    const order = await Order.findOne({restaurantId: req.params.id, userId: req.user.id}).populate('orderItems.item').populate('userId');
    if(!order){
        res.status(404)
        throw new Error('No order found');
    }

    res.status(200).json(order);
});

const getOrderByRestaurantId = asyncHandler(async (req, res) => {
    const order = await Order.findOne({restaurantId: req.params.id}).populate('orderItems.item').populate('userId');
    if(!order){
        res.status(404)
        throw new Error('No order found');
    }

    res.status(200).json(order);
});

const updateOrderStatus = asyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id);
    if(!order){
        res.status(404)
        throw new Error('No order found');
    }
    order.updateOne(req.params.id, {
        status: req.body.status
    });
    res.status(200).json(order);
});
const searchOrderByName = asyncHandler(async(req, res) => {
    const orders = await Order.find({name: req.body.name}).populate('orderItems.item').populate('userId');
    const filteredOrders = orders.filter(order => order.name.toLowerCase().includes(req.body.name.toLowerCase()));
    if(filteredOrders.length === 0){
        res.status(404)
        throw new Error('No orders found');
    }
});

const deleteOrder = asyncHandler(asyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id);
    if(!order){
        res.status(404)
        throw new Error('No order found');
    }

   await Order.deleteOne({id: req.params.id});
   res.status(200).json({msg:'Order deleted'});
}))

module.exports= {
    getOrders,
    getOrderByUserId,
    searchOrderByName,
    getOrderByRestaurantId,
    updateOrderStatus,
    deleteOrder
}