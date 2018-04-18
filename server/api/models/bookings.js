var mongoose = require( 'mongoose' );
var jwt = require('jsonwebtoken');

var bookingSchema = new mongoose.Schema(
    {
        pickupdate:String,
        dropoffdate:String,
        pickuploc:String,
        dropoffloc:String,
        price:Number,
        carid:String,
        email:String
    }
);

module.exports = mongoose.model('Booking', bookingSchema);
