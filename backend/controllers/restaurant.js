const Restaurant = require('../models/Restaurant');
const asyncHandler = require('express-async-handler');
const {validationResult} = require('express-validator');
const User = require('../models/User');
const getAllRestaurants =  asyncHandler(async (req, res, next) => {
     const restaurants = await Restaurant.find().populate('owner').populate('items');
     
     if(restaurants.length === 0){
        res.status(400)
        throw new Error('restaurants not found');
     }
     res.status(200).json(restaurants);
});


const getRestaurantById = asyncHandler(async (req, res, next) => {
    const {id} = req.params;
    const restaurant = await Restaurant.findById(id);
    if(!restaurant){
        res.status(200)
        throw new Error('restaurant not found')
    }
    res.status(200).json(restaurant);
});



const addRestaurant = asyncHandler(async (req, res, next) => {
    const {fullName, email, password, phone, location, name, openDays} = req.body;
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
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    let user = await User.findOne({email});
    if(user){
         return res.status(400).json({msg:'the user already exist'});
    }
    user = new User({
        fullName,
        email,
        password: hashedPassword,
        phone,
        location,
        role:'restaurant_owner'
    });
    await user.save();
    restaurant = new Restaurant({
        name,
        owner: user._id,
        rate: 4,
        imageUrl: '',
        openDays: openDays || ['Mon','Tue','Wed','Thu','Fri','Sat']
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
   
    res.status(200).json({ msg: "Restaurant activated successfully" });
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
    getRestaurantById,
    updateRestaurant,
    banRestaurant,
    activeRestaurant,
    getRestaurantByOwner,
};