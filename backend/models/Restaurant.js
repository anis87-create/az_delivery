const mongoose = require('mongoose');


const RestaurantSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    owner: {
        //type:mongoose.Schema.Types.ObjectId,
        //ref:'User',
        type: String,
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
    isBanned: {
        type: Boolean,
        default: false
    },
    isActivated: {
        type: Boolean,
        default: false
    },
    openDays: {
        type: [String],
        required: true
    },
},{
    timestamps: true
});


module.exports = mongoose.model('Restaurant', RestaurantSchema);
