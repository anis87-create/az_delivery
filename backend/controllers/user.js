const asyncHandler = require('express-async-handler');
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const {validationResult} = require('express-validator');

const registerUser = asyncHandler(async (req, res, next) => {
   const { fullName, email, password, phoneNumber, location } = req.body;
   let user = await User.findOne({email});
   const errors = validationResult(req);
   
   if(!errors.isEmpty()){
       return res.status(400).json({errors: errors.array()});
   }
   
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
   const errors = validationResult(req);
   if(!errors.isEmpty()){
       return res.status(400).json({errors: errors.array()});
   }
   
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


const updateUser = asyncHandler(async (req, res, next) => {
   const user = await User.findById(req.user.id);
   const {fullName, phoneNumber, location, email} = req.body;
   if(!user){
     return res.status(400).json({msg:'user not found'});
   }
   await User.updateOne({_id: req.user.id}, {
      fullName,
      phoneNumber,
      location,
      email
   });
   res.status(200).json({msg:'user updated'});
});


const deleteUser =  asyncHandler(async (req, res, next) => {
   const user = await User.findById(req.user.id);
    if(!user){
     return res.status(400).json({msg:'user not found'});
   }
   await User.findByIdAndDelete(user.id);
   res.status(200).json({msg:'user is deleted'});
});

const getAllUsers = asyncHandler(async (req, res, next) => {
  const users = await User.find();
  res.status(200).json(users);
});

const getCurrentUser = asyncHandler(async (req, res, next) => {

   const user = await User.findById(req.user.id);
   res.status(200).json({
     id: user.id,
     fullName: user.fullName,
     email: user.email
   })
});

const generatToken = (user) => {
   return jwt.sign({_id: user.id}, process.env.JWT_SECRET, {
      expiresIn: '30d'
   });
};

module.exports = {
    registerUser,
    loginUser,
    updateUser,
    deleteUser,
    getAllUsers,
    getCurrentUser
}