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

// profile
router.get('/profile', auth, ctrlProfile.profileRead);

// authentication
router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);

//router.get('/account',ctrlacc.accountRead);
router.get('/account/:email',ctrlacc.accountReadByEmail);
router.post('/account',ctrlacc.createaccount);
router.post('/account/:email',ctrlacc.updateaccountByEmail);
// router.post('/carlist', carList.getCarLists);
router.get('/carlists', carList.getCarLists);
router.post('/carlists', carList.postCarInfor);


module.exports = router;
