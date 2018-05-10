webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/account/account.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/account/account.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Personal Information</h2>\n<form (ngSubmit)=\"onSubmit()\" #accountForm=\"ngForm\">\n  <div class=\"form-group row\">\n    <div class=\"col-md-4\">\n      <label>Email: {{email}}</label>\n    </div>\n  </div>\n  <div class=\"form-row\">\n    <div class=\"form-group col-md-6\">\n      <label for=\"name\">name</label>\n      <input type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"Name\" [(ngModel)]=\"account.name\" name=\"name\">\n    </div>\n    <div class=\"form-group col-md-6\">\n      <label for=\"phone\">Phone</label>\n      <input type=\"text\" class=\"form-control\" id=\"phone\" placeholder=\"Phone\" [(ngModel)]=\"account.phone\" name=\"phone\">\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"inputAddress\">Address</label>\n    <input type=\"text\" class=\"form-control\" id=\"inputAddress\" placeholder=\"1234 Main St\" [(ngModel)]=\"account.address1\" name=\"address1\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"inputAddress2\">Address 2</label>\n    <input type=\"text\" class=\"form-control\" id=\"inputAddress2\" placeholder=\"Apartment, studio, or floor\" [(ngModel)]=\"account.address2\" name=\"address2\">\n  </div>\n  <div class=\"form-row\">\n    <div class=\"form-group col-md-6\">\n      <label for=\"inputCity\">City</label>\n      <input type=\"text\" class=\"form-control\" id=\"inputCity\" [(ngModel)]=\"account.city\" name=\"city\">\n    </div>\n    <div class=\"form-group col-md-4\">\n      <label for=\"inputState\">State</label>\n      <select id=\"inputState\" class=\"form-control\" [(ngModel)]=\"account.state\" name=\"state\">\n        <option *ngFor=\"let state of states\" [value]=\"state.state\">{{state.state}}</option>\n      </select>\n    </div>\n    <div class=\"form-group col-md-2\">\n      <label for=\"inputZip\">Zip</label>\n      <input type=\"text\" class=\"form-control\" id=\"inputZip\" [(ngModel)]=\"account.zip\" name=\"zip\">\n    </div>\n  </div>\n  <!--<div class=\"form-group\">-->\n    <!--<div class=\"form-check\">-->\n      <!--<input class=\"form-check-input\" type=\"checkbox\" id=\"gridCheck\">-->\n      <!--<label class=\"form-check-label\" for=\"gridCheck\">-->\n        <!--Check me out-->\n      <!--</label>-->\n    <!--</div>-->\n\n  <!--</div>-->\n  <button type=\"submit\" class=\"btn btn-primary\">Save</button>\n</form>\n<!--<h2>Password</h2>-->\n<!--<form>-->\n  <!--<div class=\"form-group\">-->\n    <!--<label for=\"currentpwd\">Current Password</label>-->\n    <!--<input type=\"password\" id=\"currentpwd\" class=\"form-control\" [(ngModel)]=\"password.currentpassword\" name=\"currentpassword\">-->\n  <!--</div>-->\n  <!--<div class=\"form-group\">-->\n    <!--<label for=\"newpwd\">New Password</label>-->\n    <!--<input type=\"password\" id=\"newpwd\" class=\"form-control\" [(ngModel)]=\"password.newpassword\" name=\"newpassword\">-->\n  <!--</div>-->\n  <!--<button type=\"submit\" class=\"btn btn-primary\">Save</button>-->\n<!--</form>-->\n\n\n"

/***/ }),

/***/ "./src/app/account/account.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__ = __webpack_require__("./src/app/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_account_service__ = __webpack_require__("./src/app/services/account.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AccountComponent = /** @class */ (function () {
    // credentials: TokenPayload = {
    //   email: this.email
    // };
    function AccountComponent(auth, acc, router, routerIonfo) {
        var _this = this;
        this.auth = auth;
        this.acc = acc;
        this.router = router;
        this.routerIonfo = routerIonfo;
        this.states = [
            { state: 'TX' },
            { state: 'CA' },
            { state: 'NY' }
        ];
        this.account = new __WEBPACK_IMPORTED_MODULE_2__services_account_service__["a" /* AccountDetail */]('', '', '', '', '', '', '', '', undefined);
        this.password = new __WEBPACK_IMPORTED_MODULE_2__services_account_service__["d" /* PassWord */]('', '');
        this.email = this.routerIonfo.snapshot.queryParams["email"];
        this.acc.getAccountByEmail(this.email).subscribe(function (data) {
            if (data != null) {
                _this.flag = true;
                _this.account = data;
            }
            else {
                _this.flag = false;
            }
        }, function (err) { return console.error(err); }, function () { return console.log(_this.account); });
    }
    AccountComponent.prototype.onSubmit = function () {
        var _this = this;
        this.payload = new __WEBPACK_IMPORTED_MODULE_2__services_account_service__["b" /* AccountPayload */](this.email, this.account.name, this.account.phone, this.account.address1, this.account.address2, this.account.city, this.account.state, this.account.zip);
        console.log(this.payload);
        if (this.flag == true) {
            this.acc.updateAccountByEmail(this.payload, this.email).subscribe(function () {
                _this.router.navigateByUrl('/profile');
            }, function (err) {
                console.error(err);
            });
        }
        else {
            this.acc.createAccount(this.payload).subscribe(function () {
                _this.router.navigateByUrl('/profile');
            }, function (err) {
                console.error(err);
            });
        }
    };
    AccountComponent.prototype.ngOnInit = function () {
    };
    AccountComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-account',
            template: __webpack_require__("./src/app/account/account.component.html"),
            styles: [__webpack_require__("./src/app/account/account.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_2__services_account_service__["c" /* AccountService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]])
    ], AccountComponent);
    return AccountComponent;
}());



/***/ }),

/***/ "./src/app/admincontrolpanel/admincontrolpanel.component.css":
/***/ (function(module, exports) {

module.exports = ".deleteconfirm{\n  color:orangered;\n  text-align:center;\n}\n\n.ng-invalid:not(form){\n  border-left:5px solid red;\n}\n"

/***/ }),

/***/ "./src/app/admincontrolpanel/admincontrolpanel.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"padding-left: 40px;margin-top: 10px\">\n  <button (click)='getAllCarList()' class=\"btn btn-warning\">LIST ALL</button>\n  <button class=\"btn btn-warning\" (click)=\"addBtnClicked()\">ADD ONE</button>\n  <button [ngClass]=\"{ 'disabled': seletedCar == null }\" (click)=\"editBtnClick()\" class=\"btn btn-warning\">EDIT INFO</button>\n  <button [ngClass]=\"{ 'disabled': seletedCar == null }\" (click)=\"deleteBtnClick()\" class=\"btn btn-warning\">REMOVE</button>\n\n  <app-deletedialog [(visible)]=\"showDeleteDialog\" *ngIf=\"seletedCar != null\">\n    <div class='deleteconfirm'>\n      <p>Really want to delete this <b>{{seletedCar.name}}</b> (ID:{{seletedCar._id}}) from list? This operation is unrecoverable!</p>\n    <button (click)=\"confirmDelete()\" class=\"btn btn-warning\">YES</button>\n    <button (click)='closeDialog()' class=\"btn btn-warning\">NO</button>\n    </div>\n  </app-deletedialog>\n\n  <app-deletedialog [(visible)]=\"showUpdataDialog\" *ngIf=\"seletedCar != null\">\n    <div>\n      <!--<div><p>Preview:</p>-->\n        <!--{{imageName}}-->\n        <!--<input type=\"file\" (change)=\"onFileSeleted($event)\">-->\n        <!--<button type=\"button\" (click)=\"onUpload()\">Upload</button>-->\n      <!--</div>-->\n      <div class=\"row\">\n        <div class=\"col s8 offset-1\">\n          <div class=\"card-panel teal lighten-2\">\n            <!--<h4 class=\"center white-text\">Image Preview:</h4>-->\n          </div>\n            <form #imageForm = \"ngForm\" (ngSubmit)=\"onImageSubmit(imageForm.value)\">\n\n              <img [src]='imageUrl'  style=\"width:150px; height:100px;\">\n              <input class=\"form-group\" type=\"file\" #Image accept=\"image/*\"  (change)=\"handleFileInput($event.target.files)\">\n              <!--<button type=\"submit\" [disabled]=\"Image.value ==''\" class=\"btn-large btn-submit\">SUBMIT</button>-->\n\n              <!--<div class=\"row\">-->\n                <!--<label for=\"Caption\">Caption</label>-->\n                <!--<input class=\"form-group\" type=\"text\" #Caption ngModel name=\"Caption\" id=\"Caption\" required placeholder=\"File name\">-->\n              <!--</div>-->\n\n            </form>\n        </div>\n      </div>\n\n\n      <div class=\"col-md-10\">\n        <form>\n          <div class=\"form-group\" >\n            <label for=\"name\">Car name:</label>\n\n            <input type=\"text\" [(ngModel)]='formCarInfo.name' class=\"form-group col-xs-2\" name=\"name\" placeholder=\"Enter car name\" required>\n            <div><label for=\"price\">Price:</label>\n            <input  type=\"text\" class=\"form-group col-xs-1\" [(ngModel)]='formCarInfo.price' name=\"price\" placeholder=\"Price per day\" >\n\n            <label for=\"insurance\">Insurance:</label>\n            <input  type=\"text\" class=\"form-group col-xs-1\" [(ngModel)]='formCarInfo.insurance' name=\"insurance\" placeholder=\"Insurance per day\" >\n            </div><!--style=\"display:inline\"-->\n          </div>\n\n          <div>\n          <label for=\"type\">Car Type</label>\n          <select name = 'type'  [(ngModel)]='formCarInfo.type' class=\"form-group\">\n            <option value=\"Economy\">Economy</option>\n            <option value=\"Compact\">Compact</option>\n            <option value=\"Standard\">Standard</option>\n            <option value=\"SUV\">SUV</option>\n            <option value=\"Luxury\">Luxury</option>\n\n          </select>\n\n          <label for=\"passengerNum\">Seats</label>\n          <select name = 'passengers' [(ngModel)]='formCarInfo.passengers' class=\"form-group\">\n            <option *ngFor=\"let i of [2,3,4,5,6,7]\" value='{{i}}'>{{i}}</option>\n          </select>\n\n          <label for=\"luggage\">Luggage</label>\n          <select name = 'luggage' [(ngModel)]='formCarInfo.luggage' class=\"form-group\">\n            <option *ngFor=\"let i of [1,2,3,4]\" value='{{i}}'>{{i}}</option>\n          </select>\n\n          <label for=\"isAuto\">Auto</label>\n          <select [(ngModel)]='formCarInfo.isAuto' name = 'isAuto' class=\"form-group\">\n            <option value = 'true' [selected]=\"{true:formCarInfo.isAuto == true, false: formCarInfo.isAuto == false}\">YES</option>\n            <option value=\"false\" [selected]=\"{true:formCarInfo.isAuto == true, false: formCarInfo.isAuto == false}\">NO</option>\n          </select>\n\n            <label for=\"ACsup\">A/C</label>\n            <select [(ngModel)]='formCarInfo.ACsup' name = 'ACsup' class=\"form-group\">\n              <option value = 'true' [selected]=\"{true:formCarInfo.ACsup == true, false: formCarInfo.ACsup == false}\">YES</option>\n              <option value=\"false\" [selected]=\"{true:formCarInfo.ACsup == true, false: formCarInfo.ACsup == false}\">NO</option>\n            </select>\n\n          <!--<label for=\"ACsup\">A/C</label>-->\n          <!--<select (change)=\"setACsup($event)\" name = 'ACsup' class=\"form-group\">-->\n            <!--<option *ngFor=\"let i of ['YES', 'NO']\" value=\"{{i}}\" [selected]=\"{true:formCarInfo.ACsup == true && i == 'YES', false:formCarInfo.ACsup == false && i == 'NO'}\">{{i}}</option>-->\n          <!--</select>-->\n\n          </div>\n\n          <!--pickupLoc:String,-->\n          <!--insurance:Number,-->\n          <!--imageName:String,-->\n\n\n          <div class=\"form-group\">\n            <label for=\"pickupLoc\">Location:</label>\n            <input type=\"text\"  [(ngModel)]='formCarInfo.pickupLoc'  class=\"form-control\" name=\"pickupLoc\" placeholder=\"Pick Up Location\" >\n          </div>\n\n\n          <div class='updateconfirm'>\n            <button (click)=\"confirmUpdateCarInfo()\" class=\"btn btn-warning\">SAVE</button>\n            <button (click)='closeDialog()' class=\"btn btn-warning\">CANCEL</button>\n          </div>\n\n        </form>\n      </div>\n    </div>\n  </app-deletedialog>\n\n\n  <app-deletedialog [(visible)]=\"showAddDialog\" >\n    <div>\n      <!--<div><p>Preview:</p>-->\n      <!--{{imageName}}-->\n      <!--<input type=\"file\" (change)=\"onFileSeleted($event)\">-->\n      <!--<button type=\"button\" (click)=\"onUpload()\">Upload</button>-->\n      <!--</div>-->\n      <div class=\"row\">\n        <div class=\"col s8 offset-1\">\n          <div class=\"card-panel teal lighten-2\">\n            <!--<h4 class=\"center white-text\">Image Preview:</h4>-->\n          </div>\n          <form #imageForm = \"ngForm\" (ngSubmit)=\"onImageSubmit(imageForm.value)\">\n\n            <img [src]='imageUrl'  style=\"width:150px; height:100px;\">\n            <input class=\"form-group\" type=\"file\" #Image accept=\"image/*\"  (change)=\"handleFileInput($event.target.files)\">\n            <!--<button type=\"submit\" [disabled]=\"Image.value ==''\" class=\"btn-large btn-submit\">SUBMIT</button>-->\n\n            <!--<div class=\"row\">-->\n            <!--<label for=\"Caption\">Caption</label>-->\n            <!--<input class=\"form-group\" type=\"text\" #Caption ngModel name=\"Caption\" id=\"Caption\" required placeholder=\"File name\">-->\n            <!--</div>-->\n\n          </form>\n        </div>\n      </div>\n\n\n      <div class=\"col-md-10\">\n        <form>\n          <div class=\"form-group\" >\n            <label for=\"name\">Car name:</label>\n\n            <input type=\"text\" [(ngModel)]='formCarInfo.name' class=\"form-group col-xs-2\" name=\"name\" placeholder=\"Enter car name\" required>\n            <label for=\"price\">Price:</label>\n            <input  type=\"text\" class=\"form-group col-xs-1\" [(ngModel)]='formCarInfo.price' name=\"price\" placeholder=\"Price per day\" >\n\n            <label for=\"insurance\">Insurance:</label>\n            <input  type=\"text\" class=\"form-group col-xs-1\" [(ngModel)]='formCarInfo.insurance' name=\"insurance\" placeholder=\"Insurance per day\" >\n            <!--style=\"display:inline\"-->\n          </div>\n\n          <div>\n            <label for=\"type\">Car Type</label>\n            <select name = 'type'  [(ngModel)]='formCarInfo.type' class=\"form-group\">\n              <option value=\"Economy\">Economy</option>\n              <option value=\"Compact\">Compact</option>\n              <option value=\"Standard\">Standard</option>\n              <option value=\"SUV\">SUV</option>\n              <option value=\"Luxury\">Luxury</option>\n\n            </select>\n\n            <label for=\"passengerNum\">Seats</label>\n            <select name = 'passengers' [(ngModel)]='formCarInfo.passengers' class=\"form-group\">\n              <option *ngFor=\"let i of [2,3,4,5,6,7]\" value='{{i}}'>{{i}}</option>\n            </select>\n\n            <label for=\"luggage\">Luggage</label>\n            <select name = 'luggage' [(ngModel)]='formCarInfo.luggage' class=\"form-group\">\n              <option *ngFor=\"let i of [1,2,3,4]\" value='{{i}}'>{{i}}</option>\n            </select>\n\n            <label for=\"isAuto\">Auto</label>\n            <select [(ngModel)]='formCarInfo.isAuto' name = 'isAuto' class=\"form-group\">\n              <option value = 'true' [selected]=\"{true:formCarInfo.isAuto == true, false: formCarInfo.isAuto == false}\">YES</option>\n              <option value=\"false\" [selected]=\"{true:formCarInfo.isAuto == true, false: formCarInfo.isAuto == false}\">NO</option>\n            </select>\n\n            <label for=\"ACsup\">A/C</label>\n            <select [(ngModel)]='formCarInfo.ACsup' name = 'ACsup' class=\"form-group\">\n              <option value = 'true' [selected]=\"{true:formCarInfo.ACsup == true, false: formCarInfo.ACsup == false}\">YES</option>\n              <option value=\"false\" [selected]=\"{true:formCarInfo.ACsup == true, false: formCarInfo.ACsup == false}\">NO</option>\n            </select>\n\n            <!--<label for=\"ACsup\">A/C</label>-->\n            <!--<select (change)=\"setACsup($event)\" name = 'ACsup' class=\"form-group\">-->\n            <!--<option *ngFor=\"let i of ['YES', 'NO']\" value=\"{{i}}\" [selected]=\"{true:formCarInfo.ACsup == true && i == 'YES', false:formCarInfo.ACsup == false && i == 'NO'}\">{{i}}</option>-->\n            <!--</select>-->\n\n          </div>\n\n          <!--pickupLoc:String,-->\n          <!--insurance:Number,-->\n          <!--imageName:String,-->\n\n\n          <div class=\"form-group\">\n            <label for=\"pickupLoc\">Location:</label>\n            <input type=\"text\"  [(ngModel)]='formCarInfo.pickupLoc'  class=\"form-control\" name=\"pickupLoc\" required placeholder=\"Pick Up Location\" >\n          </div>\n\n\n          <div class='addconfirm'>\n            <button (click)=\"clickToAddCar()\" class=\"btn btn-warning\">SAVE</button>\n            <button (click)='closeDialog()' class=\"btn btn-warning\">CANCEL</button>\n          </div>\n\n        </form>\n      </div>\n    </div>\n  </app-deletedialog>\n</div>\n\n"

/***/ }),

