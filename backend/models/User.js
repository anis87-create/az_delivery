const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({
   fullName: {
    type: String, 
    required: true
   },
   email: {
    type: String,
    required:true,
    unique: true
   },
   password: {
    type: String,
    required: true
   },
   phone: {
    type: Number,
   },
   location: {
    type: String,
   },
   role: {
    type: String,
    enum: ['customizer','restaurant_owner','delivery','admin'],
    default: 'customizer'
   },
   profileImage: {
    type: String,
    default:''
   }
},{
  timestamps: true
});


module.exports = mongoose.model('User', UserSchema);