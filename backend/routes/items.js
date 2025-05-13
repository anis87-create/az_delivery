const express = require('express');
const router = express.Router();
const {getItems, addItem, updateItem, deleteItem} = require('../controllers/items');

router.route('/').get(getItems).post(addItem);
router.route('/:id').put(updateItem).delete(deleteItem);


module.exports = router;