/***/ "./src/app/admincontrolpanel/admincontrolpanel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdmincontrolpanelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_product_service__ = __webpack_require__("./src/app/services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__class_car__ = __webpack_require__("./src/app/class/car.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdmincontrolpanelComponent = /** @class */ (function () {
    function AdmincontrolpanelComponent(productService, http) {
        this.productService = productService;
        this.http = http;
        this.getAll = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.showDeleteDialog = false;
        this.showUpdataDialog = false;
        this.showAddDialog = false;
        // imageName:string;
        this.imageUrl = '/assets/car-rental-logo.jpg';
    }
    AdmincontrolpanelComponent.prototype.ngOnInit = function () {
        this.seletedCar = null;
        if (this.seletedCar != null) {
            this.formCarInfo = this.seletedCar;
        }
        else {
            this.initCarForm();
        }
    };
    AdmincontrolpanelComponent.prototype.initCarForm = function () {
        this.formCarInfo = new __WEBPACK_IMPORTED_MODULE_2__class_car__["a" /* Car */]('', 'Standard', 2, 0, 2, true, true, "", 0, '/assets/car-rental-logo.jpg', true);
    };
    AdmincontrolpanelComponent.prototype.confirmDelete = function () {
        this.productService.deleteCarById(this.seletedCar._id).subscribe(function (data) {
            // console.log(data);
            console.log('*********');
            // this.getAllCarList();
        }, function (err) {
            console.log(err);
        });
        this.getAllCarList();
        this.showDeleteDialog = false;
        console.log("confirm delete: " + this.seletedCar._id + this.seletedCar.name);
    };
    AdmincontrolpanelComponent.prototype.getAllCarList = function () {
        this.getAll.emit();
        this.showDeleteDialog = false;
        this.showUpdataDialog = false;
        this.showAddDialog = false;
    };
    AdmincontrolpanelComponent.prototype.closeDialog = function () {
        this.showDeleteDialog = false;
        this.showUpdataDialog = false;
        this.showAddDialog = false;
    };
    AdmincontrolpanelComponent.prototype.addBtnClicked = function () {
        this.initCarForm();
        this.showAddDialog = true;
    };
    AdmincontrolpanelComponent.prototype.editBtnClick = function () {
        this.initCarForm();
        if (this.seletedCar != null) {
            this.showUpdataDialog = true;
            this.formCarInfo = this.seletedCar;
        }
    };
    AdmincontrolpanelComponent.prototype.deleteBtnClick = function () {
        if (this.seletedCar != null) {
            this.showDeleteDialog = !this.showDeleteDialog;
        }
    };
    // onFileSeleted(e) {
    //   this.imageName = e.target.files[0];
    //   alert(this.imageName);
    //
    // }
    //
    // onUpload() {
    //   const fd = new FormData();
    //   fd.append('image', this.imageName);
    //   // this.http.post()
    // }
    AdmincontrolpanelComponent.prototype.handleFileInput = function (file) {
        var _this = this;
        console.log('handlefile');
        this.fileToUpload = file.item(0);
        var reader = new FileReader();
        reader.onload = function (event) {
            _this.imageUrl = event.target.result;
        };
        reader.readAsDataURL(this.fileToUpload);
        this.formCarInfo.imageName = '/assets/uploadedImage/' + this.fileToUpload.name;
        //
        // reader.onload = function(e) {
        //   var url = e.target;
        //   console.log(e.target); //返回图片url
        // };
    };
    AdmincontrolpanelComponent.prototype.onImageSubmit = function () {
        console.log('onImageSubmit');
        // this.http.post('/api/image', sdfs);
        var file = this.fileToUpload;
        // const headers = new HttpHeaders()
        //   .append('Content-Type', 'multipart/form-data');
        var formData = new FormData();
        formData.append('CarImage', file, file.name);
        console.log(formData);
        this.http.post('/api/image/post', formData)
            .subscribe(function (res) {
            console.log("get response after post picture");
            console.log(res);
        }, function (err) {
            console.log("Error occured when post Image");
        });
        // const endpoint = '/api/image/post';
        // const formData: FormData = new FormData();
        // // formData.append('fileKey', file, file.name);
        // formData.set('imageName', this.fileToUpload.name);
        // formData.set('imageData', this.imageUrl);
        //
        //
        //
        // this.http
        //   .post(endpoint, formData ).subscribe(
        //   res => {
        //           console.log("get response after post picture");
        //           console.log(res);
        //         },
        //         err => {
        //           console.log("Error occured when post Image");
        //         }
        // );
        console.log('postCar finish');
    };
    // setACsup($event) {
    //   console.log($event.target.value);
    //   console.log(this.formCarInfo.ACsup);
    //   // if($event.target.value == 'true'){
    //   //   this.formCarInfo.ACsup = true;
    //   //
    //   //   // formCarInfo_ACsup="";
    //   //   console.log('setacsup to true');
    //   // }
    //   // else {
    //   //   this.formCarInfo.ACsup = false;
    //   //   console.log('setacsup to false');
    //   // }
    //   console.log($event.target.value);
    //   console.log(this.formCarInfo.ACsup);
    //
    // }
    // setIsAuto($event) {
    //   console.log($event.target.value);
    //   console.log(this.formCarInfo.isAuto);
    //   if($event.target.value == 'YES'){
    //     this.formCarInfo.isAuto = true;
    //     // formCarInfo_isAuto: any;
    //   }
    //   else{
    //     this.formCarInfo.isAuto = false;
    //   }
    //   console.log($event.target.value);
    //   console.log(this.formCarInfo.isAuto);
    //
    //
    // }
    AdmincontrolpanelComponent.prototype.clickToAddCar = function () {
        this.showAddDialog = false;
        console.log(this.formCarInfo);
        this.productService.createCar(this.formCarInfo).subscribe(function (data) {
            console.log(data);
        }, function (err) {
            console.log(err);
        });
        this.getAllCarList();
    };
    AdmincontrolpanelComponent.prototype.confirmUpdateCarInfo = function () {
        this.showUpdataDialog = false;
        console.log('---updated infor---');
        console.log(this.formCarInfo);
        this.productService.putCar(this.formCarInfo).subscribe(function (data) {
            console.log(data);
        }, function (err) {
            console.log(err);
        });
        this.getAllCarList();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], AdmincontrolpanelComponent.prototype, "getAll", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__class_car__["a" /* Car */])
    ], AdmincontrolpanelComponent.prototype, "seletedCar", void 0);
    AdmincontrolpanelComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-admincontrolpanel',
            template: __webpack_require__("./src/app/admincontrolpanel/admincontrolpanel.component.html"),
            styles: [__webpack_require__("./src/app/admincontrolpanel/admincontrolpanel.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_product_service__["a" /* ProductService */], __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */]])
    ], AdmincontrolpanelComponent);
    return AdmincontrolpanelComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__register_register_component__ = __webpack_require__("./src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__profile_profile_component__ = __webpack_require__("./src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_auth_guard_service__ = __webpack_require__("./src/app/services/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__welcome_welcome_component__ = __webpack_require__("./src/app/welcome/welcome.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__bookings_bookings_component__ = __webpack_require__("./src/app/bookings/bookings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__account_account_component__ = __webpack_require__("./src/app/account/account.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__favoritelist_favoritelist_component__ = __webpack_require__("./src/app/favoritelist/favoritelist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__bookingdetail_bookingdetail_component__ = __webpack_require__("./src/app/bookingdetail/bookingdetail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_admin_service_service__ = __webpack_require__("./src/app/services/admin-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_8__welcome_welcome_component__["a" /* WelcomeComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_13__services_admin_service_service__["a" /* AdminServiceService */]]
    },
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_3__login_login_component__["a" /* LoginComponent */]
    }, {
        path: 'register',
        component: __WEBPACK_IMPORTED_MODULE_5__register_register_component__["a" /* RegisterComponent */]
    }, {
        path: 'profile',
        component: __WEBPACK_IMPORTED_MODULE_6__profile_profile_component__["a" /* ProfileComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_7__services_auth_guard_service__["a" /* AuthGuardService */]],
        children: [
            {
                path: 'bookings',
                component: __WEBPACK_IMPORTED_MODULE_9__bookings_bookings_component__["a" /* BookingsComponent */]
            },
            {
                path: 'account',
                component: __WEBPACK_IMPORTED_MODULE_10__account_account_component__["a" /* AccountComponent */]
            },
            {
                path: 'favoritelist',
                component: __WEBPACK_IMPORTED_MODULE_11__favoritelist_favoritelist_component__["a" /* FavoritelistComponent */]
            }
        ]
    },
    {
        path: 'home',
        component: __WEBPACK_IMPORTED_MODULE_4__home_home_component__["a" /* HomeComponent */]
    },
    {
        path: 'bookingdetail',
        component: __WEBPACK_IMPORTED_MODULE_12__bookingdetail_bookingdetail_component__["a" /* BookingdetailComponent */]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forRoot(routes)
            ],
            declarations: [],
            exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<!--<div class=\"navbar navbar-default\">-->\n  <!--<div class=\"container\">-->\n    <!--<div id=\"navbar-main\">-->\n      <!--<ul class=\"nav navbar-nav\">-->\n        <!--<li><a routerLink=\"/\">Home</a></li>-->\n      <!--</ul>-->\n      <!--<ul class=\"nav navbar-nav navbar-right\">-->\n        <!--<li *ngIf=\"!auth.isLoggedIn()\"><a routerLink=\"/login\">Sign in</a></li>-->\n        <!--<li *ngIf=\"auth.isLoggedIn()\"><a routerLink=\"/profile\">{{ auth.getUserDetails()?.name }}</a></li>-->\n        <!--<li *ngIf=\"auth.isLoggedIn()\"><a (click)=\"auth.logout()\">Logout</a></li>-->\n      <!--</ul>-->\n    <!--</div>-->\n  <!--</div>-->\n<!--</div>-->\n<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__ = __webpack_require__("./src/app/services/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(auth) {
        this.auth = auth;
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material_tabs__ = __webpack_require__("./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__header_header_component__ = __webpack_require__("./src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__footer_footer_component__ = __webpack_require__("./src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__register_register_component__ = __webpack_require__("./src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__profile_profile_component__ = __webpack_require__("./src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_authentication_service__ = __webpack_require__("./src/app/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_auth_guard_service__ = __webpack_require__("./src/app/services/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__search_search_component__ = __webpack_require__("./src/app/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__welcome_welcome_component__ = __webpack_require__("./src/app/welcome/welcome.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__filter_filter_component__ = __webpack_require__("./src/app/filter/filter.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__carlists_carlists_component__ = __webpack_require__("./src/app/carlists/carlists.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__search_welcome_search_welcome_component__ = __webpack_require__("./src/app/search-welcome/search-welcome.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__bookings_bookings_component__ = __webpack_require__("./src/app/bookings/bookings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__account_account_component__ = __webpack_require__("./src/app/account/account.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__services_bookings_service__ = __webpack_require__("./src/app/services/bookings.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__services_account_service__ = __webpack_require__("./src/app/services/account.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__favoritelist_favoritelist_component__ = __webpack_require__("./src/app/favoritelist/favoritelist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__services_product_service__ = __webpack_require__("./src/app/services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pagination_pagination_component__ = __webpack_require__("./src/app/pagination/pagination.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__card_card_component__ = __webpack_require__("./src/app/card/card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__bookingdetail_bookingdetail_component__ = __webpack_require__("./src/app/bookingdetail/bookingdetail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__admincontrolpanel_admincontrolpanel_component__ = __webpack_require__("./src/app/admincontrolpanel/admincontrolpanel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__deletedialog_deletedialog_component__ = __webpack_require__("./src/app/deletedialog/deletedialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33_angular_svg_icon__ = __webpack_require__("./node_modules/angular-svg-icon/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__services_favoritelist_service__ = __webpack_require__("./src/app/services/favoritelist.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__services_data_bus_service__ = __webpack_require__("./src/app/services/data-bus.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__services_admin_service_service__ = __webpack_require__("./src/app/services/admin-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_9__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_10__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_11__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_12__register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_13__profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_17__search_search_component__["a" /* SearchComponent */],
                __WEBPACK_IMPORTED_MODULE_18__welcome_welcome_component__["a" /* WelcomeComponent */],
                __WEBPACK_IMPORTED_MODULE_19__filter_filter_component__["a" /* FilterComponent */],
                __WEBPACK_IMPORTED_MODULE_20__carlists_carlists_component__["a" /* CarlistsComponent */],
                __WEBPACK_IMPORTED_MODULE_21__search_welcome_search_welcome_component__["a" /* SearchWelcomeComponent */],
                __WEBPACK_IMPORTED_MODULE_22__bookings_bookings_component__["a" /* BookingsComponent */],
                __WEBPACK_IMPORTED_MODULE_23__account_account_component__["a" /* AccountComponent */],
                __WEBPACK_IMPORTED_MODULE_26__favoritelist_favoritelist_component__["a" /* FavoritelistComponent */],
                __WEBPACK_IMPORTED_MODULE_28__pagination_pagination_component__["a" /* PaginationComponent */],
                __WEBPACK_IMPORTED_MODULE_29__card_card_component__["a" /* CardComponent */],
                __WEBPACK_IMPORTED_MODULE_30__bookingdetail_bookingdetail_component__["a" /* BookingdetailComponent */],
                __WEBPACK_IMPORTED_MODULE_29__card_card_component__["a" /* CardComponent */],
                __WEBPACK_IMPORTED_MODULE_31__admincontrolpanel_admincontrolpanel_component__["a" /* AdmincontrolpanelComponent */],
                __WEBPACK_IMPORTED_MODULE_32__deletedialog_deletedialog_component__["a" /* DeletedialogComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_8__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_16__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["b" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material_tabs__["a" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_33_angular_svg_icon__["a" /* AngularSvgIconModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_14__services_authentication_service__["a" /* AuthenticationService */],
                __WEBPACK_IMPORTED_MODULE_15__services_auth_guard_service__["a" /* AuthGuardService */],
                __WEBPACK_IMPORTED_MODULE_24__services_bookings_service__["b" /* BookingsService */],
                __WEBPACK_IMPORTED_MODULE_25__services_account_service__["c" /* AccountService */],
                __WEBPACK_IMPORTED_MODULE_27__services_product_service__["a" /* ProductService */],
                __WEBPACK_IMPORTED_MODULE_34__services_favoritelist_service__["a" /* FavoritelistService */],
                __WEBPACK_IMPORTED_MODULE_35__services_data_bus_service__["a" /* DataBusService */],
                __WEBPACK_IMPORTED_MODULE_36__services_admin_service_service__["a" /* AdminServiceService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/bookingdetail/bookingdetail.component.css":
/***/ (function(module, exports) {

module.exports = ".booking_page{\n  padding: 20px 0 0;\n  background-color: #ebebeb;\n\n}\n.left{\n  background-color: #ebebeb;\n}\n.right{\n  background-color: #4CAF50;\n}\n.margin{\n  margin-left: 5%;\n  margin-right: 5%;\n}\n.options{\n  border-collapse:separate;\n  border-spacing:20px 1px;\n  -ms-flex-line-pack: center;\n      align-content: center;\n}\n.white-panel{\n  background-color: #fff;\n  padding: 20px 15px 8px;\n  margin-bottom: 15px;\n  border-bottom: 1px solid #dedede;\n  width: 100%;\n}\n.white-panel-last{\n  background-color: #fff;\n  padding: 20px 15px 8px;\n  /*margin-bottom: 15px;*/\n  border-bottom: 1px solid #dedede;\n  width: 100%;\n}\n.price_detail{\n  display: inline-block;\n  width: 100%;\n}\n.price_total{\n  font-size: 2.25rem;\n  display: block;\n  color: #000;\n  font-family: \"Roboto Condensed\",sans-serif;\n  font-weight: 700;\n  width: 100%;\n  text-align: right;\n\n}\n.pay_now{\n  color: #F66500;\n  font-size: 14px;\n  top: 12px;\n  position: relative;\n  font-weight: 500;\n  float: left;\n}\n.price_detail h3{\n  color: #f37121;\n  font-size: 1.125rem;\n  line-height: 1.375rem;\n}\n.tb{\n  margin-top: 15px;\n  width: 100%;\n  display: table;\n\n}\n.tb .tb_row{\n  display: table-row;\n}\n.tb_cell{\n  display: table-cell;\n}\n.tb_cell.bold{\n  font-weight: 700;\n}\n.tb_row .tb_cell:first-child {\n  text-align: left;\n  width: 80%;\n  font-size: .8125rem;\n  line-height: 1.3125rem;\n}\n.tb_row .tb_cell {\n  text-align: right;\n  padding: 3px 0;\n  width: 20%;\n  font-size: .8125rem;\n  line-height: 1.3125rem;\n}\n.white-panel h3{\n  color: #f37121;\n  font-size: 1.125rem;\n  line-height: 1.375rem;\n}\n.white-panel-last h3{\n  color: #f37121;\n  font-size: 1.125rem;\n  line-height: 1.375rem;\n}\n.form-row .second{\n  margin-left: 20px;\n}\n.form-group label{\n  font-size: .8125rem;\n  line-height: 1.3125rem;\n}\n.credit_card{\n  margin-top: 15px;\n  margin-bottom: 15px;\n  list-style: none;\n}\n.credit_term{\n  font-size: .8125rem;\n  line-height: 1.3125rem;\n}\n.credit_card li{\n  margin-right: 12px;\n  float: left;\n  width: 50px;\n}\n.credit_card img{\n  display: inline-block;\n  vertical-align: middle;\n  max-width: 100%;\n  height: auto;\n}\n#Person{\n  height:20%;\n  width: 10%;\n  margin: 0px;\n  padding-right:0px;\n  text-align:center;\n}\n#luggage{\n  margin: 0px;\n  padding:0px;\n  text-align:center;\n}\n#Auto{\n  margin: 0px;\n  padding:0px;\n  text-align:center;\n}\n#AC{\n  margin: 0px;\n  padding:0px;\n  text-align:center;\n}\n.feature {\n  font-size: .8125rem;\n  line-height: 1.3125rem;\n  list-style: none;\n  width: 100%;\n}\n.spec{\n  color: #fff;\n}\n.points{\n  list-style: disc;\n  padding-left: 20px;\n  font-size: .8125rem;\n  line-height: 1.3125rem;\n}\nul  {\n  margin:0px;\n  padding:0px;\n\n}\n.Important-info{\n  list-style: disc;\n  font-size: .8125rem;\n  line-height: 1.3125rem\n}\n#img {\n  height: 60%;\n  width: 60%;\n}\n#location{\n  list-style: disc;\n  padding-left: 20px;\n  font-size: .8125rem;\n  line-height: 1.3125rem;\n}\n#backtoResults{\n  cursor: pointer;\n}\n.agree{\n  font-size: .8125rem;\n  line-height: 1.3125rem;\n}\n#terms, #privacy{\n  color: #f37121;\n}\n.orange{\n  background-color: #f37121;\n  color: #fff;\n}\n.new_form{\n  color: #666;\n  text-align: left;\n  margin-bottom: 100px;\n}\n.new_list{\n  list-style: none;\n}\n.new_item{\n  background: #f4f4f4;\n  /*margin-bottom: 1px;*/\n  /*!*padding: 5px 5px 5px 5px;*!*/\n}\n.new_label{\n  width: 60%;\n  float: left;\n  margin-left: 10px;\n  font-size: .8125rem;\n  line-height: 1.3125rem;\n  display: inline;\n}\n.new_blank{\n  width: 60%;\n  display: inline;\n}\n.new_price{\n\n  width: 20%;\n  float: left;\n  margin-left: 10px;\n  font-size: .8125rem;\n  line-height: 1.3125rem;\n  display: inline;\n}\n.new_check{\n  display: inline-block;\n  vertical-align: middle;\n  float: right;\n  width: 10%;\n}\n"

/***/ }),

/***/ "./src/app/bookingdetail/bookingdetail.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"booking_page\">\n<div class=\"container\">\n  <h4 class=\"margin\" style=\"margin-bottom: 20px\">Reserve your car now</h4>\n  <div class=\"row margin\">\n    <div class=\"col-md-4 left\">\n      <div class=\"row\">\n        <div class=\"white-panel\" id = \"backtoResults\">\n          <div class=\"Car_detail\">\n            <h3>Back to results </h3>\n          </div>\n\n        </div>\n        <div class=\"white-panel\">\n          <div class=\"Car_detail\">\n            <h2>{{car.name }}</h2>\n            <div class=\"row\" >\n              <img src={{car.imageName}} id= \"img\" >\n            </div>\n            <div class=\"row\" id = \"feature\">\n              <table class = \"options\">\n                <tr>\n                  <th><svg-icon src = \"../assets/icons/Person.svg\"></svg-icon></th>\n                  <th><svg-icon src = \"../assets/icons/luggage.svg\"></svg-icon></th>\n                  <th><svg-icon src = \"../assets/icons/AC.svg\"></svg-icon></th>\n                  <th><svg-icon src = \"../assets/icons/Auto.svg\"></svg-icon></th>\n                </tr>\n                <tr>\n                  <td>{{car.passengers}}</td>\n                  <td>{{car.luggage}}</td>\n                  <td>{{car.ACsup}}</td>\n                  <td>{{car.isAuto}}</td>\n                </tr>\n              </table>\n            </div>\n              <table class = \"feature\">\n                <th>Features:</th>\n                <tr><img src = \"../assets/icons/check.png\" style =\"width:20px; height :20px;\" >{{car.type}}</tr>\n                <tr><img src = \"../assets/icons/check.png\" style =\"width:20px; height :20px;\" >Free cancellation</tr>\n                <tr><img src = \"../assets/icons/check.png\" style =\"width:20px; height :20px;\" >Unlimited mileage</tr>\n              </table>\n            </div>\n        </div>\n        <div class=\"white-panel\" id = \"location\">\n          <h6>CAR RENTAL LOCATION</h6>\n          <p>PROCEED TO THE COUNTER IN THE BAGGAGE CLAIM AREA. COURTESY BUS SERVICE IS AVAILABLE IN THE LOWER/MAIN ENTRANCE AREA.</p>\n          <p><b>Pick-Up</b> {{searchInfo[2]}}, {{searchInfo[3]}}\n          </p>\n          <div>\n            <!-- DALLAS LOVE FIELD - Dallas Love Field\n            Shuttle to Car -->\n            <b>{{searchInfo[0]}}</b>\n          </div>\n          <p><b>Drop-Off</b> {{searchInfo[4]}}, {{searchInfo[5]}} </p>\n            <div>\n            <b>{{searchInfo[1]}}</b>\n            </div>\n\n\n        </div>\n        <div class=\"white-panel-last\">\n          <div class=\"Important-info\">\n            <h6>IMPORTANT INFORMATION</h6>\n            <p>Budget rental policies</p>\n            <p>You may cancel this reservation at any time without penalty.</p>\n            <p>If you are a local renter or do not have proof of a return flight, please review the Car Rental Company Rules and Restrictions below for restrictions on mileage and written proof of insurance.</p>\n            <p>Car Rental Company Rules & Restrictions(e.g., insurance, driver age, mileage and geographic restrictions, shuttle info and additional charges)</p>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-8\">\n      <div class=\"row\">\n        <div class=\"white-panel\">\n          <div class=\"price_detail\">\n            <h3>Total amount of your booking</h3>\n            <div class=\"price_total\">\n              <span class=\"pay_now\">Pay Now Special</span>\n              ${{price.total | number:'1.2-2'}}\n              <!--<sup>81</sup>-->\n            </div>\n            <div class=\"new_form\">\n              <h3>Recommended Options</h3>\n              <ul class=\"new_list\">\n                <li class=\"new_item\">\n                  <div></div>\n                  <div class=\"new_label\">Basic Insurance</div>\n                  <div class=\"new_price\">${{car.insurance | number:'1.2-2'}}/day</div>\n                  <div class=\"new_check\">\n                    <input type=\"checkbox\" class=\"form-check-input\" (change)=\"onchange($event)\" [value]=\"car.insurance\">\n                  </div>\n                </li>\n                <li class=\"new_item\">\n                  <div></div>\n                  <div class=\"new_label\">Personal Accident Protection</div>\n                  <div class=\"new_price\">${{price.pap | number:'1.2-2'}}/day</div>\n                  <div class=\"new_check\">\n                    <input type=\"checkbox\" class=\"form-check-input\" (change)=\"onchange($event)\" [value]=\"price.pap\">\n                  </div>\n                </li>\n                <li class=\"new_item\">\n                  <div></div>\n                  <div class=\"new_label\">Supplemental Liability Insurance</div>\n                  <div class=\"new_price\">${{price.sli | number:'1.2-2'}}/day</div>\n                  <div class=\"new_check\">\n                    <input type=\"checkbox\" class=\"form-check-input\" (change)=\"onchange($event)\" [value]=\"price.sli\">\n                  </div>\n                </li>\n                <li class=\"new_item\">\n                  <div></div>\n                  <div class=\"new_label\">\n                    Extended Roadside Protection</div>\n                  <div class=\"new_price\">${{price.erp | number:'1.2-2'}}/day</div>\n                  <div class=\"new_check\">\n                    <input type=\"checkbox\" class=\"form-check-input\" (change)=\"onchange($event)\" [value]=\"price.erp\">\n                  </div>\n                </li>\n              </ul>\n            </div>\n            <div class=\"tb\">\n              <div class=\"tb_row\">\n                <div class=\"tb_cell bold\">{{price.day}} days @ ${{car.price | number:'1.2-2'}}/day</div>\n                <div class=\"tb_cell bold\">${{price.day * car.price | number:'1.2-2'}}</div>\n              </div>\n              <div class=\"tb_row\">\n                <div class=\"tb_cell bold\">Estimated Taxes & Fees</div>\n                <div class=\"tb_cell bold\">${{price.tax | number:'1.2-2'}}</div>\n              </div>\n              <div class=\"tb_row\">\n                <div class=\"tb_cell bold\">Total amount of your booking\t</div>\n                <div class=\"tb_cell bold\">${{price.total | number:'1.2-2'}}</div>\n              </div>\n            </div>\n\n          </div>\n        </div>\n        <div class=\"white-panel\">\n          <h3>Driver Information</h3>\n          <form ngForm>\n            <div class=\"form-row\">\n              <div class=\"form-group col-md-4\">\n                <label>First Name:</label>\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"driverinfo.firstname\" name=\"first\">\n              </div>\n              <div class=\"form-group col-md-4 second\">\n                <label>Last Name:</label>\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"driverinfo.lastname\" name=\"last\">\n              </div>\n            </div>\n            <div class=\"form-row\">\n              <div class=\"form-group col-md-4\">\n                <label>Email Address:</label>\n                <input type=\"email\" class=\"form-control\"  [(ngModel)]=\"driverinfo.email\" name=\"email\">\n              </div>\n              <div class=\"form-group col-md-4 second\">\n                <label>Phone:</label>\n                <input type=\"text\" class=\"form-control\"  [(ngModel)]=\"driverinfo.phone\" name=\"phone\">\n              </div>\n            </div>\n          </form>\n        </div>\n        <div class=\"white-panel\">\n          <h3>Payment Information</h3>\n          <p class=\"credit_term\">A valid credit card is necessary to complete the booking. We accept:</p>\n          <ul class=\"credit_card\">\n            <li><img src=\"../../assets/credit_cards/visa.png\"></li>\n            <li><img src=\"../../assets/credit_cards/master.png\"></li>\n            <li><img src=\"../../assets/credit_cards/american_express.png\"></li>\n            <li><img src=\"../../assets/credit_cards/discover.png\"></li>\n          </ul><br><br>\n          <form>\n            <div class=\"form-row\">\n              <div class=\"form-group col-md-4\">\n                <label>Credit Card Number:</label>\n                <input type=\"text\" class=\"form-control\">\n              </div>\n              <div class=\"form-group col-md-2 second\">\n                <label>CVC Code:</label>\n                <input type=\"text\" class=\"form-control\">\n              </div>\n            </div>\n          <div class=\"form-row\">\n            <div class=\"form-group col-md-3\">\n              <label>Expiration Date:</label>\n              <select class=\"form-control\"><option value=\"\">Month</option>\n                <option value=\"01\">01</option>\n                <option value=\"02\">02</option>\n                <option value=\"03\">03</option>\n                <option value=\"04\">04</option>\n                <option value=\"05\">05</option>\n                <option value=\"06\">06</option>\n                <option value=\"07\">07</option>\n                <option value=\"08\">08</option>\n                <option value=\"09\">09</option>\n                <option value=\"10\">10</option>\n                <option value=\"11\">11</option>\n                <option value=\"12\">12</option>\n              </select>\n            </div>\n            <div class=\"form-group col-md-3 second\">\n              <label class=\"spec\">E</label>\n              <select class=\"form-control\"><option value=\"\">Year</option>\n                <option value=\"2018\">2018</option>\n                <option value=\"2019\">2019</option>\n                <option value=\"2020\">2020</option>\n                <option value=\"2021\">2021</option>\n                <option value=\"2022\">2022</option>\n                <option value=\"2023\">2023</option>\n                <option value=\"2024\">2024</option>\n                <option value=\"2025\">2025</option>\n                <option value=\"2026\">2026</option>\n                <option value=\"2027\">2027</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"form-row\">\n            <div class=\"col-md-4 form-group\">\n              <label>First Name</label>\n              <input class=\"form-control\" type=\"text\">\n            </div>\n            <div class=\"col-md-4 form-group second\">\n              <label>Last Name</label>\n              <input class=\"form-control\" type=\"text\">\n            </div>\n          </div>\n            <div class=\"form-row\">\n              <div class=\"col-md-4 form-group\">\n                <label>Billing Address</label>\n                <input class=\"form-control\" type=\"text\">\n              </div>\n              <div class=\"col-md-4 form-group second\">\n                <label>Billing Address2</label>\n                <input class=\"form-control\" type=\"text\">\n              </div>\n            </div>\n            <div class=\"form-row\">\n              <div class=\"col-md-4 form-group\">\n                <label>City</label>\n                <input class=\"form-control\" type=\"text\">\n              </div>\n              <div class=\"col-md-4 form-group second\">\n                <label>Zip/Postal Code</label>\n                <input class=\"form-control\" type=\"text\">\n              </div>\n            </div>\n            <div class=\"form-row\">\n              <div class=\"col-md-4 form-group\">\n                <label>Country</label>\n                <select class=\"form-control\"><!----><option value=\"182\">Albania</option>\n                  <option value=\"201\">Algeria</option>\n                  <option value=\"253\">American Samoa</option>\n                  <option value=\"70\">Andorra</option>\n                  <option value=\"252\">Angola</option>\n                  <option value=\"251\">Anguilla</option>\n                  <option value=\"190\">Antigua And Barbuda</option>\n                  <option value=\"72\">Argentina</option>\n                  <option value=\"80\">Armenia</option>\n                  <option value=\"35\">Aruba</option>\n                  <option value=\"33\">Australia</option>\n                  <option value=\"54\">Austria</option>\n                  <option value=\"250\">Azerbaijan</option>\n                  <option value=\"105\">Bahamas</option>\n                  <option value=\"170\">Bahrain</option>\n                  <option value=\"185\">Barbades</option>\n                  <option value=\"249\">Belarus</option>\n                  <option value=\"16\">Belgium</option>\n                  <option value=\"53\">Belize</option>\n                  <option value=\"248\">Benin</option>\n                  <option value=\"168\">Bolivia</option>\n                  <option value=\"259\">Bonaire</option>\n                  <option value=\"160\">Bosnia And Herzegovina</option>\n                  <option value=\"247\">Botswana</option>\n                  <option value=\"68\">Brazil</option>\n                  <option value=\"254\">British Virgin Island</option>\n                  <option value=\"161\">Brunei Darussalam</option>\n                  <option value=\"57\">Bulgaria</option>\n                  <option value=\"246\">Burkina Faso</option>\n                  <option value=\"245\">Cambodia</option>\n                  <option value=\"244\">Cameroon</option>\n                  <option value=\"9\">Canada</option>\n                  <option value=\"187\">Cape Verde</option>\n                  <option value=\"192\">Cayman Islands</option>\n                  <option value=\"243\">Central African Republic</option>\n                  <option value=\"46\">Chile</option>\n                  <option value=\"158\">China</option>\n                  <option value=\"241\">Christmas Island</option>\n                  <option value=\"186\">Colombia</option>\n                  <option value=\"240\">Congo</option>\n                  <option value=\"239\">Congo</option>\n                  <option value=\"238\">Cook Islands</option>\n                  <option value=\"36\">Costa Rica</option>\n                  <option value=\"47\">Croatia</option>\n                  <option value=\"42\">Cuba</option>\n                  <option value=\"94\">Curacao</option>\n                  <option value=\"50\">Cyprus</option>\n                  <option value=\"61\">Czech Republic</option>\n                  <option value=\"37\">Denmark</option>\n                  <option value=\"78\">Dominica</option>\n                  <option value=\"41\">Dominican Republic</option>\n                  <option value=\"75\">Ecuador</option>\n                  <option value=\"74\">Egypt</option>\n                  <option value=\"117\">El Salvador</option>\n                  <option value=\"236\">Equatorial Guinea</option>\n                  <option value=\"73\">Estonia</option>\n                  <option value=\"235\">Faroe Islands</option>\n                  <option value=\"203\">Federated States Of Micronesia</option>\n                  <option value=\"234\">Fiji</option>\n                  <option value=\"38\">Finland</option>\n                  <option value=\"1\">France</option>\n                  <option value=\"58\">French Guiana</option>\n                  <option value=\"92\">French Polynesia</option>\n                  <option value=\"233\">Gabon</option>\n                  <option value=\"232\">Gambia</option>\n                  <option value=\"231\">Georgia</option>\n                  <option value=\"2\">Germany</option>\n                  <option value=\"230\">Ghana</option>\n                  <option value=\"205\">Gibraltar</option>\n                  <option value=\"11\">Greece</option>\n                  <option value=\"199\">Greenland</option>\n                  <option value=\"229\">Grenada</option>\n                  <option value=\"4\">Guadeloupe</option>\n                  <option value=\"255\">Guam</option>\n                  <option value=\"52\">Guatemala</option>\n                  <option value=\"155\">Guernsey</option>\n                  <option value=\"228\">Guinea</option>\n                  <option value=\"227\">Haiti</option>\n                  <option value=\"116\">Honduras</option>\n                  <option value=\"226\">Hong_kong</option>\n                  <option value=\"59\">Hungary</option>\n                  <option value=\"24\">Iceland</option>\n                  <option value=\"164\">India</option>\n                  <option value=\"137\">Indonesia</option>\n                  <option value=\"21\">Ireland</option>\n                  <option value=\"49\">Israel</option>\n                  <option value=\"10\">Italy</option>\n                  <option value=\"237\">Ivory Coast</option>\n                  <option value=\"118\">Jamaica</option>\n                  <option value=\"204\">Japan</option>\n                  <option value=\"154\">Jersey</option>\n                  <option value=\"93\">Jordan</option>\n                  <option value=\"66\">Kenya</option>\n                  <option value=\"219\">Korea Democratic People's Republic Of</option>\n                  <option value=\"159\">Korea Republic Of</option>\n                  <option value=\"149\">Kosovo</option>\n                  <option value=\"172\">Kuwait</option>\n                  <option value=\"86\">Latvia</option>\n                  <option value=\"258\">Lebanon</option>\n                  <option value=\"225\">Lesotho</option>\n                  <option value=\"60\">Libyan Arab Jamahiriya</option>\n                  <option value=\"261\">Liechtenstein</option>\n                  <option value=\"63\">Lithuania</option>\n                  <option value=\"7\">Luxembourg</option>\n                  <option value=\"162\">Macao</option>\n                  <option value=\"88\">Macedonia</option>\n                  <option value=\"81\">Madagascar</option>\n                  <option value=\"224\">Malawi</option>\n                  <option value=\"143\">Malaysia</option>\n                  <option value=\"223\">Mali</option>\n                  <option value=\"17\">Malta</option>\n                  <option value=\"5\">Martinique</option>\n                  <option value=\"44\">Mauritius</option>\n                  <option value=\"181\">Mayotte</option>\n                  <option value=\"18\">Mexico</option>\n                  <option value=\"200\">Monaco</option>\n                  <option value=\"198\">Mongolia</option>\n                  <option value=\"173\">Montenegro</option>\n                  <option value=\"43\">Morocco</option>\n                  <option value=\"91\">Mozambique</option>\n                  <option value=\"48\">Namibia</option>\n                  <option value=\"222\">Nauru</option>\n                  <option value=\"64\">Netherlands</option>\n                  <option value=\"8\">New Caledonia</option>\n                  <option value=\"32\">New Zealand</option>\n                  <option value=\"82\">Nicaragua</option>\n                  <option value=\"221\">Nigeria</option>\n                  <option value=\"220\">Niue</option>\n                  <option value=\"257\">Northern Mariana Islands</option>\n                  <option value=\"39\">Norway</option>\n                  <option value=\"104\">Oman</option>\n                  <option value=\"146\">Pakistan</option>\n                  <option value=\"202\">Palau</option>\n                  <option value=\"183\">Panama</option>\n                  <option value=\"218\">Papua New Guinea</option>\n                  <option value=\"174\">Paraguay</option>\n                  <option value=\"76\">Peru</option>\n                  <option value=\"166\">Philippines</option>\n                  <option value=\"26\">Poland</option>\n                  <option value=\"19\">Portugal</option>\n                  <option value=\"193\">Puerto Rico</option>\n                  <option value=\"171\">Qatar</option>\n                  <option value=\"101\">Republic Of Moldova</option>\n                  <option value=\"6\">Reunion</option>\n                  <option value=\"55\">Romania</option>\n                  <option value=\"184\">Russian Federation</option>\n                  <option value=\"34\">Saint Barthelemy</option>\n                  <option value=\"217\">Saint Kitts And Nevis</option>\n                  <option value=\"77\">Saint Lucia</option>\n                  <option value=\"191\">Saint Martin</option>\n                  <option value=\"108\">Saint Vincent And The Grenadines</option>\n                  <option value=\"216\">Samoa</option>\n                  <option value=\"215\">Sao Tome And Principe</option>\n                  <option value=\"214\">Saudi Arabia</option>\n                  <option value=\"65\">Senegal</option>\n                  <option value=\"150\">Serbia</option>\n                  <option value=\"87\">Seychelles</option>\n                  <option value=\"165\">Singapore</option>\n                  <option value=\"260\">Sint Maarten</option>\n                  <option value=\"79\">Slovakia</option>\n                  <option value=\"69\">Slovenia</option>\n                  <option value=\"213\">Solomon Islands</option>\n                  <option value=\"30\">South Africa</option>\n                  <option value=\"12\">Spain</option>\n                  <option value=\"96\">Sri Lanka</option>\n                  <option value=\"197\">Sudan</option>\n                  <option value=\"169\">Suriname</option>\n                  <option value=\"212\">Swaziland</option>\n                  <option value=\"40\">Sweden</option>\n                  <option value=\"23\">Switzerland</option>\n                  <option value=\"99\">Syrian Arab Republic</option>\n                  <option value=\"211\">Taiwan</option>\n                  <option value=\"83\">Tanzania United Republic Of</option>\n                  <option value=\"242\">Tchad</option>\n                  <option value=\"67\">Thailand</option>\n                  <option value=\"210\">Togo</option>\n                  <option value=\"194\">Tokelau</option>\n                  <option value=\"209\">Tonga</option>\n                  <option value=\"195\">Trinidad And Tobago</option>\n                  <option value=\"20\">Tunisia</option>\n                  <option value=\"62\">Turkey</option>\n                  <option value=\"196\">Turks And Caicos Islands</option>\n                  <option value=\"256\">US Virgin Island</option>\n                  <option value=\"188\">Uganda</option>\n                  <option value=\"89\">Ukraine</option>\n                  <option value=\"100\">United Arab Emirats</option>\n                  <option value=\"13\">United Kingdom</option>\n                  <option value=\"3\">United States</option>\n                  <option value=\"119\">Uruguay</option>\n                  <option value=\"208\">Vanuatu</option>\n                  <option value=\"156\">Venezuela</option>\n                  <option value=\"207\">Vietnam</option>\n                  <option value=\"98\">Yemen</option>\n                  <option value=\"206\">Zambia</option>\n                  <option value=\"71\">Zimbabwe</option>\n                </select>\n              </div>\n              <div class=\"col-md-4 form-group second\">\n                <label>State</label>\n                <select class=\"form-control\"><option value=\"\">Please Choose State</option>\n                  <option value=\"AL\">Alabama (AL)</option>\n                  <option value=\"AK\">Alaska (AK)</option>\n                  <option value=\"AZ\">Arizona (AZ)</option>\n                  <option value=\"AR\">Arkansas (AR)</option>\n                  <option value=\"AA\">Armed Forces Americas (AA)</option>\n                  <option value=\"AE\">Armed Forces Europe/Middle East/Canada (AE)</option>\n                  <option value=\"AP\">Armed Forces Pacific (AP)</option>\n                  <option value=\"CA\">California (CA)</option>\n                  <option value=\"CO\">Colorado (CO)</option>\n                  <option value=\"CT\">Connecticut (CT)</option>\n                  <option value=\"DE\">Delaware (DE)</option>\n                  <option value=\"DC\">District of Columbia (DC)</option>\n                  <option value=\"FL\">Florida (FL)</option>\n                  <option value=\"GA\">Georgia (GA)</option>\n                  <option value=\"HI\">Hawaii (HI)</option>\n                  <option value=\"ID\">Idaho (ID)</option>\n                  <option value=\"IL\">Illinois (IL)</option>\n                  <option value=\"IN\">Indiana (IN)</option>\n                  <option value=\"IA\">Iowa (IA)</option>\n                  <option value=\"KS\">Kansas (KS)</option>\n                  <option value=\"KY\">Kentucky (KY)</option>\n                  <option value=\"LA\">Louisiana (LA)</option>\n                  <option value=\"ME\">Maine (ME)</option>\n                  <option value=\"MD\">Maryland (MD)</option>\n                  <option value=\"MA\">Massachusetts (MA)</option>\n                  <option value=\"MI\">Michigan (MI)</option>\n                  <option value=\"MN\">Minnesota (MN)</option>\n                  <option value=\"MS\">Mississippi (MS)</option>\n                  <option value=\"MO\">Missouri (MO)</option>\n                  <option value=\"MT\">Montana (MT)</option>\n                  <option value=\"NE\">Nebraska (NE)</option>\n                  <option value=\"NV\">Nevada (NV)</option>\n                  <option value=\"NH\">New Hampshire (NH)</option>\n                  <option value=\"NJ\">New Jersey (NJ)</option>\n                  <option value=\"NM\">New Mexico (NM)</option>\n                  <option value=\"NY\">New York (NY)</option>\n                  <option value=\"NC\">North Carolina (NC)</option>\n                  <option value=\"ND\">North Dakota (ND)</option>\n                  <option value=\"OH\">Ohio (OH)</option>\n                  <option value=\"OK\">Oklahoma (OK)</option>\n                  <option value=\"OR\">Oregon (OR)</option>\n                  <option value=\"PA\">Pennsylvania (PA)</option>\n                  <option value=\"RI\">Rhode Island (RI)</option>\n                  <option value=\"SC\">South Carolina (SC)</option>\n                  <option value=\"SD\">South Dakota (SD)</option>\n                  <option value=\"TN\">Tennessee (TN)</option>\n                  <option value=\"TX\">Texas (TX)</option>\n                  <option value=\"UT\">Utah (UT)</option>\n                  <option value=\"VT\">Vermont (VT)</option>\n                  <option value=\"VA\">Virginia (VA)</option>\n                  <option value=\"WA\">Washington (WA)</option>\n                  <option value=\"WV\">West Virginia (WV)</option>\n                  <option value=\"WI\">Wisconsin (WI)</option>\n                  <option value=\"WY\">Wyoming (WY)</option>\n                </select>\n              </div>\n            </div>\n          </form>\n        </div>\n        <div class=\"white-panel-last\">\n          <h3>Complete Your Reservation</h3>\n          <ul class=\"points\">\n            <li>The name on the credit card used to make the reservation must match the driver's name.</li>\n            <li>The same credit card must be presented at the counter upon pick-up.</li>\n            <li>Your card will be charged for the total cost of this reservation {{price.total | number:'1.2-2'}} (USD) when you reserve your car.</li>\n            <!----><!---->                    <li>This pre-paid reservation cannot be changed or refunded.</li>\n            <!----><!----><!----><!----></ul>\n          <hr>\n          <p class=\"agree\">By clicking Reserve Now, I acknowledge that I have read and accept the <span id=\"terms\">Terms of Use</span> and <span id=\"privacy\">Privacy Policy</span>. I also may receive emails about special offers available on CarRentals.com.</p>\n          <button class=\"btn orange\" (click)=\"onclick()\">RESERVE NOW</button>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>\n</div>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/bookingdetail/bookingdetail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookingdetailComponent; });
/* unused harmony export pricedetail */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_bookings_service__ = __webpack_require__("./src/app/services/bookings.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_data_bus_service__ = __webpack_require__("./src/app/services/data-bus.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_authentication_service__ = __webpack_require__("./src/app/services/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BookingdetailComponent = /** @class */ (function () {
    function BookingdetailComponent(bookingservice, router, dataBus, auth) {
        var _this = this;
        this.bookingservice = bookingservice;
        this.router = router;
        this.dataBus = dataBus;
        this.auth = auth;
        this.driverinfo = {
            firstname: '',
            lastname: '',
            email: '',
            phone: ''
        };
        //pricepayload:pricedetail = new pricedetail(3,26.99,5.49,8.96,6.99,48.09,64.28, 591.32);
        this.booking = new __WEBPACK_IMPORTED_MODULE_1__services_bookings_service__["a" /* Booking */]('2018-01-01', '2018-01-02', 'DFW', 'DFW', 0, '1', 'a@a.com', this.driverinfo);
        this.car = this.dataBus.getCarInfo();
        this.price = new pricedetail(3, 26.99, 5.49, 8.96, 6.99, 48.09, 64.28, 0);
        this.price.base = this.car.price;
        this.price.total = this.price.base * this.price.day + this.price.tax;
        this.searchInfo = this.dataBus.getSearchCondi();
        console.log(this.searchInfo);
        this.dataBus.carValueUpdate.subscribe(function (val) {
            _this.car = _this.dataBus.getCarInfo();
            _this.price.base = _this.car.price;
            // console.log(this.price.base);
            // this.price.day = 3;
            // this.price.sli = 20;
            // this.price.erp =9.99;
            // this.price.loss =8.88;
            // this.price.tax =48.25;
            console.log(_this.price.total);
            console.log('---init--get--car');
            console.log(_this.car);
        }, function (err) {
            console.log(err);
        });
    }
    BookingdetailComponent.prototype.ngOnInit = function () {
        //this.price.total = (this.price.base + this.price.tax) * this.price.day;
        var _this = this;
        this.dataBus.carSearchCondiUpdate.subscribe(function (val) {
            _this.searchInfo = _this.dataBus.getSearchCondi();
            console.log('---init--get--search Info');
            console.log(_this.searchInfo);
        });
    };
    //   ngAfterContentChecked(){
    //     this.car = this.dataBus.getCarInfo();
    //     console.log('---ngAfterContentChecked');
    //     console.log(this.car);
    //
    // }
    BookingdetailComponent.prototype.onchange = function (event) {
        if (event.target.checked) {
            this.price.total += event.target.value * this.price.day;
        }
        else {
            this.price.total -= event.target.value * this.price.day;
        }
    };
    BookingdetailComponent.prototype.onclick = function () {
        var _this = this;
        this.booking.driverinfo = this.driverinfo;
        this.booking.carid = this.car._id;
        this.booking.pickuploc = this.car.pickupLoc;
        this.booking.dropoffloc = this.searchInfo[1];
        this.booking.pickupdate = this.searchInfo[2] + ' ' + this.searchInfo[3];
        this.booking.dropoffdate = this.searchInfo[4] + ' ' + this.searchInfo[5];
        if (this.auth.isLoggedIn()) {
            this.booking.email = this.auth.getUserDetails().email;
        }
        this.booking.price = this.price.total;
        console.log(this.booking);
        this.bookingservice.createBooking(this.booking).subscribe(function (data) {
            console.log(data);
            _this.router.navigateByUrl('/home');
        }, function (err) {
            console.log(err);
        });
    };
    BookingdetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-bookingdetail',
            template: __webpack_require__("./src/app/bookingdetail/bookingdetail.component.html"),
            styles: [__webpack_require__("./src/app/bookingdetail/bookingdetail.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_bookings_service__["b" /* BookingsService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_3__services_data_bus_service__["a" /* DataBusService */], __WEBPACK_IMPORTED_MODULE_4__services_authentication_service__["a" /* AuthenticationService */]])
    ], BookingdetailComponent);
    return BookingdetailComponent;
}());

var pricedetail = /** @class */ (function () {
    function pricedetail(day, loss, pap, sli, erp, tax, base, total) {
        this.day = day;
        this.loss = loss;
        this.pap = pap;
        this.sli = sli;
        this.erp = erp;
        this.tax = tax;
        this.base = base;
        this.total = total;
    }
    return pricedetail;
}());



/***/ }),

/***/ "./src/app/bookings/bookings.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/bookings/bookings.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<ul class=\"nav nav-tabs\">-->\n\n  <!--<li class=\"nav-item\">-->\n    <!--<a class=\"nav-link\" routerLink=\"/profile/bookings/upcbookings\">Upcoming Bookings</a>-->\n  <!--</li>-->\n\n  <!--<li class=\"nav-item\">-->\n    <!--<a class=\"nav-link\" routerLink=\"/profile/bookings/pastbookings\">Past Bookings</a>-->\n  <!--</li>-->\n\n  <!--<li class=\"nav-item\">-->\n    <!--<a class=\"nav-link\" routerLink=\"/profile/bookings/cncldbookings\">Cancelled Bookings</a>-->\n  <!--</li>-->\n\n<!--</ul>-->\n<!--<router-outlet></router-outlet>-->\n<div class=\"container\">\n  <table class=\"table table-hover\">\n    <thead>\n    <tr>\n      <th>Pickup Location</th>\n      <th>Dropoff Location</th>\n      <th>Pickup Date</th>\n      <th>Dropoff Date</th>\n      <th>Price</th>\n      <th>Driver Email</th>\n      <th>Car</th>\n    </tr>\n    </thead>\n    <tbody *ngFor=\"let array of singlearray\">\n      <td>{{array.booking.pickuploc}}</td>\n      <td>{{array.booking.dropoffloc}}</td>\n      <td>{{array.booking.pickupdate}}</td>\n      <td>{{array.booking.dropoffdate}}</td>\n      <td>{{array.booking.price | number:'1.2-2'}}</td>\n      <td>{{array.booking.driverinfo.email}}</td>\n      <td>{{array.car.name}}</td>\n    </tbody>\n  </table>\n</div>\n"

/***/ }),

/***/ "./src/app/bookings/bookings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_bookings_service__ = __webpack_require__("./src/app/services/bookings.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_product_service__ = __webpack_require__("./src/app/services/product.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BookingsComponent = /** @class */ (function () {
    function BookingsComponent(BookingService, routerIonfo, prdservice) {
        this.BookingService = BookingService;
        this.routerIonfo = routerIonfo;
        this.prdservice = prdservice;
        this.bookings = [];
        this.cars = [];
        this.singlearray = [];
        this.email = this.routerIonfo.snapshot.queryParams["email"];
    }
    BookingsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.BookingService.getBookingsByEmail(this.email).subscribe(function (data) {
            _this.bookings = data;
            var _loop_1 = function (booking) {
                _this.prdservice.searchCarId(booking.carid).subscribe(function (car) {
                    console.log(car);
                    _this.singlearray.push({
                        booking: booking,
                        car: car
                    });
                }, function (err) {
                    console.log(err);
                });
            };
            for (var _i = 0, _a = _this.bookings; _i < _a.length; _i++) {
                var booking = _a[_i];
                _loop_1(booking);
            }
            // for(let i = 0; i < this.bookings.length; i++){
            //   this.singlearray.push(
            //     {
            //       booking:this.bookings[i],
            //       car:this.cars[i]
            //     }
            //   )
            // }
            //console.log(this.bookings);
        }, function (err) {
            console.log(err);
        });
    };
    BookingsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-bookings',
            template: __webpack_require__("./src/app/bookings/bookings.component.html"),
            styles: [__webpack_require__("./src/app/bookings/bookings.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_bookings_service__["b" /* BookingsService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_3__services_product_service__["a" /* ProductService */]])
    ], BookingsComponent);
    return BookingsComponent;
}());



/***/ }),

/***/ "./src/app/card/card.component.css":
/***/ (function(module, exports) {

module.exports = "#main_row{\n    padding: 5px;\n}\n#model_name {\n    font-weight: 700;\n    font-size: 40px;\n}\n#model_name_r{\n    padding-top: 0px;\n}\nli{\n  list-style: none;\n}\n#image {\n    height: 100px;\n    width: 200px;\n}\n#card {\n    background: rgb(255, 255, 255);\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    border:1px solid #eee;\n    -webkit-box-shadow: 0 0 5px rgba(0,0,0,.1);\n            box-shadow: 0 0 5px rgba(0,0,0,.1)\n}\n#col_r {\n    margin-top: 20px;\n    margin-bottom: 20px;\n    background-color: rgb(245,245,245);\n}\n#price_text{\n    font-size: 20px;\n}\n#pickuptext {\n    color: rgb(153,153,153);\n    font-size: 30px;\n}\n#button_row{\n  position: relative;\n  margin-top: 30%;\n  text-align: center;\n}\n#continue_button {\n    position: relative;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    background-color: rgb(243,113,33);\n}\n#model_name_r{\n    padding-left: 0px;\n    text-align: left;\n}\nlabel {\n  /* Presentation */\n  font-size: 30px\n}\n/* Required Styling */\nlabel input[type=\"checkbox\"] {\n  display: none;\n}\n.custom-checkbox {\n  position: relative;\n  cursor: pointer;\n}\n.custom-checkbox .glyphicon {\n  position: absolute;\n  bottom:0.05px;\n  left: -1.25em;\n}\n.custom-checkbox .glyphicon-star {\n  opacity: 0;\n  -webkit-transition: opacity 0.2s ease-in-out;\n  transition: opacity 0.2s ease-in-out;\n}\n.custom-checkbox:hover .glyphicon-star{\n  opacity: 0.5;\n}\n.custom-checkbox input[type=\"checkbox\"]:checked ~ .glyphicon-star {\n  opacity: 1;\n}\n"

/***/ }),

/***/ "./src/app/card/card.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" id = 'card'>\n    <div class=\"row\" id = 'main_row' style=\"padding-left: 10px;padding-right: 10px\">\n    <div class=\"col-sm-10 \">\n        <div class=\"row\" id =\"model_name\" *ngIf=\"car.isavailable\">\n        {{car.name}}\n            <!--<label for=\"id-of-input\" class=\"custom-checkbox\">-->\n              <input type=\"checkbox\" id=\"id-of-input\" style=\"margin-top: 21px;margin-left: 15px\" (change)=\"onchange($event)\" [(ngModel)]=\"check\"/>\n          <label style=\"font-size: 1rem;color: #F66500;margin-top: 17px;margin-left: 5px\">Add to Favorite</label>\n              <!--<img class=\"glyphicon glyphicon-star-empty\" src=\"../assets/icons/favorite_border.png\">-->\n              <!--<img class=\"glyphicon glyphicon-star\" src=\"../assets/icons/favorite_black.png\">-->\n            <!--</label>-->\n        </div>\n      <div *ngIf=\"!car.isavailable\"><h3 style=\"color: gold;\">NOT AVAILABLE</h3></div>\n        <div class=\"row\">\n            <div class=\"col-sm-4\" id = 'L_col'>\n                <div class=\"row\" >\n                    <img class = \"img\" mat-card-image src=\"{{car.imageName}}\" id = 'image'>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-sm\">\n                        <div class=\"row\">\n                        <svg-icon src = \"../assets/icons/Person.svg\"></svg-icon>\n                        </div>\n                        <div class=\"row\">\n                        {{car.passengers}}\n                        </div>\n                    </div>\n                    <div class=\"col-sm\">\n                        <div class=\"row\">\n                        <svg-icon src = \"../assets/icons/luggage.svg\"></svg-icon>\n                        </div>\n                        <div class=\"row\">\n                        {{car.luggage}}\n                        </div>\n                    </div>\n                    <div class=\"col-sm\">\n                        <div class=\"row\">\n                        <svg-icon src = \"../assets/icons/AC.svg\"></svg-icon>\n                        </div>\n                        <div class=\"row\">\n                        {{car.ACsup}}\n                        </div>\n                    </div>\n                    <div class=\"col-sm\">\n                        <div class=\"row\">\n                        <svg-icon src = \"../assets/icons/Auto.svg\" ></svg-icon>\n                        </div>\n                        <div class=\"row\">\n                        {{car.isAuto}}\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-sm-8\" id = 'R_col'>\n                <div class=\"row\">\n                    <img src=\"https://www.autoescape.com/images-cms/images/SUPPLIERS/TARSIER/65bb10e6e11aeaf4d88f9514491c6801_h25.png\">\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-sm-6\">\n                            <li>Features</li>\n                            <li><img src = \"../assets/icons/check.png\" style =\"width:20px; height :20px;\" >{{car.type}}</li>\n                            <li><img src = \"../assets/icons/check.png\" style =\"width:20px; height :20px;\" >Pay at Pick-Up</li>\n                            <li><img src = \"../assets/icons/check.png\" style =\"width:20px; height :20px;\" >Free cancellation</li>\n                    </div>\n                    <div class=\"col-sm-6\">\n                        <p id= 'pickuptext'><svg-icon src = \"../assets/icons/Airports.svg\"></svg-icon>Pick-up:</p>\n                        <p>{{car.pickupLoc}}</p>\n                    </div>\n                </div>\n\n            </div>\n        </div>\n    </div>\n    <div  class = \"col-sm-2\" id = 'col_r'>\n            <div class=\"row\">\n                <p style=\"margin-left: 10px\">Pay at Pick-Up</p>\n            </div>\n            <li id = \"price_text\">${{car.price}}/day</li>\n\n            <div class=\"row\" id = \"button_row\">\n                <button id = 'continue_button' class = \"btn btn-primary\" style=\"width: 150px;height: 45px\" [disabled]=\"!car.isavailable\" type=\"button\"  (click)=\"btnContinueClick()\"   routerLink=\"/bookingdetail\">CONTINUE</button>\n            </div>\n      <!--(click)=\"btnContinueClick()\"-->\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/card/card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__class_car__ = __webpack_require__("./src/app/class/car.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_favoritelist_service__ = __webpack_require__("./src/app/services/favoritelist.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_authentication_service__ = __webpack_require__("./src/app/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_bookings_service__ = __webpack_require__("./src/app/services/bookings.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_data_bus_service__ = __webpack_require__("./src/app/services/data-bus.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CardComponent = /** @class */ (function () {
    function CardComponent(dataBus, favoritelist, auth, bookingservice) {
        this.dataBus = dataBus;
        this.favoritelist = favoritelist;
        this.auth = auth;
        this.bookingservice = bookingservice;
        this.check = false;
        if (this.auth.isLoggedIn()) {
            this.email = this.auth.getUserDetails().email;
        }
    }
    CardComponent.prototype.ngOnInit = function () {
        console.log(this.favorites);
        if (this.favorites != null) {
            for (var _i = 0, _a = this.favorites; _i < _a.length; _i++) {
                var car = _a[_i];
                if (car.carid == this.car._id) {
                    this.check = true;
                    break;
                }
            }
        }
        console.log(this.check);
    };
    CardComponent.prototype.onchange = function (event) {
        this.favorite = {
            email: this.email,
            carid: this.car._id
        };
        console.log(this.car.name);
        if (event.target.checked) {
            console.log("checked");
            this.favoritelist.createFavorite(this.favorite).subscribe(function (data) {
                console.log(data);
            }, function (err) {
                console.log(err);
            });
        }
        else {
            console.log("unchecked");
            this.favoritelist.deleteFavorite(this.favorite).subscribe(function (data) {
                console.log(data);
            }, function (err) {
                console.log(err);
            });
        }
    };
    CardComponent.prototype.onclick = function () {
        // this.booking = new Booking('','','')
        // this.bookingservice.setBooking(this.booking);
        console.log(this.car.name);
    };
    CardComponent.prototype.btnContinueClick = function () {
        this.dataBus.setCarInfo(this.car);
        console.log('car set carinfor to databus');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__class_car__["a" /* Car */])
    ], CardComponent.prototype, "car", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], CardComponent.prototype, "favorites", void 0);
    CardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-card',
            template: __webpack_require__("./src/app/card/card.component.html"),
            styles: [__webpack_require__("./src/app/card/card.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__services_data_bus_service__["a" /* DataBusService */], __WEBPACK_IMPORTED_MODULE_2__services_favoritelist_service__["a" /* FavoritelistService */], __WEBPACK_IMPORTED_MODULE_3__services_authentication_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_4__services_bookings_service__["b" /* BookingsService */]])
    ], CardComponent);
    return CardComponent;
}());



/***/ }),

/***/ "./src/app/carlists/carlists.component.css":
/***/ (function(module, exports) {

module.exports = ".layout{\n    /*height:500px;*/\n}\nul{\n  list-style-type: none;\n}\nli{\n  position:relative;\n}\n/*.img{*/\n/*transition: transform 0.25s ease;;*/\n/*}*/\n.highlight{\n  -webkit-transform: scale(1.05);\n          transform: scale(1.05);\n  color:orange;\n  font-family:'STKaiti';\n  /*-ms-transform: scale(1.1);*/\n  /*-webkit-transform: scale(1.1);*/\n  /*-moz-transform: scale(1.1);*/\n  background: skyblue;\n\n}\n.not-highlight{\n  background: #fbeafc;\n}\n.adminpanel{\n\n}\n"

/***/ }),

/***/ "./src/app/carlists/carlists.component.html":
/***/ (function(module, exports) {

module.exports = "<div class = \"layout\">\n    <!-- Content here -->\n  <!--<p>Car Information</p>-->\n  <!--<button (click)=\"getCarlists()\" >REQ</button>-->\n  <!--<button (click)=\"postCarInfo()\" >post</button>-->\n  <div class=\"adminpanel\">\n  <br>\n  <app-admincontrolpanel *ngIf=\"isAdmin\" (getAll)=\"getCarlists()\" [seletedCar]=\"selectedCar_p\"></app-admincontrolpanel>\n  <br>\n  </div>\n  <div *ngIf=\"showCards\">\n    <!--<p>Car Lists DATA:</p>-->\n    <ul *ngFor=\"let car of showinglist, let i = index\">\n      <li [ngClass]=\"{'highlight' : selected == i, 'not-highlight' : selected!=i}\"\n          (click)=\"car.isavailable &&  onSelect(i)\" > <app-card [car]=\"car\" [favorites]=\"favorites\"> </app-card> </li>\n    </ul>\n  </div>\n\n  <app-pagination\n    (goPage)=\"goToPage($event)\"\n    (goNext)=\"onNext()\"\n    (goPrev)=\"onPrev()\"\n    [pagesToShow]=\"8\"\n    [page]=\"page\"\n    [perPage]=\"limit\"\n    [count]=\"total\"></app-pagination>\n\n  </div>\n\n"

/***/ }),

/***/ "./src/app/carlists/carlists.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarlistsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_product_service__ = __webpack_require__("./src/app/services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__ = __webpack_require__("./src/app/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_favoritelist_service__ = __webpack_require__("./src/app/services/favoritelist.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CarlistsComponent = /** @class */ (function () {
    function CarlistsComponent(carService, favoriteservice, auth) {
        var _this = this;
        this.carService = carService;
        this.favoriteservice = favoriteservice;
        this.auth = auth;
        this.selected = -1; //the selected card index;
        this.isAdmin = true; // true:if user is admin;
        this.showCards = true;
        //****for paginate
        this.loading = false;
        this.total = 0;
        this.page = 1;
        this.limit = 4;
        if (this.auth.isLoggedIn()) {
            this.favoriteservice.getFavoritesByEmail(this.auth.getUserDetails().email).subscribe(function (data) {
                _this.favorites = data;
            }, function (err) {
                console.log(err);
            });
        }
    }
    CarlistsComponent.prototype.ngOnInit = function () {
        console.log("carlist recieved!!~~");
        this.searchCarlists();
        this.isAdmin = this.auth.Ifadmin();
    };
    CarlistsComponent.prototype.footerRunLoc = function (pickplace) {
        this.pickPlace = pickplace;
        //console.log("carlist run");
        this.searchCarlists();
    };
    CarlistsComponent.prototype.footerRunAll = function () {
        this.getCarlists();
    };
    CarlistsComponent.prototype.footerRunFilter = function (new_options) {
        this.newOptions = new_options;
        //console.log("footer run filter");
        //console.log(this.newOptions);
        this.searchCarFilter();
    };
    CarlistsComponent.prototype.searchCarFilter = function () {
        var _this = this;
        this.loading = true;
        console.log(this.newOptions);
        this.carService.searchCarwithFilter(this.newOptions).subscribe(function (res) {
            _this.cars = res;
            _this.total = res.length;
            _this.showinglist = _this.cars.slice(0, _this.limit);
            _this.page = 1;
            //init the selected status and seleted Car info for adminControl
            _this.selected = -1;
            _this.selectedCar_p = null;
            _this.loading = false;
        }, function (error1) {
            "search error!!!!!!";
        });
    };
    CarlistsComponent.prototype.searchCarlists = function () {
        var _this = this;
        this.loading = true;
        this.carService.searchCarProduct(this.pickPlace).subscribe(function (res) {
            _this.cars = res;
            //console.log(res("isavalible"));
            _this.total = res.length;
            _this.showinglist = _this.cars.slice(0, _this.limit);
            _this.page = 1;
            //init the selected status and seleted Car info for adminControl
            _this.selected = -1;
            _this.selectedCar_p = null;
            _this.loading = false;
        }, function (error1) {
            "search error!!!!!!";
        });
    };
    // getMessages(): void {
    CarlistsComponent.prototype.getCarlists = function () {
        var _this = this;
        console.log('--get all cars-');
        this.loading = true;
        this.carService.getAllProduct().subscribe(function (res) {
            _this.cars = res;
            _this.total = res.length;
            _this.showinglist = _this.cars.slice(0, _this.limit);
            _this.page = 1;
            //init the selected status and seleted Car info for adminControl
            _this.selected = -1;
            _this.selectedCar_p = null;
            _this.loading = false;
        });
    };
    // postCarInfo(){
    //   let car1:Car = new Car("new car1111","new type",
    // 5, 23.11, 3, true, true,  'Dallas love field',
    // 15, "/assets/carimages/chevrolet_tahoe_suv_brl_287x164.jpg", true);
    //   this.carService.postCar(car1);
    //   console.log('postCarInfo finish - in carlist');
    //
    // }
    CarlistsComponent.prototype.onSelect = function (e) {
        if (e != this.selected) {
            this.selected = e;
            this.selectedCar_p = this.showinglist[e];
            console.log("index:" + e + " _id:" + this.showinglist[e]._id);
        }
        else {
            this.selected = -1;
            this.selectedCar_p = null;
        }
    };
    CarlistsComponent.prototype.getFrom = function () {
        return ((this.limit * this.page) - this.limit);
    };
    CarlistsComponent.prototype.getTo = function () {
        var max = this.limit * this.page;
        if (max > this.total) {
            max = this.total;
        }
        return max;
    };
    CarlistsComponent.prototype.goToPage = function (n) {
        if (this.page != n) {
            this.selected = -1;
            this.selectedCar_p = null;
            this.page = n;
            this.showinglist = this.cars.slice(this.getFrom(), this.getTo());
        }
    };
    CarlistsComponent.prototype.onNext = function () {
        this.page++;
        this.selected = -1;
        this.selectedCar_p = null;
        this.showinglist = this.cars.slice(this.getFrom(), this.getTo());
    };
    CarlistsComponent.prototype.onPrev = function () {
        this.page--;
        this.selected = -1;
        this.selectedCar_p = null;
        this.showinglist = this.cars.slice(this.getFrom(), this.getTo());
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], CarlistsComponent.prototype, "pickPlace", void 0);
    CarlistsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-carlists',
            template: __webpack_require__("./src/app/carlists/carlists.component.html"),
            styles: [__webpack_require__("./src/app/carlists/carlists.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_product_service__["a" /* ProductService */], __WEBPACK_IMPORTED_MODULE_3__services_favoritelist_service__["a" /* FavoritelistService */], __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */]])
    ], CarlistsComponent);
    return CarlistsComponent;
}());



/***/ }),

/***/ "./src/app/class/car.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Car; });
/* unused harmony export Boooking */
var Car = /** @class */ (function () {
    function Car(name, type, passengers, price, luggage, isAuto, ACsup, pickupLoc, insurance, imageName, isavailable, _id) {
        this.name = name;
        this.type = type;
        this.passengers = passengers;
        this.price = price;
        this.luggage = luggage;
        this.isAuto = isAuto;
        this.ACsup = ACsup;
        this.pickupLoc = pickupLoc;
        this.insurance = insurance;
        this.imageName = imageName;
        this.isavailable = isavailable;
        this._id = _id;
    }
    return Car;
}());

var Boooking = /** @class */ (function () {
    // public _id:string;
    function Boooking(car_ID, startDate, finishDate, pickupLocation, returnLocation) {
        this.car_ID = car_ID;
        this.startDate = startDate;
        this.finishDate = finishDate;
        this.pickupLocation = pickupLocation;
        this.returnLocation = returnLocation;
    }
    return Boooking;
}());

// export const CARS = [
//   {
//     name: 'Nissan Altima',
//     type: 'Standard',
//     imageName: '/assets/carimages/nissan_altima_standard_brl_287x164.jpg',
//     passengers: 5,
//     luggage: 2,
//     price: 40.00,
//     ACsup:true,
//     isAuto: true,
//     pickupLoc: 'DALLAS LOVE FIELD - Dallas Love Field',
//     isavailable:true,
//     insurance:10.00
//   },
//   {
//     name: 'Chevrolet Sonica',
//     type: 'Economy',
//     imageName: '/assets/carimages/chevrolet_sonic_economy_brl_287x164.jpg',
//     passengers: 5,
//     luggage: 2,
//     price: 40.00,
//     ACsup:true,
//     isAuto: true,
//     pickupLoc: 'Plano high school',
//     isavailable:true,
//     insurance:10.00
//   }
// ];


/***/ }),

/***/ "./src/app/deletedialog/deletedialog.component.css":
/***/ (function(module, exports) {

module.exports = ".overlay {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  z-index: 999;\n}\n\n.dialog {\n  z-index: 1000;\n  position: fixed;\n  right: 0;\n  left: 0;\n  top: 20px;\n  margin-right: auto;\n  margin-left: auto;\n  min-height: 200px;\n  width: 90%;\n  max-width: 750px;\n  background-color: #fff;\n  padding: 12px;\n  -webkit-box-shadow: 0 7px 8px -4px rgba(0, 0, 0, 0.2), 0 13px 19px 2px rgba(0, 0, 0, 0.14), 0 5px 24px 4px rgba(0, 0, 0, 0.12);\n          box-shadow: 0 7px 8px -4px rgba(0, 0, 0, 0.2), 0 13px 19px 2px rgba(0, 0, 0, 0.14), 0 5px 24px 4px rgba(0, 0, 0, 0.12);\n}\n\n.content{\n  padding-top: 30px;\n  color: blue;\n}\n\n@media (min-width: 768px) {\n  .dialog {\n    top: 30px;\n  }\n}\n\n.dialog__close-btn {\n  border: 0;\n  background: none;\n  color: #2d2d2d;\n  position: absolute;\n  top: 8px;\n  right: 8px;\n  font-size: 1.2em;\n}\n"

/***/ }),

/***/ "./src/app/deletedialog/deletedialog.component.html":
/***/ (function(module, exports) {

module.exports = "<div [@dialog] *ngIf=\"visible\" class=\"dialog\">\n  <div class = 'content'>\n    <ng-content ></ng-content>\n  </div>\n  <button *ngIf=\"closable\" (click)=\"close()\" aria-label=\"Close\" class=\"dialog__close-btn\">X</button>\n</div>\n<div *ngIf=\"visible\" class=\"overlay\" (click)=\"close()\"></div>\n\n\n"

/***/ }),

/***/ "./src/app/deletedialog/deletedialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeletedialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("./node_modules/@angular/animations/esm5/animations.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DeletedialogComponent = /** @class */ (function () {
    function DeletedialogComponent() {
        this.closable = true;
        this.visibleChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    DeletedialogComponent.prototype.ngOnInit = function () { };
    DeletedialogComponent.prototype.close = function () {
        this.visible = false;
        this.visibleChange.emit(this.visible);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], DeletedialogComponent.prototype, "closable", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Boolean)
    ], DeletedialogComponent.prototype, "visible", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */])
    ], DeletedialogComponent.prototype, "visibleChange", void 0);
    DeletedialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-deletedialog',
            template: __webpack_require__("./src/app/deletedialog/deletedialog.component.html"),
            styles: [__webpack_require__("./src/app/deletedialog/deletedialog.component.css")],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["m" /* trigger */])('dialog', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["l" /* transition */])('void => *', [
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* style */])({ transform: 'scale3d(.3, .3, .3)' }),
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])(100)
                    ]),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["l" /* transition */])('* => void', [
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])(100, Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* style */])({ transform: 'scale3d(.0, .0, .0)' }))
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [])
    ], DeletedialogComponent);
    return DeletedialogComponent;
}());



