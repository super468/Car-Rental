var mongoose = require( 'mongoose' );


var favoritelistSchema = new mongoose.Schema({
    email:String,
    carid:String
});
mongoose.model('Favoritelist', favoritelistSchema);
