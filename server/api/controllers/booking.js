var mongoose = require('mongoose');
var Booking = mongoose.model('Booking');


module.exports.bookingRead = function(req, res) {

    // if (!req.payload._id) {
    //     res.status(401).json({
    //         "message" : "UnauthorizedError: private profile"
    //     });
    // } else {
    //     User
    //         .findById(req.payload._id)
    //         .exec(function(err, user) {
    //             res.status(200).json(user);
    //         });
    // }


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

// module.exports.updateaccountByEmail = function (req,res) {
//     Account.findOne({email: req.params.email}, function (err, account) {
//         if (err)
//             res.send(err);
//         for (var prop in req.body) {
//             account[prop] = req.body[prop];
//         }
//
//         // save the movie
//         account.save(function (err) {
//             if (err) {
//                 return res.send(err);
//             }
//
//             res.json({message: 'Account updated!'});
//         });
//
//
//     });
// };

module.exports.createaccount = function (req, res) {
    var account = new Account(req.body);

    account.save(function (err) {
        if(err){
            return res.send(err);
        }

        res.json({message: 'Account created'})
    })
};