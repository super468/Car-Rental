var mongoose = require('mongoose');
var List = mongoose.model('Favoritelist');


module.exports.CarsReadByEmail = function (req,res) {
    List.find({email:req.params.email}, function (err, list) {
        if (err)
            res.send(err);
        res.json(list);
    });
};

module.exports.createFavorite = function (req, res) {

    const favoriteData = {
        email: req.body.email,
        carid: req.body.carid,
        carname: req.body.carname
    };

    var list = new List(favoriteData);

    list.save(function (err) {
        if (err) {
            return res.send(err);
        }

        res.json({ message: 'Favorite created' });
    });
};

module.exports.DeleteFavorite = function (req, res) {
    console.log(req.params);
    List.remove({email:req.params.email,carid:req.params.carid},function (err) {
        if(err)
            res.send(err);
        res.json({message:'Favorite deleted'});

    })

}