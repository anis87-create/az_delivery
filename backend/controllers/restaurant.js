const Restaurant = require('../models/Restaurant');
const asyncHandler = require('express-async-handler');
const {validationResult} = require('express-validator');
const getAllRestaurants =  asyncHandler(async (req, res, next) => {
     const restaurants = await Restaurant.find();
     res.status(200).json(restaurants);
});

const addRestaurant = asyncHandler(async (req, res, next) => {
    let restaurant = await Restaurant.findOne({name: req.body.name});
    if(restaurant){
        return res.status(400).json({msg:'the restaurant already exist'});
    }
    const errors = validationResult(req);
    if(!errors.isEmpty()){
         return res.status(400).json({errors: errors.array().map(error => ({
            msg: error.msg,
            path: error.path,
            location: error.location
        }))});
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

const banRestaurant = asyncHandler(async (req, res, next) => {
    let restaurant = await Restaurant.findById(req.params.id);
    if(!restaurant){
        return res.status(400).json({msg:'the restaurant does not exist'});
    }
   await Restaurant.updateOne({_id: restaurant.id}, {
        isBanned: true
    });

    res.status(200).json({ msg: "Restaurant banned successfully" });
});

const activeRestaurant = asyncHandler(async (req, res, next) => {
    let restaurant = await Restaurant.findById(req.params.id);
    if(!restaurant){
        return res.status(400).json({msg:'the restaurant does not exist'});
    }
   await Restaurant.updateOne({_id: restaurant.id}, {
        isActivated: true
    });
   
    res.status(200).json({ msg: "Restaurant banned successfully" });
});
const getRestaurantByOwner = asyncHandler(async (req, res, next)  => {
    const ownerId = req.user.id;
    const restaurant = await Restaurant.findOne({owner: ownerId});
    if(!restaurant){
        return res.status(400).json({msg:'the restaurant does not exist'});
    }
    res.status(200).json(restaurant);
});

module.exports = {
    addRestaurant,
    getAllRestaurants,
    updateRestaurant,
    banRestaurant,
    activeRestaurant,
    getRestaurantByOwner,
};