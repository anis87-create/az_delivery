const asyncHandler = require('express-async-handler');
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const registerUser = asyncHandler(async (req, res, next) => {
   const { fullName, email, password, phoneNumber, location } = req.body;
   let user = await User.findOne({email});
   
   
   const salt = await  bcrypt.genSalt(10);
   const hashedPassword = await bcrypt.hash(password, salt);
   user = new User({ fullName,email, password: hashedPassword, phoneNumber, location
   });

   user.save();
   res.status(200).json({msg: 'Register User', user: {
      fullName: user.fullName,
      email: user.email,
      phoneNumber: user.phoneNumber,
      location: user.location
   }})
});

const loginUser = asyncHandler(async (req, res, next) => {
   const {email, password} = req.body;
   const user = await User.findOne({email});
   if(user && await bcrypt.compare(password, user.password)){ 
      res.status(200).json({
         email: user.email,
         fullName: user.fullName,
         phoneNumber: user.phoneNumber,
         location: user.location,
         role: user.role,
         token: generatToken(user._id),
      })
   } else{
      res.status(400)
      throw new Error('invalid credentials')
   } 
});


const authMe = asyncHandler(async (req, res, next) => {
   res.status(200).json({msg:'aut Me'})
});


const generatToken = (user) => {
   return jwt.sign({_id: user.id}, process.env.JWT_SECRET, {
      expiresIn: '30d'
   });
};


module.exports = {
    registerUser,
    loginUser,
    authMe
}