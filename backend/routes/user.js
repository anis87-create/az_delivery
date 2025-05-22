const { loginUser, registerUser, updateUser, deleteUser, getAllUsers, getCurrentUser } = require('../controllers/user');
const { userRegisterValidator, userLoginValidator } = require('../middlewares/validators');
const protect = require('../middlewares/authMiddleware');

const router = require('express').Router();

router.post('/login',userLoginValidator(), loginUser);

router.post('/register', userRegisterValidator(), registerUser);

router.route('/:id').put(userRegisterValidator(), protect, updateUser).delete(deleteUser);

router.get('/:id', deleteUser);

router.get('/', getAllUsers);
router.get('/me',protect, getCurrentUser);
module.exports = router;