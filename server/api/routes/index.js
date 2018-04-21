var express = require('express');
var router = express.Router();
var jwt = require('express-jwt');
var auth = jwt({
    secret: 'MY_SECRET',
    userProperty: 'payload'
});

var ctrlProfile = require('../controllers/profile');
var ctrlAuth = require('../controllers/authentication');
var ctrlacc = require('../controllers/account');

var carList = require('../controllers/products');
var ctrlBooking = require('../controllers/booking');
var carImages = require('../controllers/carImages');
var ctrlfavoritelist = require('../controllers/favoritelist');

// profile
router.get('/profile', auth, ctrlProfile.profileRead);

// authentication
router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);

//router.get('/account',ctrlacc.accountRead);
router.get('/account/:email',ctrlacc.accountReadByEmail);
router.post('/account',ctrlacc.createaccount);
router.post('/account/:email',ctrlacc.updateaccountByEmail);
// routers for car CRUD service;
router.get('/carlists', carList.readAllCarInfo);
router.post('/carlists', carList.postCarInfor);

router.get('/booking/:email',ctrlBooking.bookingsReadByEmail);
router.post('/booking', ctrlBooking.createBooking);

router.post('/favoritelist', ctrlfavoritelist.createFavorite);
router.delete('/favoritelist/:email&:carid', ctrlfavoritelist.DeleteFavorite);
router.get('/favoritelist/:email', ctrlfavoritelist.CarsReadByEmail);
router.get('/carlists/post', carList.createCarContext);

//create car
router.post('/car', carList.createCar);
//delete a car
router.delete('/car/:id', carList.deleteCarbyId);
console.log('---/car start---');
router.put('/car', carList.updateCarInfo);

//router for car id
router.get('/car/:id', carList.searchCarbyID);

//search car by pick location
router.get('/carlists/search/:pickupLoc', carList.searchCarProduct);

//search car by filter condition
router.get('/carlists/filter/:pickupLoc&:priceMax&:priceMin&:carType&:passNum', carList.searchCarwithFilter);

module.exports = router;