/***/ }),

/***/ "./src/app/favoritelist/favoritelist.component.css":
/***/ (function(module, exports) {

module.exports = ".layout{\n  /*height:500px;*/\n}\nul{\n  list-style-type: none;\n}\nli{\n  position:relative;\n}\n"

/***/ }),

/***/ "./src/app/favoritelist/favoritelist.component.html":
/***/ (function(module, exports) {

module.exports = "<div class = \"layout\">\n  <!-- Content here -->\n  <div>\n    <p>Car Lists DATA:</p>\n    <ul *ngFor=\"let car of showinglist\">\n      <li> <app-card [car]=\"car\" [favorites]=\"favorites\"> </app-card> </li>\n    </ul>\n  </div>\n\n  <app-pagination\n    (goPage)=\"goToPage($event)\"\n    (goNext)=\"onNext()\"\n    (goPrev)=\"onPrev()\"\n    [pagesToShow]=\"8\"\n    [page]=\"page\"\n    [perPage]=\"limit\"\n    [count]=\"total\"></app-pagination>\n\n</div>\n"

/***/ }),

/***/ "./src/app/favoritelist/favoritelist.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoritelistComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_product_service__ = __webpack_require__("./src/app/services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_favoritelist_service__ = __webpack_require__("./src/app/services/favoritelist.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FavoritelistComponent = /** @class */ (function () {
    function FavoritelistComponent(routerIonfo, carService, favoriteserivce) {
        this.routerIonfo = routerIonfo;
        this.carService = carService;
        this.favoriteserivce = favoriteserivce;
        this.showinglist = [];
        this.loading = false;
        this.email = this.routerIonfo.snapshot.queryParams["email"];
    }
    FavoritelistComponent.prototype.ngOnInit = function () {
        this.getCarlists();
    };
    FavoritelistComponent.prototype.getCarlists = function () {
        var _this = this;
        this.loading = true;
        this.carService.getAllProduct().subscribe(function (res) {
            console.log(res);
            _this.favoriteserivce.getFavoritesByEmail(_this.email).subscribe(function (data) {
                _this.favorites = data;
                var set = new Set();
                for (var _i = 0, res_1 = res; _i < res_1.length; _i++) {
                    var car = res_1[_i];
                    for (var _a = 0, _b = _this.favorites; _a < _b.length; _a++) {
                        var favorite = _b[_a];
                        if (car._id == favorite.carid && !set.has(car._id)) {
                            _this.showinglist.push(car);
                            set.add(car._id);
                        }
                    }
                }
            }, function (err) {
                console.log(err);
            });
            _this.loading = false;
        });
    };
    FavoritelistComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-favoritelist',
            template: __webpack_require__("./src/app/favoritelist/favoritelist.component.html"),
            styles: [__webpack_require__("./src/app/favoritelist/favoritelist.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__services_product_service__["a" /* ProductService */], __WEBPACK_IMPORTED_MODULE_3__services_favoritelist_service__["a" /* FavoritelistService */]])
    ], FavoritelistComponent);
    return FavoritelistComponent;
}());



