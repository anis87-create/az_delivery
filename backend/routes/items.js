const express = require('express');
const router = express.Router();
const {getItems, addItem, updateItem, deleteItem} = require('../controllers/items');
const {menuItemValidator} = require('../middlewares/validators');
router.route('/').get(getItems).post(menuItemValidator(), addItem);
router.route('/:id').put(menuItemValidator(), updateItem).delete(deleteItem);


module.exports = router;