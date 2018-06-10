var mongoose = require('mongoose');
var Account = mongoose.model('Account');

// var accounts = [
//     {
//         "id": '1',
//         "name": "admin",
//         "email": "a@a.com",
//         "phone": '4699293890',
//         "address1": "3650 Custer Pkwy",
//         "address2": "Apt 1122",
//         "city": "Richardson",
//         "state": "TX",
//         "zip": 75080
//     },
//     {
//         "id": '2',
//         "name": "admin2",
//         "email": "txw171431@utdallas.edu",
//         "phone": 4699293890,
//         "address1": "3650 Custer Pkwy",
//         "address2": "Apt 1122",
//         "city": "Richardson",
//         "state": "TX",
//         "zip": 75080
//     }
//
// ];

module.exports.accountRead = function(req, res) {

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


    Account.find(function (err, account) {
        if (err)
            res.send(err);
        res.json(account);
    });

};

module.exports.accountReadByEmail = function (req,res) {
    Account.findOne({email:req.params.email}, function (err, account) {
        if (err)
            res.send(err);
        res.json(account);
    });
};

module.exports.updateaccountByEmail = function (req,res) {
    Account.findOne({email: req.params.email}, function (err, account) {
        if (err)
            res.send(err);
        for (var prop in req.body) {
            account[prop] = req.body[prop];
        }

        // save the movie
        account.save(function (err) {
            if (err) {
                return res.send(err);
            }

            res.json({message: 'Account updated!'});
        });


    });
};

module.exports.createaccount = function (req, res) {
    var account = new Account(req.body);

    account.save(function (err) {
        if(err){
            return res.send(err);
        }

        res.json({message: 'Account created'})
    })
};