/***/ }),

/***/ "./src/app/filter/filter.component.css":
/***/ (function(module, exports) {

module.exports = ".filter{\n    height: 500px;\n    background-color: burlywood;\n}\np{\n  color: #3162ff;\n}\nform{\n  margin-left:50px;\n}\n.btn{\n  float:right;\n}\n.slider {\n  -webkit-appearance: none;\n  width: 100%;\n  height: 15px;\n  border-radius: 5px;\n  background: #d3d3d3;\n  outline: none;\n  opacity: 0.7;\n  -webkit-transition: .2s;\n  -webkit-transition: opacity .2s;\n  transition: opacity .2s;\n\n}\n.slider::-webkit-slider-thumb {\n  -webkit-appearance: none;\n  width: 25px;\n  height: 25px;\n  border-radius: 50%;\n  background: #4CAF50;\n  cursor: pointer;\n}\n.slider::-moz-range-thumb {\n  width: 25px;\n  height: 25px;\n  border-radius: 50%;\n  background: #4CAF50;\n  cursor: pointer;\n}\n"

/***/ }),

/***/ "./src/app/filter/filter.component.html":
/***/ (function(module, exports) {

module.exports = "<aside class=\"control-sidebar control-sidebar-dark\" style=\"margin-top: 40px\">\n<form [formGroup]=\"formModel\">\n  <p>PRICE SCOPE (1 day)   </p>\n  <!--<select id=\"pricelist\" class=\"form-control\">-->\n    <!--<option value=\"all\">-ALL-</option>-->\n    <!--<option value=\"one\">Under 50$</option>-->\n    <!--<option value=\"two\">50$ - 100$</option>-->\n    <!--<option value=\"three\">100$ - 150$</option>-->\n    <!--<option value=\"four\">150$ - 200$</option>-->\n    <!--<option value=\"five\">Above 200$</option>-->\n  <!--</select>-->\n\n  <select formControlName=\"price\" class=\"form-control\">\n    <option *ngFor=\"let price of pricelist\" value=\"{{price.id}}\">{{price.text}}</option>\n  </select>\n\n  <br><br>\n  <div>\n    <p>CAR TYPE</p>\n    <!--<label><input type=\"checkbox\"  id=\"alltypes\" [checked]=\"isAllChecked()\" (change)=\"typecheckAll($event)\">Select All Type</label>-->\n    <!--<div formArrayName=\"type\" *ngFor=\"let op of options; let i = index\" class=\"form-check\" >-->\n      <!--<input type=\"checkbox\" [formControlName]=\"i\"  [(ngModel)]=\"op.state\"   value=\"{{op.id}}\"/>{{op.text}}-->\n      <!--&lt;!&ndash;[id]=\"op.id\"&ndash;&gt;-->\n      <!--&lt;!&ndash;(change)=\"onTpyeChange(op, $event.target.checked)\"&ndash;&gt;-->\n    <!--</div>-->\n    <label *ngIf=\"false\"><input type=\"checkbox\"  id=\"alltypes\" [checked]=\"isAllChecked()\" (change)=\"typecheckAll($event)\">Select All Type</label>\n    <div formArrayName=\"type\" *ngFor=\"let op of options; let i = index\" class=\"form-check\" style=\"padding-left: 0px\">\n      <label><input type=\"checkbox\" [formControlName]=\"i\"  [(ngModel)]=\"op.state\"   value=\"{{op.id}}\"/> {{op.text}}</label>\n    </div>\n  </div>\n\n  <!--<div *ngFor=\"let data of emails\">-->\n    <!--<input type=\"checkbox\" (change)=\"onChange(data.email, $event.target.checked)\"> {{data.email}}<br>-->\n  <!--</div>-->\n\n  <br><br>\n  <p>PASSENGER NUMBER: {{psgervalue}}</p>\n  <div  class=\"passenger\">\n    <!--<input  type=\"range\" min=\"2\" max=\"7\" formControlName=\"paserNum\" value=\"{{psgervalue}}\" [(ngModel)]=\"psgervalue\" class=\"slider\" id=\"myRange\" [ngModelOptions]=\"{standalone: true}\"/>-->\n    <input  type=\"range\" min=\"2\" max=\"7\" formControlName=\"paserNum\" value=\"{{psgervalue}}\" [(ngModel)]=\"psgervalue\" class=\"slider\" id=\"myRange\" />\n  </div>\n\n  <br><br>\n  <p>DRIVER'S AGE</p>\n  <div>\n    <div class=\"passenger\" >\n    <input checked formControlName=\"age\" type=\"radio\" name=\"age\" value=\"larger18\" > ADULT<br>\n    <input formControlName=\"age\" type=\"radio\" name=\"age\" value=\"less18\"> Under 18<br>\n    </div>\n  </div>\n  <!--<input (change)=\"changeDS()\" [(ngModel)]=\"testvalue\" [ngModelOptions]=\"{standalone: true}\"/>-->\n  <!--{{testvalue}}-->\n</form>\n  <!--<div>-->\n    <!--{{myForm.value | json }}-->\n  <!--</div>-->\n</aside>\n"

/***/ }),

