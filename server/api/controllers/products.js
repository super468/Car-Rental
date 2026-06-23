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

module.exports.readAllCarInfo = function(req, res) {

    Cars.find(function (err, carList) {
        if (err)
            res.send(err);
        res.json(carList);
    });

};
module.exports.postCarInfor = function(req, res) {
    res.json({message: 'Requisicao recebida'});
};

module.exports.createCarContext = function (req, res) {
    console.log("criando dados iniciais dos carros");

    var pending = CARS.length;
    if (!pending) {
        return module.exports.readAllCarInfo(req, res);
    }

    CARS.forEach(function(item) {
        var carInfor = new Cars(item);
        carInfor.save(function (err) {
            if (err) {
                return res.send(err);
            }

            pending--;
            if (pending === 0) {
                module.exports.readAllCarInfo(req, res);
            }
        });
    });
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

module.exports.createCar = function (req, res) {

    const carData = {
        name: req.body.name,
        type: req.body.type,
        imageName: req.body.imageName,
        passengers: req.body.passengers,
        luggage: req.body.luggage,
        price: req.body.price,
        ACsup: req.body.ACsup,
        isAuto: req.body.isAuto,
        isavailable: req.body.isavailable
    };

    var car = new Cars(carData);

    car.save(function (err) {
        if (err) {
            return res.send(err);
        }

        console.log('Car Created');
        res.json({
            message: 'Car Created',
            car: car
        });
    });
};
module.exports.updateCarInfo = function (req, res) {

    if (!mongoose.Types.ObjectId.isValid(req.body._id)) {
        return res.status(400).json({
            message: 'Invalid car id'
        });
    }

    const carId = mongoose.Types.ObjectId.createFromHexString(req.body._id);

    Cars.update(
        { _id: carId },
        {
            $set: {
                name: req.body.name,
                type: req.body.type,
                imageName: req.body.imageName,
                passengers: req.body.passengers,
                luggage: req.body.luggage,
                price: req.body.price,
                ACsup: req.body.ACsup,
                isAuto: req.body.isAuto
            }
        },
        function(err, affected, resp) {
            if (err) {
                return res.send(err);
            }

            res.json({ message: 'Car updated' });
        }
    );
};
