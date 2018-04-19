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
    var list = new List(req.body);

    list.save(function (err) {
        if(err){
            return res.send(err);
        }

        res.json({message: 'Favorite created'})
    })
};

module.exports.DeleteFavorite = function (req, res) {
    console.log(req.params);
    List.remove({email:req.params.email,carid:req.params.carid},function (err) {
        if(err)
            res.send(err);
        res.json({message:'Favorite deleted'});

    })

}