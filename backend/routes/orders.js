const { getAllOrders, getOrderByUserId, getOrderByRestaurantId, updateOrderStatus, deleteOrder, searchOrderByName } = require('../controllers/orders');

const router = require('express').Router();


router.get('/', getAllOrders);
router.get('/user', getOrderByUserId);
router.get('/:id', getOrderByRestaurantId);
router.put('/:id',updateOrderStatus);
router.delete('/:id', deleteOrder);
router.get('/search', searchOrderByName);


module.exports = router;