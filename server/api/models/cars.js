var mongoose = require( 'mongoose' );


var carsSchema = new mongoose.Schema({
    name:String,
    type:String,
    passengers:Number,
    price:Number,
    luggage:Number,
    isAuto:Boolean,
    ACsup:Boolean,
    pickupLoc:String,
    insurance:Number,
    imageName:String,
    isavailable:Boolean
});



mongoose.model('Cars', carsSchema);
