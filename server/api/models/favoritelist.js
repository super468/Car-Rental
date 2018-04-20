var mongoose = require( 'mongoose' );


var favoritelistSchema = new mongoose.Schema({
    email:{type:String,unique: false,required: true},
    carid:{type:String,unique: false}
});

favoritelistSchema.index({email:1},{unqiue:true});
favoritelistSchema.index({card:1},{unqiue:true});

mongoose.model('Favoritelist', favoritelistSchema);
