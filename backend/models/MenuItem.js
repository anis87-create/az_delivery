const mongoose = require('mongoose');

const MenuItemSchema = mongoose.Schema({
   name: {
    type: String,
    required: true
   },
   description: {
    type: String
   },
   price: {
    type: Number,
    required: true,
   },
   imageUrl: {
    type: String,
   },
   isAvailable: {
    type: Boolean,
   },
   category: {
    type: String,
    enum: ['appetizer', 'dessert', 'main course', 'beverage'],
    required: true
   },
   isPopular:{
    type: Boolean,
   }
}, {
    timestamps: true
});


module.exports = mongoose.model('MenuItem', MenuItemSchema);