/***/ "./src/app/filter/filter.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterComponent; });
/* unused harmony export FilterOptions */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import * as $ from 'jquery';
var FilterComponent = /** @class */ (function () {
    function FilterComponent() {
        // flag:boolean;
        this.pricelist = [];
        this.options = []; // object: {id, text} or array: []
        this.formModel = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormGroup */]({
            price: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](),
            type: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormArray */]([
                new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]("eco"),
                new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]("cmpt"),
                new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]("std"),
                new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]("suv"),
                new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]("lux")
            ]),
            paserNum: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](),
            age: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]()
        });
        this.carFilter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    FilterComponent.prototype.ngOnInit = function () {
        // this.flag = false;
        this.psgervalue = 7;
        // this.formModel.get('price').controls.price.value = 0;
        this.formModel.setControl('age', new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]("larger18"));
        this.formModel.setControl('price', new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]("0"));
        // this.formModel.value.age.value="larger18" ;
        this.options = [
            { id: 'eco', text: 'Economy' },
            { id: 'cmpt', text: 'Compact' },
            { id: 'std', text: 'Standard' },
            { id: 'suv', text: 'SUV' },
            { id: 'lux', text: 'Luxury' }
        ];
        this.pricelist = [
            { id: '0', text: '--ALL--' },
            { id: '1', text: 'Under 50$' },
            { id: '2', text: '50$ - 100$' },
            { id: '3', text: '100$ - 150$' },
            { id: '4', text: '150$ - 200$' },
            { id: '5', text: 'Above 200$' }
        ];
        this.options.forEach(function (x) { return x.state = true; });
    };
    FilterComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        console.log("--filter:ngAfterViewInit--");
        this.formModel.valueChanges.subscribe(function (value) {
            _this.onSubmit(value);
        });
        this.onSubmit(this.formModel.value);
    };
    FilterComponent.prototype.typecheckAll = function (ev) {
        this.options.forEach(function (x) { return x.state = ev.target.checked; });
    };
    FilterComponent.prototype.isAllChecked = function () {
        return this.options.every(function (_) { return _.state; });
    };
    FilterComponent.prototype.getMinPrice = function (index) {
        switch (index) {
            case '0':
            case '1':
                return 0;
            case '2':
                return 50;
            case '3':
                return 100;
            case '4':
                return 150;
            case '5':
                return 200;
            default:
                return 0;
        }
    };
    FilterComponent.prototype.getMaxPrice = function (index) {
        if (index == '0') {
            return 5000;
        }
        else if (index == '1') {
            return 50;
        }
        else {
            return this.getMinPrice(index) + 50;
        }
    };
    FilterComponent.prototype.getTypes = function (index) {
        var types = new Array();
        for (var i in index) {
            if (index[i]) {
                if (this.options[i].text == 'Luxury' && this.formModel.value.age != 'larger18') {
                    continue;
                }
                types.push(this.options[i].text);
            }
        }
        return types;
    };
    FilterComponent.prototype.onSubmit = function (value) {
        console.log("my submit -----");
        var values = this.formModel.value;
        var min = this.getMinPrice(values.price);
        var max = this.getMaxPrice(values.price);
        var cartypes = this.getTypes(values.type);
        var max_pasgerNum = values.paserNum;
        var isAdult = ((values.age == 'larger18') ? true : false);
        this.carFilter.emit(new FilterOptions(min, max, cartypes, max_pasgerNum, isAdult));
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */])
    ], FilterComponent.prototype, "carFilter", void 0);
    FilterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-filter',
            template: __webpack_require__("./src/app/filter/filter.component.html"),
            styles: [__webpack_require__("./src/app/filter/filter.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FilterComponent);
    return FilterComponent;
}());

