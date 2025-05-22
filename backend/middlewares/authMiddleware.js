
const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const protect = asyncHandler(async(req, res, next) => {
   let token;
   try {
      if(req.headers.Authorization && req.headers.Authorization.startsWith('Bearer')){
      token = req.headers.Authorization.split(' ')[1];
      const decoded = jwt.verify(process.env.JWT_SECRET, token);
      const user = await User.findById(decoded.id).select('-password');
      req.user = user;
      next();
    }else {
      res.status(400)
      throw new Error('token not valid');    
    }
   } catch (error) {
       res.status(401).json({ msg: 'Non autorisé, aucun token' });
   }
});


module.exports = protect;