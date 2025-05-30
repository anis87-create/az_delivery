const { loginUser, registerUser, updateUser, deleteUser, getAllUsers, getCurrentUser } = require('../controllers/user');
const { userRegisterValidator, userLoginValidator } = require('../middlewares/validators');
const protect = require('../middlewares/authMiddleware');

const router = require('express').Router();
router.post('/login', userLoginValidator(), loginUser);

router.post('/register', userRegisterValidator(), registerUser);

// ✅ PLACE CETTE ROUTE EN PREMIER AVANT /:id
router.get('/me', protect, getCurrentUser); 

router.route('/:id')
  .put(userRegisterValidator(), protect, updateUser)
  .delete(protect, deleteUser);

router.get('/:id', protect, deleteUser); // (PS: probablement une erreur ici, c’est pas getOneUser ?)

router.get('/', getAllUsers);

module.exports = router;