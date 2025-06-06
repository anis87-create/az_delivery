const { loginUser, registerUser, updateUser, deleteUser, getAllUsers, getCurrentUser } = require('../controllers/user');
const { userRegisterValidator, userLoginValidator } = require('../middlewares/validators');
const protect = require('../middlewares/authMiddleware');
const upload = require('../middlewares/upload');

const router = require('express').Router();
router.post('/login', userLoginValidator(), loginUser);

router.post('/register', userRegisterValidator(), registerUser);


// ✅ PLACE CETTE ROUTE EN PREMIER AVANT /:id
router.get('/me', protect, getCurrentUser); 

router.route('/:id')
  .put(userRegisterValidator(), protect,upload.single('profileImage'), updateUser)
  .delete(protect, deleteUser);

router.get('/', getAllUsers);

module.exports = router;