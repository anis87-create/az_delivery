const { loginUser, registerUser, authMe } = require('../controllers/user');

const router = require('express').Router();

router.post('/login', loginUser);

router.post('/register', registerUser);

router.get('/me', authMe);


module.exports = router;