var FilterOptions = /** @class */ (function () {
    function FilterOptions(price_min, price_max, carType, pasgerNum_max, isAdult) {
        this.price_min = price_min;
        this.price_max = price_max;
        this.carType = carType;
        this.pasgerNum_max = pasgerNum_max;
        this.isAdult = isAdult;
    }
    return FilterOptions;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <hr>\n  <footer>\n    <div class=\"row\">\n      <div class=\"col-lg-12\">\n        <p style=\"text-align: center\">Copyright © 2018 Carrental.\n          All Rights Reserved.</p>\n      </div>\n    </div>\n  </footer>\n</div>\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("./src/app/footer/footer.component.html"),
            styles: [__webpack_require__("./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/***/ (function(module, exports) {

module.exports = "p{\n    color:dodgerblue ;\n    padding-left:5px;\n    padding-right:5px;\n    margin-bottom:0px\n}\n\n.show{\n  opacity: 1 !important;\n}\n\n.step{\n  opacity: 0;\n  -webkit-transition: .5s ease-in-out all;\n  transition: .5s ease-in-out all;\n}\n"

/***/ }),

/***/ "./src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-light bg-light\">\n  <a class=\"navbar-brand\" style = \"margin-left : 50px ;margin-right : 15%\" href=\"/\">\n    <!--<img  [class.show]=\"!booleanFromComponentClass\" class=\"step\" (mouseenter) = \"changeImg()\" (mouseleave) =\"changeImg()\" [src]=\"imgSrc\" width = \"15%\" height = \"15%\" alt=\"\">-->\n    <img  [@visibilityChanged]=\"visiblityState\" (mouseenter) = \"changeImg()\" (mouseleave) =\"resetImg()\"[src]=\"imgSrc\" width = \"15%\" height = \"15%\" alt=\"\">\n  </a>\n    <button *ngIf=\"!auth.isLoggedIn()\" type=\"button\" class=\"btn btn-outline-primary\" routerLink=\"/register\">Register</button>\n    <p *ngIf=\"!auth.isLoggedIn()\">or</p>\n    <button *ngIf=\"!auth.isLoggedIn()\" type=\"button\" class=\"btn btn-outline-primary\" routerLink=\"/login\">Sign in</button>\n  <a *ngIf=\"auth.isLoggedIn()\" routerLink=\"/profile/bookings\" [queryParams]=\"{email:details?.email}\">Hi, {{details?.name}}</a>\n  <button *ngIf=\"auth.isLoggedIn()\" type=\"button\" class=\"btn btn-outline-primary\" (click)=\"auth.logout()\">Log out</button>\n</nav>\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__ = __webpack_require__("./src/app/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_animations__ = __webpack_require__("./node_modules/@angular/animations/esm5/animations.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(auth) {
        this.auth = auth;
        this.imgSrc = "/assets/XXAR_800x400.png";
        this.imgs = ["/assets/XXAR_800x400.png", '/assets/carcool.png'];
        this.i = 0;
        this.visiblityState = 'shown';
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.profile().subscribe(function (user) {
            _this.details = user;
        }, function (err) {
            console.error(err);
        });
        this.resetImg();
    };
    // changeImg(){
    //   this.i = (this.i + 1)%2;
    //   this.imgSrc = this.imgs[this.i];
    // }
    HeaderComponent.prototype.changeImg = function () {
        var _this = this;
        this.i = (this.i + 1) % 2;
        if (this.visiblityState === 'hidden')
            this.visiblityState = 'shown';
        else
            this.visiblityState = 'hidden';
        setTimeout(function () { _this.imgSrc = _this.imgs[_this.i]; _this.visiblityState = 'shown'; }, 1000);
    };
    HeaderComponent.prototype.resetImg = function () {
        this.imgSrc = this.imgs[0];
        this.i = 0;
        this.visiblityState = 'shown';
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("./src/app/header/header.component.html"),
            styles: [__webpack_require__("./src/app/header/header.component.css")],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["m" /* trigger */])('visibilityChanged', [
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["j" /* state */])('shown', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["k" /* style */])({ opacity: 1 })),
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["j" /* state */])('hidden', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["k" /* style */])({ opacity: 0 })),
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["l" /* transition */])('shown => hidden', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])('1000ms')),
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["l" /* transition */])('hidden => shown', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])('1500ms')),
                ])
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ".col-md-3 {\n    -webkit-box-flex: 0;\n    -ms-flex: 0 0 25%;\n    flex: 0 0 25%;\n    max-width: 24%;\n    padding-left:0px;\n  }\n.row{\n    margin-left:15px;\n}"

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<app-search #search [dataset]=\"dataset\" (searchCar)=\"runParent($event)\"></app-search>\n<div class=\"row\">\n  <!--<div class = \"col-md-1\"></div>-->\n    <app-filter #filter (carFilter)=\"getFilter($event)\" class = \"col-md-3\"></app-filter>\n    <app-carlists #carlists [pickPlace]=\"pickplace\" class = \"col-md-8\"></app-carlists>\n  <div class = \"col-md-1\"></div>\n</div>\n\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* unused harmony export NewFilterOptions */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_product_service__ = __webpack_require__("./src/app/services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_data_bus_service__ = __webpack_require__("./src/app/services/data-bus.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeComponent = /** @class */ (function () {
    function HomeComponent(dataBus, routerIonfo, carService) {
        this.dataBus = dataBus;
        this.routerIonfo = routerIonfo;
        this.carService = carService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.picktime = this.routerIonfo.snapshot.queryParams["pickup_time"];
        this.droptime = this.routerIonfo.snapshot.queryParams["dropoff_time"];
        this.pickplace = this.routerIonfo.snapshot.queryParams["pickup_place"];
        this.dropplace = this.routerIonfo.snapshot.queryParams["dropoff_place"];
        this.pickdate = this.routerIonfo.snapshot.queryParams["pickup_date"];
        this.dropdate = this.routerIonfo.snapshot.queryParams["dropoff_date"];
        this.dataset = [this.pickplace, this.dropplace, this.pickdate, this.picktime, this.dropdate, this.droptime];
        //this.searchCarlists();
        //console.log(this.dataset);
        //console.log(this.pickplace);
        this.dataBus.setSearchCondi(this.dataset);
        console.log(this.pickplace);
        if ((typeof this.pickplace === 'undefined') || (this.pickplace == "")) {
            //this.run(this.pickplace);
            this.runAll();
        }
        else {
            this.run(this.pickplace);
        }
    };
    HomeComponent.prototype.ngAfterViewInit = function () {
        console.log("--filter:ngAfterViewInit--");
        this.picktime = this.routerIonfo.snapshot.queryParams["pickup_time"];
        this.droptime = this.routerIonfo.snapshot.queryParams["dropoff_time"];
        this.pickplace = this.routerIonfo.snapshot.queryParams["pickup_place"];
        this.dropplace = this.routerIonfo.snapshot.queryParams["dropoff_place"];
        this.pickdate = this.routerIonfo.snapshot.queryParams["pickup_date"];
        this.dropdate = this.routerIonfo.snapshot.queryParams["dropoff_date"];
        this.dataset = [this.pickplace, this.dropplace, this.pickdate, this.picktime, this.dropdate, this.droptime];
        //console.log(this.pickplace);
        this.dataBus.setSearchCondi(this.dataset);
        //this.searchCarlists();
        //console.log(this.dataset);
        console.log(this.pickplace);
        if ((typeof this.pickplace === 'undefined') || (this.pickplace == "")) {
            //this.run(this.pickplace);
            this.runAll();
        }
        else {
            this.run(this.pickplace);
        }
    };
    HomeComponent.prototype.run = function (pickplace) {
        console.log("home run.");
        this.footer.footerRunLoc(pickplace);
    };
    HomeComponent.prototype.runAll = function () {
        console.log("home run --search all carlist");
        this.footer.footerRunAll();
    };
    HomeComponent.prototype.runFilter = function (newoptions) {
        this.footer.footerRunFilter(newoptions);
    };
    HomeComponent.prototype.runParent = function (msg) {
        this.pickplace = msg[0];
        this.dropplace = msg[1];
        this.pickdate = msg[2];
        this.picktime = msg[3];
        this.dropdate = msg[4];
        this.droptime = msg[5];
        this.dataset = [this.pickplace, this.dropplace, this.pickdate, this.picktime, this.dropdate, this.droptime];
        this.dataBus.setSearchCondi(this.dataset);
        console.log(this.pickplace);
        this.runFilter(new NewFilterOptions(this.pickplace, this.priceMax, this.priceMin, this.carTypes, this.passengerNum, this.ifAdult));
    };
    HomeComponent.prototype.getFilter = function (options) {
        console.log('---home get filter value from filter--');
        console.log(options);
        this.carTypes = options.carType;
        this.passengerNum = options.pasgerNum_max;
        this.priceMax = options.price_max;
        this.priceMin = options.price_min;
        this.ifAdult = options.isAdult;
        if ((typeof this.carTypes[0] === 'undefined')) {
            this.carTypes = ["NoCarTypes"];
        }
        if ((typeof this.pickplace === 'undefined')) {
            this.pickplace = "AllTypes";
        }
        var newOptions = new NewFilterOptions(this.pickplace, this.priceMax, this.priceMin, this.carTypes, this.passengerNum, this.ifAdult);
        // if((typeof this.pickplace === 'undefined')||(this.pickplace=="")){
        //   //this.run(this.pickplace);
        //   this.runAll();
        // }
        // else{
        //   this.runFilter(newOptions);
        //}
        this.runFilter(newOptions);
        console.log(newOptions);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('carlists'),
        __metadata("design:type", Object)
    ], HomeComponent.prototype, "footer", void 0);
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_data_bus_service__["a" /* DataBusService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__services_product_service__["a" /* ProductService */]])
    ], HomeComponent);
    return HomeComponent;
}());

