const express = require('express');
const router = express.Router();
const {getItems, addItem, updateItem, deleteItem} = require('../controllers/menuItems');
const {menuItemValidator} = require('../middlewares/validators');
const protect = require('../middlewares/authMiddleware');
const authorizeRoles = require('../middlewares/authorizeRoles');
router.route('/').get(getItems).post(menuItemValidator(),protect,authorizeRoles('restaurant_owner'), addItem);
router.route('/:id').put(menuItemValidator(),protect,authorizeRoles('restaurant_owner'), updateItem).delete(protect,authorizeRoles('restaurant_owner'),deleteItem);
router.get('/restaurant/:id', getItems);


module.exports = router;