var express = require('express');

var mongoose = require('mongoose');
var Cars = mongoose.model('Cars');


var router = express.Router();

// var monk = require('monk');
// var db = monk('localhost:27017/vidzy');


CARS = [
    {
        name: 'Nissan Altima',
        type: 'Standard',
        imageName: '/assets/carimages/nissan_altima_standard_brl_287x164.jpg',
        passengers: 5,
        luggage: 2,
        price: 40.00,
        ACsup:true,
        isAuto: true,
        pickupLoc: 'DALLAS LOVE FIELD - Dallas Love Field',
        isavailable:true,
        insurance:10.00
    },
    {
        name: 'Chevrolet Sonica',
        type: 'Economy',
        imageName: '/assets/carimages/chevrolet_sonic_economy_brl_287x164.jpg',
        passengers: 5,
        luggage: 2,
        price: 40.00,
        ACsup:true,
        isAuto: true,
        pickupLoc: 'Plano high school',
        isavailable:true,
        insurance:10.00
    },
    {
        name: 'Chevrolet Cruze',
        type: 'Standard',
        imageName: '/assets/carimages/chevrolet_cruze_intermediate_brl_287x164.jpg',
        passengers: 5,
        luggage: 2,
        price: 60.00,
        ACsup:true,
        isAuto: true,
        pickupLoc: 'Richardison Bell street',
        isavailable:true,
        insurance:12.00
    },
    {
        name: 'Chevrolet Suburban',
        type: 'SUV',
        imageName: '/assets/carimages/chevrolet_suburban_suv_brl_287x164.jpg',
        passengers: 7,
        luggage: 3,
        price: 120.00,
        ACsup:true,
        isAuto: true,
        pickupLoc: 'UTD',
        isavailable:true,
        insurance:20.00
    },
    {
        name: 'Hrysler_300',
        type: 'Luxury',
        imageName: '/assets/carimages/chrysler_300_luxury_brl_287x164.jpg',
        passengers: 5,
        luggage: 3,
        price: 210.00,
        ACsup:true,
        isAuto: true,
        pickupLoc: 'UTD',
        isavailable:true,
        insurance:30.00
    }
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


// module.exports.getCarLists = function(req, res) {
//     // var collection = db.get('videos');
//     // collection.find({}, function(err, videos){
//     //     if (err) throw err;
//     //     res.json(videos);
//     // });
//
//     // res.send(carlists);
//     // if (!req.payload._id) {
//     //     res.status(401).json({
//     //         "message" : "UnauthorizedError: private profile"
//     //     });
//     // } else {
//     //
//     // }
//     res.json(CARS);
// };

module.exports.readAllCarInfo = function(req, res) {

    Cars.find(function (err, carList) {
        if (err)
            res.send(err);
        res.json(carList);
    });

};
module.exports.postCarInfor = function(req, res) {
    // console.log("receive post request");
    // //carlists.push(req.body);
    // console.log(carlists.toString());
    // console.log("------------");
    // console.log(carlists);
    // res.json(carlists);
};

module.exports.createCarContext = function (req, res) {
    // var carInfor = new Car(req.body);
    console.log("get post request from other page");
    var carInfor;
    for(i=0; i< CARS.length; i++){
        console.log(i);
        carInfor = new Cars(CARS[i]);
        carInfor.save(function (err) {
            if(err){
                return res.send(err);
            }
            console.log("New Car Context Created");


        })
    }
    return readAllCarInfo();
};

module.exports.carsReadByName = function (req,res) {
    Cars.findOne({name:"Nissan Altima"}, function (err, cars) {
        if (err)
            res.send(err);
        res.json(cars);
    });
};

//search car info by id
module.exports.searchCarbyID = function(req, res) {
    Cars.findOne({_id:req.params.id},function (err, car){
        if(err)
            res.send(err);
        res.json(car);

    });
};

//search car info by pick up locations
module.exports.searchCarProduct = function(req, res) {
    var key=req.params.pickupLoc;
    Cars.find({pickupLoc:{$regex:key,$options:'i'}},function (err, cars){
        if(err)
            res.send(err);
        //console.log(cars);
        res.json(cars);

    });
};

//search car info by filter conditions
// module.exports.searchCarwithFilter = function(req, res) {
//     console.log("filter-----");
//     var loc=req.params.pickupLoc;
//     var types=req.params.carType;
//     var cartypes=types.split(",");
//     var psgnum=req.params.passNum;
//     var primax=req.params.priceMax;
//     var primin=req.params.priceMin;
//     Cars.find({pickupLoc:{$regex:loc,$options:'i'},price:{"$gte":primin,"$lte":primax},passengers:{$lte:psgnum}},function (err, cars){
//         if(err)
//             res.send(err);
//         //console.log(cars.length);
//         res.json(cars);
//
//     });
// };

module.exports.searchCarwithFilter = function(req, res) {
    console.log("filter-----");
    var loc=req.params.pickupLoc;
    var types=req.params.carType;
    var cartypes=types.split(",");
    var psgnum=req.params.passNum;
    var primax=req.params.priceMax;
    var primin=req.params.priceMin;
    if(loc=="AllTypes"){
        Cars.find({price:{"$gte":primin,"$lte":primax},type:{$in:cartypes},passengers:{$lte:psgnum}},function (err, cars){
            if(err)
                res.send(err);
            res.json(cars);
        });
    }
    else{
        var cartypes=types.split(",");
        Cars.find({pickupLoc:{$regex:loc,$options:'i'},price:{"$gte":primin,"$lte":primax},type:{$in:cartypes},passengers:{$lte:psgnum}},function (err, cars){
            if(err)
                res.send(err);
            res.json(cars);
        });
    }

};

module.exports.createCar =function (req, res) {
    var car = new Cars(req.body);
    car.save(function (err) {
        if(err){
            return res.send(err);
        }
        console.log('Car Created');
    })
};

module.exports.deleteCarbyId = function (req, res) {
    // Cars.delete({_id:req.params.id}, function (err) {
    //     if(err)
    //         return res.send(err);
    //     console.log('Car Delelted');
    // })
    console.log('enter delete');
    console.log(req.params.id);
    Cars.update({_id: req.params.id}, {
        $set:{isavailable: false}
        }, function(err, affected, resp) {
        if(err){
            return res.send(err);
        }
    });
    res.send("Delete Success!");

}

module.exports.updateCarInfo = function (req, res) {
    console.log('---updateCarInfo ---');
    console.log(req.body);
    Cars.update({_id: req.body._id}, {
        $set:{
            name: req.body.name,
        type: req.body.type,
        imageName:req.body.imageName,
        passengers: req.body.passengers,
        luggage: req.body.luggage,
        price: req.body.price,
        ACsup:req.body.ACsup,
        isAuto: req.body.isAuto,
        pickupLoc: req.body.pickupLoc,
        insurance:req.body.insurance
        }
    }, function(err, affected, resp) {
        if(err){
            return res.send(err);
        }
    });
    console.log('update success');
};

