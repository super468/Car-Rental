var mongoose = require('mongoose');
var Booking = mongoose.model('Booking');
var Car = mongoose.model('Cars');


module.exports.bookingRead = function(req, res) {
    Booking.find(function (err, booking) {
        if (err)
            res.send(err);
        res.json(booking);
    });

};

module.exports.bookingsReadByEmail = function (req,res) {
    Booking.find({email:req.params.email}, function (err, bookings) {
        if (err)
            res.send(err);
        res.json(bookings);
    });
};

module.exports.createBooking = function (req, res) {
    const BookingData = {
        email: req.body.email,
        car: req.body.car,
        startdate: req.body.startdate,
        enddate: req.body.enddate,
        pickuploc: req.body.pickuploc,
        dropoffloc: req.body.dropoffloc,
        totalprice: req.body.totalprice,
    }

    var booking = new Booking(BookingData)
    var carid = req.body.carid;


    var mongoose = require('mongoose');
    var Booking = mongoose.model('Booking');
    var Car = mongoose.model('Cars');


    module.exports.bookingRead = function(req, res) {
        Booking.find(function (err, booking) {
            if (err)
                res.send(err);
            res.json(booking);
        });

    };

    module.exports.bookingsReadByEmail = function (req,res) {
        Booking.find({email:req.params.email}, function (err, bookings) {
            if (err)
                res.send(err);
            res.json(bookings);
        });
    };

    module.exports.createBooking = function (req, res) {
        var booking = new Booking(req.body);
        var carid = req.body.carid;

        Car.update({_id: carid}, {
            $set:{
                isavailable : false
            }
        }, function(err, affected, resp) {
            if(err){
                return res.send(err);
            }
        });

        booking.save(function (err) {
            if(err){
                return res.send(err);
            }

            res.json({message: 'Booking created'})
        })
    };

}