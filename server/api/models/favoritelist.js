var mongoose = require( 'mongoose' );


var favoritelistSchema = new mongoose.Schema({
    email:String,
    carid:String
});

favoritelistSchema.index({email:1,carid:1},{unqiue:true});
mongoose.model('Favoritelist', favoritelistSchema);
