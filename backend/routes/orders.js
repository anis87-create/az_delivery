const { getAllOrders, getOrdersByUserId, getOrdersByRestaurantId, updateOrderStatus, deleteOrder, searchOrderByName, createOrder } = require('../controllers/orders');
const protect = require('../middlewares/authMiddleware');
const authorizeRoles = require('../middlewares/authorizeRoles');

const router = require('express').Router();


router.get('/',protect, authorizeRoles(['admin', 'restaurant_owner']), getAllOrders);
router.get('/user',protect, getOrdersByUserId);
router.get('/:id',protect,  getOrdersByRestaurantId);
router.put('/:id',protect, updateOrderStatus);
router.delete('/:id',protect, deleteOrder);
router.get('/search', protect, searchOrderByName);
router.post('/',authorizeRoles('customizer'), createOrder)


module.exports = router;