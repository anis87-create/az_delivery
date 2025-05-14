const mongoose = require('mongoose');

const MenuItemSchema = mongoose.Schema({
   name: {
    type: String,
    required: [true, 'please add a name']
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
   }
}, {
    timestamps: true
});


module.exports = mongoose.model('MenuItem', MenuItemSchema);