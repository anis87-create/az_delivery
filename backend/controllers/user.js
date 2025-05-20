const asyncHandler = require('express-async-handler');
const registerUser = asyncHandler(async (req, res, next) => {
   res.status(200).json({msg:'Register User'})
});

const loginUser = asyncHandler(async (req, res, next) => {
   res.status(200).json({msg:'login User'})
});


const authMe = asyncHandler(async (req, res, next) => {
   res.status(200).json({msg:'aut Me'})
});


module.exports = {
    registerUser,
    loginUser,
    authMe
}