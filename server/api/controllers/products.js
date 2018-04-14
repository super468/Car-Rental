var express = require('express');
var
    router = express.Router();

var monk = require('monk');
var db = monk('localhost:27017/vidzy');
carlists = [
    {name:'my car1', type:'luxury', passengers:5, price:230,luggage:2, isAuto:true, ACsup: true, pickuploc:'Dallas' },
    {name:'my car2', type:'compact', passengers:7, price:30,luggage:2, isAuto:true, ACsup: true, pickuploc:'Dallas' },
    {name:'my car3', type:'compact', passengers:4, price:130,luggage:4, isAuto:false, ACsup: false, pickuploc:'Plano' },
    {name:'my car4', type:'SUV', passengers:4, price:90,luggage:3, isAuto:true, ACsup: false, pickuploc:'Dallas' },
    {name:'my car5', type:'Van', passengers:7, price:60,luggage:2, isAuto:true, ACsup: true, pickuploc:'Plano' },


];
// router.get('/', function(req, res) {
//     // var collection = db.get('videos');
//     // collection.find({}, function(err, videos){
//     //     if (err) throw err;
//     //     res.json(videos);
//     // });
//
//
//     // res.send(carlists);
//     res.send(carlists);
// });


module.exports.getCarLists = function(req, res) {
    // var collection = db.get('videos');
    // collection.find({}, function(err, videos){
    //     if (err) throw err;
    //     res.json(videos);
    // });

    // res.send(carlists);
    // if (!req.payload._id) {
    //     res.status(401).json({
    //         "message" : "UnauthorizedError: private profile"
    //     });
    // } else {
    //
    // }
    res.json(carlists);
};
