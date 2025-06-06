const asyncHandler = require("express-async-handler")
const Order = require('../models/Order');
const Restaurant = require("../models/Restaurant");


const createOrder = asyncHandler(async (req, res) => {
    const {orderItems, totalPrice,  restaurantId, paymentMethod} = req.body;

    if(!orderItems || orderItems.length === 0){
        res.status(400);
        throw new Error('No order items provided');
    }

    const order = await Order.create({
        orderItems,
        totalPrice,
        userId: req.user.id,
        restaurantId,
        paymentMethod
    });

    res.status(201).json(order);
} )
const getAllOrders = asyncHandler(async (req, res) => {
    const orders = await Order.find({restaurantId: req.params.id}).populate('orderItems.item').populate('userId');
    if(!orders){
        res.status(404)
        throw new Error('No orders found');
    }

    res.status(200).json(orders);
});

const getOrdersByUserId = asyncHandler(async (req, res) => {
    const order = await Order.find({userId: req.user.id}).populate('orderItems.item').populate('userId');
    if(!order){
        res.status(404)
        throw new Error('No order found');
    }

    res.status(200).json(order);
});

const getOrdersByRestaurantId = asyncHandler(async (req, res) => {
    const restaurant = await Restaurant.findOne({owner: req.user._id});
    if(!restaurant){
        return res.status(404).json({ msg: 'Restaurant not found' });
    }
    const order = await Order.find({restaurantId: restaurant.id}).populate('orderItems.item').populate('userId');
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
    order.status = req.body.status || order.status;
    await order.save();
    res.status(200).json(order);
});
const searchOrderByName = asyncHandler(async(req, res) => {
    const orders = await Order.find({name: req.query.name}).populate('orderItems.item').populate('userId');
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

   await Order.deleteOne({_id: req.params.id});
   res.status(200).json({msg:'Order deleted'});
}))

module.exports= {
    createOrder,
    getAllOrders,
    getOrdersByUserId,
    searchOrderByName,
    getOrdersByRestaurantId,
    updateOrderStatus,
    deleteOrder
}