var NewFilterOptions = /** @class */ (function () {
    function NewFilterOptions(pickLocation, priceMax, priceMin, carType, passengerNumMax, ifAdult) {
        this.pickLocation = pickLocation;
        this.priceMax = priceMax;
        this.priceMin = priceMin;
        this.carType = carType;
        this.passengerNumMax = passengerNumMax;
        this.ifAdult = ifAdult;
    }
    return NewFilterOptions;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ".form-signin {\n  max-width: 330px;\n  padding: 15px;\n  margin: 0 auto;\n}\n.form-signin .form-signin-heading,\n.form-signin .checkbox {\n  margin-bottom: 10px;\n}\n.form-signin .checkbox {\n  font-weight: normal;\n}\n.form-signin .form-control {\n  position: relative;\n  height: auto;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  padding: 10px;\n  font-size: 16px;\n}\n.form-signin .form-control:focus {\n  z-index: 2;\n}\n.form-signin input[type=\"email\"] {\n  margin-bottom: -1px;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.form-signin input[type=\"password\"] {\n  margin-bottom: 10px;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n"

/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<div class=\"container\">-->\n  <!--<div class=\"row\">-->\n    <!--<div class=\"col-md-4 col-md-offset-4\">-->\n      <!--<h2>Login</h2>-->\n      <!--<form name=\"form\" (ngSubmit)=\"login()\" #f=\"ngForm\" novalidate>-->\n        <!--<div class=\"form-group\">-->\n          <!--<label>Email</label>-->\n          <!--<input type=\"text\" class=\"form-control\" name=\"emailaddress\" [(ngModel)]=\"email\" #emailaddress=\"ngModel\" required />-->\n        <!--</div>-->\n        <!--<div class=\"form-group\">-->\n          <!--<label>Username</label>-->\n          <!--<input type=\"text\" class=\"form-control\" name=\"name\" [(ngModel)]=\"username\" #name=\"ngModel\" required />-->\n        <!--</div>-->\n        <!--<div class=\"form-group\">-->\n          <!--<label>Password</label>-->\n          <!--<input type=\"password\" class=\"form-control\" name=\"pwd\" [(ngModel)]=\"password\" #pwd=\"ngModel\" required />-->\n        <!--</div>-->\n        <!--<div class=\"form-group\">-->\n          <!--<button class=\"btn btn-primary\">Login</button>-->\n        <!--</div>-->\n      <!--</form>-->\n    <!--</div>-->\n  <!--</div>-->\n<!--</div>-->\n<div class=\"container\">\n\n  <div class=\"row\">\n\n    <div class=\"col-md-6\">\n\n      <h1 class=\"form-signin-heading\">Sign in</h1>\n      <p class=\"lead\">Not a member? Please <a routerLink=\"/register\">register</a> instead.</p>\n\n      <form (submit)=\"login()\">\n        <div class=\"form-group\">\n          <label for=\"email\">Email address</label>\n          <input type=\"email\" class=\"form-control\" name=\"email\" placeholder=\"Enter email\" [(ngModel)]=\"credentials.email\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"password\">Password</label>\n          <input type=\"password\" class=\"form-control\" name=\"password\" placeholder=\"Password\" [(ngModel)]=\"credentials.password\">\n        </div>\n        <button type=\"submit\" class=\"btn btn-primary\">Sign in!</button>\n      </form>\n\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__ = __webpack_require__("./src/app/services/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(auth, router) {
        this.auth = auth;
        this.router = router;
        this.credentials = {
            email: '',
            password: ''
        };
    }
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.auth.login(this.credentials).subscribe(function () {
            if (_this.auth.Ifadmin()) {
                _this.router.navigateByUrl('/home');
            }
            else
                _this.router.navigateByUrl('/');
        }, function (err) {
            console.error(err);
        });
    };
    LoginComponent.prototype.ngOnInit = function () {
        // reset login status
        //this.authenticationService.logout();
        // get return url from route parameters or default to '/'
        //this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/login/login.component.html"),
            styles: [__webpack_require__("./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/pagination/pagination.component.css":
/***/ (function(module, exports) {

module.exports = ".numbers {\n  /*display: block;*/\n  text-align: center;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n\n.active{\n  background-color: #00B7FF;\n}\n\n.btn-secondary{\n  color:blue;\n  background-color: white;\n}\n\n.disabled{\n  color:grey;\n  /*background-color: #BABABA;*/\n}\n"

/***/ }),

/***/ "./src/app/pagination/pagination.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"pagination\" *ngIf=\"count > 0\">\n\n  <div  class=\"numbers btn-group btn-group-toggle \" style=\"padding-left: 280px\">\n    <button class=\"btn btn-secondary\" (click)=\"onPrev()\" [disabled]=\"page === 1 || loading\" [ngClass]=\"{ 'disabled': page === 1 || loading }\">&lt; Previous</button>\n\n    <button class=\"btn btn-secondary\"\n      *ngFor=\"let pageNum of getPages()\"\n      (click)=\"onPage(pageNum)\"\n      [ngClass]=\"{'active': pageNum === page, 'disabled': loading}\">{{ pageNum }}</button>\n\n    <button class=\"btn btn-secondary\" (click)=\"onNext(true)\" [disabled]=\"lastPage() || loading\" [ngClass]=\"{ 'disabled': lastPage() || loading }\">Next &gt;</button>\n  </div>\n  <br>\n  <div class=\"description\" style=\"padding-top: 5px\">\n    <span class=\"page-counts\">{{ getMin() }} - {{ getMax() }} of {{ count }}</span>\n    <!--<span class=\"page-totals\">in {{ totalPages() }} pages</span>-->\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pagination/pagination.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaginationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PaginationComponent = /** @class */ (function () {
    function PaginationComponent() {
        this.goPrev = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.goNext = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.goPage = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    PaginationComponent.prototype.ngOnInit = function () {
    };
    PaginationComponent.prototype.getMin = function () {
        return ((this.perPage * this.page) - this.perPage) + 1;
    };
    PaginationComponent.prototype.getMax = function () {
        var max = this.perPage * this.page;
        if (max > this.count) {
            max = this.count;
        }
        return max;
    };
    PaginationComponent.prototype.onPage = function (n) {
        this.goPage.emit(n);
    };
    PaginationComponent.prototype.onPrev = function () {
        this.goPrev.emit(true);
    };
    PaginationComponent.prototype.onNext = function (next) {
        this.goNext.emit(next);
    };
    PaginationComponent.prototype.totalPages = function () {
        return Math.ceil(this.count / this.perPage) || 0;
    };
    PaginationComponent.prototype.lastPage = function () {
        // console.log(this.perPage);
        // console.log(this.page);
        return this.perPage * this.page >= this.count;
    };
    PaginationComponent.prototype.getPages = function () {
        var c = Math.ceil(this.count / this.perPage);
        var p = this.page || 1;
        var pagesToShow = this.pagesToShow || 9;
        var pages = [];
        pages.push(p);
        var times = pagesToShow - 1;
        for (var i = 0; i < times; i++) {
            if (pages.length < pagesToShow) {
                if (Math.min.apply(null, pages) > 1) {
                    pages.push(Math.min.apply(null, pages) - 1);
                }
            }
            if (pages.length < pagesToShow) {
                if (Math.max.apply(null, pages) < c) {
                    pages.push(Math.max.apply(null, pages) + 1);
                }
            }
        }
        pages.sort(function (a, b) { return a - b; });
        return pages;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Number)
    ], PaginationComponent.prototype, "page", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Number)
    ], PaginationComponent.prototype, "count", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Number)
    ], PaginationComponent.prototype, "perPage", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Number)
    ], PaginationComponent.prototype, "pagesToShow", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Boolean)
    ], PaginationComponent.prototype, "loading", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], PaginationComponent.prototype, "goPrev", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], PaginationComponent.prototype, "goNext", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], PaginationComponent.prototype, "goPage", void 0);
    PaginationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-pagination',
            template: __webpack_require__("./src/app/pagination/pagination.component.html"),
            styles: [__webpack_require__("./src/app/pagination/pagination.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PaginationComponent);
    return PaginationComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/***/ (function(module, exports) {

module.exports = "#ex1Slider .slider-selection {\n  background: #BABABA;\n}\n"

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<!--<div class=\"container\">-->\n  <!--<div class=\"row\">-->\n    <!--<div class=\"col-md-6\">-->\n      <!--<h1 class=\"form-signin-heading\">Your profile</h1>-->\n      <!--<div class=\"form-horizontal\">-->\n        <!--<div class=\"form-group\">-->\n          <!--<label class=\"col-sm-3 control-label\">Full name</label>-->\n          <!--<p class=\"form-control-static\">{{ details?.name }}</p>-->\n        <!--</div>-->\n        <!--<div class=\"form-group\">-->\n          <!--<label class=\"col-sm-3 control-label\">Email</label>-->\n          <!--<p class=\"form-control-static\">{{ details?.email }}</p>-->\n        <!--</div>-->\n      <!--</div>-->\n    <!--</div>-->\n\n  <!--</div>-->\n<!--</div>-->\n<div class=\"container\">\n  <div class=\"row\" style=\"margin-top: 20px\">\n    <div class=\"col-md-3\">\n      <ul class=\"list-group\">\n        <li class=\"list-group-item active\" (click)=\"onclick($event)\" routerLink=\"/profile/bookings\" [queryParams]=\"{email:details?.email}\">My Booking</li>\n        <li class=\"list-group-item\" (click)=\"onclick($event)\" routerLink=\"/profile/account\" [queryParams]=\"{email:details?.email}\">Account Details</li>\n        <li class=\"list-group-item\" (click)=\"onclick($event)\" routerLink=\"/profile/favoritelist\" [queryParams]=\"{email:details?.email}\">Favorite List</li>\n      </ul>\n    </div>\n    <div class=\"col-md-9\">\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n</div>\n<app-footer></app-footer>\n\n"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__ = __webpack_require__("./src/app/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery__ = __webpack_require__("./node_modules/jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(auth) {
        var _this = this;
        this.auth = auth;
        this.auth.profile().subscribe(function (user) {
            _this.details = user;
        }, function (err) {
            console.error(err);
        });
    }
    ProfileComponent.prototype.ngOnInit = function () {
        //console.log(this.auth.Ifadmin());
    };
    ProfileComponent.prototype.onclick = function (event) {
        __WEBPACK_IMPORTED_MODULE_2_jquery__('li').removeClass("active");
        event.target.className = 'list-group-item active';
        console.log(event.target);
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-profile',
            template: __webpack_require__("./src/app/profile/profile.component.html"),
            styles: [__webpack_require__("./src/app/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <h1>Register</h1>\n      <p class=\"lead\">Already a member? Please <a routerLink=\"/login\">log in</a> instead.</p>\n      <form (submit)=\"register()\">\n        <div class=\"form-group\">\n          <label for=\"name\">Full name</label>\n          <input type=\"text\" class=\"form-control\" name=\"name\" placeholder=\"Enter your name\" [(ngModel)]=\"credentials.name\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"email\">Email address</label>\n          <input type=\"email\" class=\"form-control\" name=\"email\" placeholder=\"Enter email\" [(ngModel)]=\"credentials.email\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"password\">Password</label>\n          <input type=\"password\" class=\"form-control\" name=\"password\" placeholder=\"Password\" [(ngModel)]=\"credentials.password\">\n        </div>\n        <button type=\"submit\" class=\"btn btn-default\">Register!</button>\n      </form>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__ = __webpack_require__("./src/app/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(auth, router) {
        this.auth = auth;
        this.router = router;
        this.credentials = {
            email: '',
            name: '',
            password: ''
        };
    }
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.auth.register(this.credentials).subscribe(function () {
            _this.router.navigateByUrl('/profile');
        }, function (err) {
            console.error(err);
        });
    };
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-register',
            template: __webpack_require__("./src/app/register/register.component.html"),
            styles: [__webpack_require__("./src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/search-welcome/search-welcome.component.css":
/***/ (function(module, exports) {

module.exports = "input{\n    margin-bottom: 8px;  \n}\n\n.card{\n    opacity:0.8;\n}\n\n.datebar {\n    -webkit-box-flex: 0;\n    -ms-flex: 0 0 50%;\n    flex: 0 0 50%;\n    max-width: 42.5%;\n    margin-left:16px;\n  }\n\n.timebar{\n    margin-left:20px;\n    width :43.6%;\n  }\n\n.tmbtn-width{\n      width:240%;\n  }\n\n.scbtn-width{\n      width:100%;\n  }\n"

/***/ }),

/***/ "./src/app/search-welcome/search-welcome.component.html":
/***/ (function(module, exports) {

module.exports = "<form #search=\"ngForm\" action=\"\">\n<div class=\"card\">\n  <div class=\"card-body\">\n    <h5 class=\"card-title\">Search for a car rental</h5>\n    <input [(ngModel)]= \"slt_pickplace\" name=\"pickloc\" type=\"text\" class=\"form-control\" placeholder=\"Pick up location\" required>\n    <input [(ngModel)]= \"slt_dropplace\" name=\"droploc\" type=\"text\" class=\"form-control\" placeholder=\"Drop off location\" required>\n    <div class = \"row\">\n      <input [(ngModel)]= \"slt_pickdate\" name=\"pickdate\" class = \"datebar form-control form-control-sm\" type=\"date\" required/>\n      <select [(ngModel)]=\"slt_picktime\" name=\"picktime\" class = \"form-control form-control-sm timebar\" style = \"height:33px\" required>\n        <option *ngFor=\"let pickuptime of times\" [value]=\"pickuptime.viewValue\">\n          {{ pickuptime.viewValue }}\n        </option>\n      </select>\n    </div>\n\n    <div class = \"row\">\n      <input [(ngModel)]= \"slt_dropdate\" name=\"dropdate\" class = \"datebar form-control form-control-sm\" type=\"date\" required/>\n      <select [(ngModel)]=\"slt_droptime\" name=\"droptime\" class = \"form-control form-control-sm timebar\" style = \"height:33px\" required>\n        <option *ngFor=\"let dropofftime of times\" [value]=\"dropofftime.viewValue\">\n          {{ dropofftime.viewValue }}\n        </option>\n      </select>\n    </div>\n    <button type=\"button\" [disabled]=\"!search.form.valid\" class=\"btn btn-warning scbtn-width\" routerLink=\"/home\" [queryParams]=\"{pickup_place:slt_pickplace,dropoff_place:slt_dropplace,pickup_date:slt_pickdate,pickup_time:slt_picktime,dropoff_date:slt_dropdate,dropoff_time:slt_droptime}\">SEARCH NOW</button>\n    </div>\n</div>\n</form>\n"

/***/ }),

/***/ "./src/app/search-welcome/search-welcome.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchWelcomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SearchWelcomeComponent = /** @class */ (function () {
    function SearchWelcomeComponent() {
        this.times = [
            { value: 'time1', viewValue: '00:00' },
            { value: 'time2', viewValue: '01:00' },
            { value: 'time3', viewValue: '02:00' },
            { value: 'time4', viewValue: '03:00' },
            { value: 'time5', viewValue: '04:00' },
            { value: 'time6', viewValue: '05:00' },
            { value: 'time7', viewValue: '06:00' },
            { value: 'time8', viewValue: '07:00' },
            { value: 'time9', viewValue: '08:00' },
            { value: 'time10', viewValue: '09:00' },
            { value: 'time11', viewValue: '10:00' },
            { value: 'time12', viewValue: '11:00' },
            { value: 'time13', viewValue: '12:00' },
            { value: 'time14', viewValue: '13:00' },
            { value: 'time15', viewValue: '14:00' },
            { value: 'time16', viewValue: '15:00' },
            { value: 'time17', viewValue: '16:00' },
            { value: 'time18', viewValue: '17:00' },
            { value: 'time19', viewValue: '18:00' },
            { value: 'time20', viewValue: '19:00' },
            { value: 'time21', viewValue: '20:00' },
            { value: 'time22', viewValue: '21:00' },
            { value: 'time23', viewValue: '22:00' },
            { value: 'time24', viewValue: '23:00' }
        ];
    }
    SearchWelcomeComponent.prototype.ngOnInit = function () {
        this.slt_droptime = this.times[0].viewValue;
        this.slt_picktime = this.times[0].viewValue;
        this.slt_pickplace;
        this.slt_dropplace;
        this.slt_pickpdate;
        this.slt_droppdate;
    };
    SearchWelcomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-search-welcome',
            template: __webpack_require__("./src/app/search-welcome/search-welcome.component.html"),
            styles: [__webpack_require__("./src/app/search-welcome/search-welcome.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SearchWelcomeComponent);
    return SearchWelcomeComponent;
}());



/***/ }),

/***/ "./src/app/search/search.component.css":
/***/ (function(module, exports) {

module.exports = "p{\n    color: dimgrey;\n    padding-left:1px;\n    padding-right:1px;\n    margin-bottom:0px;\n    padding-top: 7px;\n}\na{\n    padding-left:6px;\n    padding-right:5px;\n}\nhr{\n    margin-top:0px; \n    margin-bottom:0px;\n}\n.division {\n    -webkit-box-flex: 0;\n    -ms-flex: 0 0 12.3%;\n    flex: 0 0 12.3%;\n    max-width: 12.3%;\n    margin-left:8px;\n    margin-right:8px;\n  }\n.place {\n    -webkit-box-flex: 0;\n    -ms-flex: 0 0 15%;\n    flex: 0 0 15%;\n    max-width: 15%;\n    margin-left:8px;\n    margin-right:8px;\n  }\n.scbtn-width{\n    width:100%;\n}\n.search {\n    -webkit-box-flex: 0;\n    -ms-flex: 0 0 10%;\n    flex: 0 0 10%;\n    max-width: 10%;\n    margin-left:10px;\n    margin-right:8px;\n  }"

/***/ }),

/***/ "./src/app/search/search.component.html":
/***/ (function(module, exports) {

module.exports = "<form #search=\"ngForm\" action=\"\">\n  <hr>\n  <nav class=\"navbar navbar-light bg-light\">\n    <div class=\"row\" style = \"width:100%;margin-left:5px\">\n      <input [(ngModel)]=\"pLocation\" name=\"pickloc\" type=\"text\" class=\"place form-control\" style=\"width:180px\" placeholder=\"Pick up location\" required>\n      <p>→</p >\n      <input [(ngModel)]=\"dLocation\"  name=\"droploc\" type=\"text\" class=\"place form-control\" placeholder=\"Drop off location\" required>\n      <input [(ngModel)]=\"pDate\"  name=\"pickdate\" type=\"date\" class = \"division form-control form-control-sm\" required/>\n      <select [(ngModel)]=\"pTime\" name=\"pricktime\" class = \"division form-control form-control-sm\" style = \"height:38px\" required>\n        <option *ngFor=\"let pickuptime of times\" [value]=\"pickuptime.viewValue\">\n          {{pickuptime.viewValue}}\n        </option>\n      </select>\n      <input [(ngModel)]=\"dDate\"  name=\"dropdate\" type=\"date\" class=\"division form-control form-control-sm\" required/>\n      <select [(ngModel)]=\"dTime\"  name=\"droptime\" class = \"division form-control form-control-sm\" style = \"height:38px\" required>\n        <option *ngFor=\"let dropofftime of times\" [value]=\"dropofftime.viewValue\">\n          {{ dropofftime.viewValue }}\n        </option>\n      </select>\n      <button type=\"button\" [disabled]=\"!search.form.valid\" (click)=\"fireEvent()\" class=\"search btn btn-warning scbtn-width\">SEARCH</button>\n    </div>\n\n  </nav>\n</form>\n"

/***/ }),

/***/ "./src/app/search/search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SearchComponent = /** @class */ (function () {
    function SearchComponent(route) {
        this.route = route;
        this.searchCar = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.times = [
            { value: 'time1', viewValue: '00:00' },
            { value: 'time2', viewValue: '01:00' },
            { value: 'time3', viewValue: '02:00' },
            { value: 'time4', viewValue: '03:00' },
            { value: 'time5', viewValue: '04:00' },
            { value: 'time6', viewValue: '05:00' },
            { value: 'time7', viewValue: '06:00' },
            { value: 'time8', viewValue: '07:00' },
            { value: 'time9', viewValue: '08:00' },
            { value: 'time10', viewValue: '09:00' },
            { value: 'time11', viewValue: '10:00' },
            { value: 'time12', viewValue: '11:00' },
            { value: 'time13', viewValue: '12:00' },
            { value: 'time14', viewValue: '13:00' },
            { value: 'time15', viewValue: '14:00' },
            { value: 'time16', viewValue: '15:00' },
            { value: 'time17', viewValue: '16:00' },
            { value: 'time18', viewValue: '17:00' },
            { value: 'time19', viewValue: '18:00' },
            { value: 'time20', viewValue: '19:00' },
            { value: 'time21', viewValue: '20:00' },
            { value: 'time22', viewValue: '21:00' },
            { value: 'time23', viewValue: '22:00' },
            { value: 'time24', viewValue: '23:00' }
        ];
    }
    SearchComponent.prototype.ngOnInit = function () {
        if ((typeof this.dataset[0] === 'undefined')) {
            var time = new Date();
            var year = time.getFullYear();
            var month = time.getMonth() + 1;
            var pickday = time.getDate();
            var dropday = time.getDate() + 3;
            this.pDate = year + "-" + month + "-" + pickday;
            this.dDate = year + "-" + month + "-" + dropday;
            this.pTime = "00:00";
            this.dTime = "00:00";
            //console.log(this.dDate);
        }
        else {
            //console.log(typeof this.dataset[4]);
            this.pLocation = this.dataset[0];
            this.dLocation = this.dataset[1];
            this.pDate = this.dataset[2];
            this.pTime = this.dataset[3];
            this.dDate = this.dataset[4];
            this.dTime = this.dataset[5];
        }
    };
    SearchComponent.prototype.fireEvent = function () {
        this.searchCondi = [this.pLocation, this.dLocation, this.pDate, this.pTime, this.dDate, this.dTime];
        this.searchCar.emit(this.searchCondi);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], SearchComponent.prototype, "dataset", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */])
    ], SearchComponent.prototype, "searchCar", void 0);
    SearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-search',
            template: __webpack_require__("./src/app/search/search.component.html"),
            styles: [__webpack_require__("./src/app/search/search.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/services/account.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AccountPayload; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return PassWord; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return AccountService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AccountDetail = /** @class */ (function () {
    function AccountDetail(_id, email, name, phone, address1, address2, city, state, zip) {
        this._id = _id;
        this.email = email;
        this.name = name;
        this.phone = phone;
        this.address1 = address1;
        this.address2 = address2;
        this.city = city;
        this.state = state;
        this.zip = zip;
    }
    return AccountDetail;
}());

var AccountPayload = /** @class */ (function () {
    function AccountPayload(email, name, phone, address1, address2, city, state, zip) {
        this.email = email;
        this.name = name;
        this.phone = phone;
        this.address1 = address1;
        this.address2 = address2;
        this.city = city;
        this.state = state;
        this.zip = zip;
    }
    return AccountPayload;
}());

var PassWord = /** @class */ (function () {
    function PassWord(currentpassword, newpassword) {
    }
    return PassWord;
}());

var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' })
};
var AccountService = /** @class */ (function () {
    function AccountService(http) {
        this.http = http;
    }
    AccountService.prototype.getAccountByEmail = function (email) {
        return this.http.get("/api/account/" + email);
    };
    AccountService.prototype.updateAccountByEmail = function (payload, email) {
        return this.http.post("/api/account/" + email, payload);
    };
    AccountService.prototype.createAccount = function (payload) {
        return this.http.post("/api/account", payload);
    };
    AccountService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], AccountService);
    return AccountService;
}());



