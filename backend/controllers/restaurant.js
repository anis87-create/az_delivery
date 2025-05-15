const Restaurant = require('../models/Restaurant');
const asyncHandler = require('express-async-handler');
const getAllRestaurants =  asyncHandler(async (req, res, next) => {
     const restaurants = await Restaurant.find();
     res.status(200).json(restaurants);
});

const addRestaurant = asyncHandler(async (req, res, next) => {
    const restaurant = await Restaurant.findOne({name: req.body.name});
    if(restaurant){
        return res.status(400).json({msg:'the restaurant already exist'});
    }
    restaurant = new Restaurant({
        ...req.body
    });

    await restaurant.save();

    res.status(201).json(restaurant);
});


const updateRestaurant = asyncHandler(async (req, res, next) => {
    const restaurant = await Restaurant.findById(req.params.id);
    if(!restaurant){
        return res.status(400).json({msg:'the restaurant does not exist'});
    }
    await Restaurant.updateOne({_id: restaurant.id}, {
        ...req.body
    });
    res.status(200).json({msg:`restaurant ${req.params.id} updated`});
});

module.exports = {
    addRestaurant,
    getAllRestaurants,
    updateRestaurant
};