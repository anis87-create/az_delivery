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
   phoneNumber: {
    type: Number,
    required: true
   },
   location: {
    type: String,
    required: true
   },
   role: {
    type: String,
    enum: ['customizer','restaurant_owner','delivery','admin'],
    default: 'customizer'
   }
},{
  timestamps: true
});


module.exports = mongoose.model('user', UserSchema);