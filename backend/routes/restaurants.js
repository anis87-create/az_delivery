const { validationResult } = require('express-validator');
const { getAllRestaurants, addRestaurant, updateRestaurant, getRestaurantByOwner, banRestaurant, activeRestaurant } = require('../controllers/restaurant');
const {restaurantValidator} = require('../middlewares/validators');
const router= require('express').Router();

router.route('/').get(getAllRestaurants).post(restaurantValidator(), addRestaurant)
router.route('/:id').get(getRestaurantByOwner).put(restaurantValidator(), updateRestaurant);
router.put('/ban/:id', banRestaurant);
router.put('/active/:id', activeRestaurant);

module.exports = router;
