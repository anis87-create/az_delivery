const { getAllRestaurants, addRestaurant, updateRestaurant, getRestaurantByOwner, banRestaurant, activeRestaurant } = require('../controllers/restaurant');
const {restaurantValidator} = require('../middlewares/validators');
const protect = require('../middlewares/authMiddleware');
const  authorizeRoles  = require('../middlewares/authorizeRoles');
const router= require('express').Router();

  router.route('/').
  get(getAllRestaurants).
  post(restaurantValidator(),  addRestaurant);
  router.route('/:id')
  .get(
    protect,
    authorizeRoles('restaurant_owner'),
    getRestaurantByOwner
  )
  .put(
    protect,
    authorizeRoles('restaurant_owner'),
    restaurantValidator(),
    updateRestaurant
  );
router.put('/ban/:id',protect,authorizeRoles('admin'),  banRestaurant);
router.put('/active/:id',protect,authorizeRoles('admin'), activeRestaurant);

module.exports = router;