/***/ }),

/***/ "./src/app/services/admin-service.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminServiceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__authentication_service__ = __webpack_require__("./src/app/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminServiceService = /** @class */ (function () {
    function AdminServiceService(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AdminServiceService.prototype.canActivate = function () {
        if (this.auth.Ifadmin()) {
            this.router.navigateByUrl('/home');
            return false;
        }
        return true;
    };
    AdminServiceService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__authentication_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], AdminServiceService);
    return AdminServiceService;
}());



/***/ }),

/***/ "./src/app/services/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authentication_service__ = __webpack_require__("./src/app/services/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function () {
        if (!this.auth.isLoggedIn()) {
            this.router.navigateByUrl('/');
            return false;
        }
        return true;
    };
    AuthGuardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__authentication_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "./src/app/services/authentication.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators_map__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http, router) {
        this.http = http;
        this.router = router;
    }
    AuthenticationService.prototype.saveToken = function (token) {
        localStorage.setItem('mean-token', token);
        this.token = token;
    };
    AuthenticationService.prototype.getToken = function () {
        if (!this.token) {
            this.token = localStorage.getItem('mean-token');
        }
        return this.token;
    };
    AuthenticationService.prototype.getUserDetails = function () {
        var token = this.getToken();
        var payload;
        if (token) {
            payload = token.split('.')[1];
            payload = window.atob(payload);
            return JSON.parse(payload);
        }
        else {
            return null;
        }
    };
    AuthenticationService.prototype.isLoggedIn = function () {
        var user = this.getUserDetails();
        if (user) {
            return user.exp > Date.now() / 1000;
        }
        else {
            return false;
        }
    };
    AuthenticationService.prototype.request = function (method, type, user) {
        var _this = this;
        var base;
        if (method === 'post') {
            base = this.http.post("/api/" + type, user);
        }
        else {
            base = this.http.get("/api/" + type, { headers: { Authorization: "Bearer " + this.getToken() } });
        }
        var request = base.pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators_map__["a" /* map */])(function (data) {
            if (data.token) {
                _this.saveToken(data.token);
            }
            return data;
        }));
        return request;
    };
    AuthenticationService.prototype.register = function (user) {
        return this.request('post', 'register', user);
    };
    AuthenticationService.prototype.login = function (user) {
        return this.request('post', 'login', user);
    };
    AuthenticationService.prototype.profile = function () {
        return this.request('get', 'profile');
    };
    AuthenticationService.prototype.logout = function () {
        this.token = '';
        window.localStorage.removeItem('mean-token');
        this.router.navigateByUrl('/');
    };
    AuthenticationService.prototype.Ifadmin = function () {
        var token = this.getToken();
        var payload;
        if (token) {
            payload = token.split('.')[1];
            payload = window.atob(payload);
            var ans = JSON.parse(payload);
            console.log(ans);
            if (ans.level == "admin")
                return true;
        }
        return false;
    };
    AuthenticationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/services/bookings.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return BookingsService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Booking; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BookingsService = /** @class */ (function () {
    function BookingsService(http) {
        this.http = http;
    }
    BookingsService.prototype.getBookingsByEmail = function (email) {
        return this.http.get("/api/booking/" + email);
    };
    BookingsService.prototype.createBooking = function (booking) {
        return this.http.post("/api/booking", booking);
    };
    BookingsService.prototype.setBooking = function (booking) {
        this.booking = booking;
    };
    BookingsService.prototype.getBooking = function () {
        return this.booking;
    };
    BookingsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], BookingsService);
    return BookingsService;
}());

var Booking = /** @class */ (function () {
    function Booking(pickupdate, dropoffdate, pickuploc, dropoffloc, price, carid, email, driverinfo) {
        this.pickupdate = pickupdate;
        this.dropoffdate = dropoffdate;
        this.pickuploc = pickuploc;
        this.dropoffloc = dropoffloc;
        this.price = price;
        this.carid = carid;
        this.email = email;
        this.driverinfo = driverinfo;
    }
    return Booking;
}());



/***/ }),

/***/ "./src/app/services/data-bus.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataBusService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataBusService = /** @class */ (function () {
    function DataBusService() {
        this.carValueUpdate = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["b" /* Subject */]();
        this.carSearchCondiUpdate = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["b" /* Subject */]();
    }
    DataBusService.prototype.setCarInfo = function (car) {
        this.carInfo = car;
        this.carValueUpdate.next(this.carInfo);
    };
    DataBusService.prototype.setSearchCondi = function (data) {
        this.searchCondi = data;
        this.carSearchCondiUpdate.next(this.searchCondi);
    };
    DataBusService.prototype.clearCarMessage = function () {
        // this.carInfo = null;
        this.carValueUpdate.next();
    };
    DataBusService.prototype.getSearchCondi = function () {
        return this.searchCondi;
    };
    DataBusService.prototype.getCarInfo = function () {
        return this.carInfo;
    };
    DataBusService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], DataBusService);
    return DataBusService;
}());



/***/ }),

/***/ "./src/app/services/favoritelist.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoritelistService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FavoritelistService = /** @class */ (function () {
    function FavoritelistService(http) {
        this.http = http;
    }
    FavoritelistService.prototype.getFavoritesByEmail = function (email) {
        return this.http.get("/api/favoritelist/" + email);
    };
    FavoritelistService.prototype.createFavorite = function (favorite) {
        return this.http.post("/api/favoritelist", favorite);
    };
    FavoritelistService.prototype.deleteFavorite = function (favorite) {
        return this.http.delete("/api/favoritelist/" + favorite.email + "&" + favorite.carid);
    };
    FavoritelistService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], FavoritelistService);
    return FavoritelistService;
}());



/***/ }),

/***/ "./src/app/services/product.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductService = /** @class */ (function () {
    // private dataObservable$ = new ReplaySubject(1);
    function ProductService(http) {
        this.http = http;
    }
    ProductService.prototype.getProductlist = function () {
        this.http.post("/api/carlists", {}).subscribe(function (data) {
            console.log(data);
        }, function (err) {
            console.log("Error occured.");
        });
        return null;
    };
    ProductService.prototype.getAllProduct = function () {
        console.log("sent request 1");
        return this.http.get('api/carlists');
    };
    ProductService.prototype.postCar = function (carInfor) {
        console.log('postCar begin - in productservice');
        this.http.post('/api/carlists', carInfor).subscribe(function (res) {
            console.log("get response after postcar");
            console.log(res);
        }, function (err) {
            console.log("Error occured when post car");
        });
        console.log('postCar finish - in productservice');
    };
    //search car by car id conditions
    ProductService.prototype.searchCarId = function (id) {
        return this.http.get("/api/car/" + id);
    };
    //search by several conditions
    // searchCarProduct():Observable<Car[]>{
    //   console.log("search!!!")
    //
    //   return this.http.get<Car[]>('/api/carlists/search');
    // }
    ProductService.prototype.searchCarProduct = function (pickPlace) {
        return this.http.get("/api/carlists/search/" + pickPlace);
    };
    ProductService.prototype.searchCarwithFilter = function (newOptions) {
        return this.http.get("/api/carlists/filter/" + newOptions.pickLocation + "&" + newOptions.priceMax + "&" + newOptions.priceMin + "&" + newOptions.carType + "&" + newOptions.passengerNumMax);
    };
    ProductService.prototype.createCar = function (car) {
        return this.http.post("/api/car", car);
    };
    ProductService.prototype.deleteCarById = function (id) {
        return this.http.delete("/api/car/" + id);
    };
    ProductService.prototype.putCar = function (car) {
        console.log('enter productservice putcar and car infor is:\n');
        console.log(car);
        return this.http.put("/api/car", car);
    };
    ProductService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ProductService);
    return ProductService;
}());



/***/ }),

/***/ "./src/app/welcome/welcome.component.css":
/***/ (function(module, exports) {

module.exports = ".bg{\n  background-image: url('welcome-car3.f94f22ce0bdfba765133.jpg');\n\n  /* Full height */\n  height: 100%;\n\n  /* Center and scale the image nicely */\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.search{\n  margin-left: 35%;\n  margin-right: 35%;\n  padding-top: 10%;\n}\n"

/***/ }),

/***/ "./src/app/welcome/welcome.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"bg\">\n  <div class=\"search\">\n    <app-search-welcome></app-search-welcome>\n  </div>\n</div>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/welcome/welcome.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WelcomeComponent = /** @class */ (function () {
    function WelcomeComponent() {
    }
    WelcomeComponent.prototype.ngOnInit = function () {
    };
    WelcomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-welcome',
            template: __webpack_require__("./src/app/welcome/welcome.component.html"),
            styles: [__webpack_require__("./src/app/welcome/welcome.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WelcomeComponent);
    return WelcomeComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_hammerjs__ = __webpack_require__("./node_modules/hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("./src/environments/environment.ts");





if (__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map