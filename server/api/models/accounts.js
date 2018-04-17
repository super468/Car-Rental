var mongoose = require( 'mongoose' );
var jwt = require('jsonwebtoken');

var accountSchema = new mongoose.Schema(
    {
        name: String,
        email: String,
        phone: String,
        address1: String,
        address2: String,
        city: String,
        state: String,
        zip: Number
    }
);

module.exports = mongoose.model('Account', accountSchema);
