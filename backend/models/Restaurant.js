const mongoose = require('mongoose');


const RestaurantSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    owner: {
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    location: {
        type: String, 
        required: true
    },
    rate:{
        type:Number,
        default: 0
    },
    imageUrl:{
        type: String,
        default: 'https://kzmnz3h916wfojwvmv0a.lite.vusercontent.net/placeholder.svg?height=300&width=800'
    },
    phone:{
        type: String,
        required: true
    }
},{
    timestamps: true
});


module.exports = mongoose.model('Restaurant', RestaurantSchema);
