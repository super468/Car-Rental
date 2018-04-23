import { Component, OnInit } from '@angular/core';
import {NgModel} from "@angular/forms";
import {Booking, BookingsService} from "../services/bookings.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Car} from "../class/car";
import {DataBusService} from "../services/data-bus.service";
import {AuthenticationService} from "../services/authentication.service";

@Component({
  selector: 'app-bookingdetail',
  templateUrl: './bookingdetail.component.html',
  styleUrls: ['./bookingdetail.component.css']
})
export class BookingdetailComponent implements OnInit {
  driverinfo:driverinfo = {
    firstname:'',
    lastname:'',
    email:'',
    phone:''
  };
  // price:pricedetail = new pricedetail(3,26.99,5.49,8.96,6.99,48.09,64.28, 0);
  price:pricedetail;
  //pricepayload:pricedetail = new pricedetail(3,26.99,5.49,8.96,6.99,48.09,64.28, 591.32);
  booking:Booking = new Booking('2018-01-01','2018-01-02','DFW','DFW',0,'1','a@a.com',this.driverinfo);

  car:Car;
  searchInfo:string[];


  constructor(private bookingservice:BookingsService,private router: Router, private dataBus:DataBusService, private auth:AuthenticationService) {
      this.car = this.dataBus.getCarInfo();

      this.price = new pricedetail(3,26.99,5.49,8.96,6.99,48.09,64.28, 0);
      this.price.base = this.car.price;
      this.price.total = this.price.base * this.price.day + this.price.tax;

      this.searchInfo = this.dataBus.getSearchCondi();
    console.log(this.searchInfo);
    this.dataBus.carValueUpdate.subscribe(
      (val)=> {
        this.car = this.dataBus.getCarInfo();

        this.price.base = this.car.price;
        // console.log(this.price.base);
        // this.price.day = 3;
        // this.price.sli = 20;
        // this.price.erp =9.99;
        // this.price.loss =8.88;
        // this.price.tax =48.25;


        console.log(this.price.total);
        console.log('---init--get--car');
        console.log(this.car);
      },(err)=>{
        console.log(err);
      }
    );

  }

  ngOnInit() {
    //this.price.total = (this.price.base + this.price.tax) * this.price.day;

    this.dataBus.carSearchCondiUpdate.subscribe(
      (val)=> {this.searchInfo = this.dataBus.getSearchCondi();
        console.log('---init--get--search Info');
        console.log(this.searchInfo);
      }
    );
  }

//   ngAfterContentChecked(){
//     this.car = this.dataBus.getCarInfo();
//     console.log('---ngAfterContentChecked');
//     console.log(this.car);
//
// }

  onchange(event){
    if(event.target.checked){
      this.price.total += event.target.value * this.price.day;
    }
    else{
      this.price.total -= event.target.value * this.price.day;
    }
  }

  onclick(){
    this.booking.driverinfo = this.driverinfo;
    this.booking.carid = this.car._id;
    this.booking.pickuploc =this.car.pickupLoc;
    this.booking.dropoffloc = this.searchInfo[1];
    this.booking.pickupdate = this.searchInfo[2]+' '+this.searchInfo[3];
    this.booking.dropoffdate = this.searchInfo[4]+' '+this.searchInfo[5];
    if(this.auth.isLoggedIn()){
      this.booking.email = this.auth.getUserDetails().email;
    }
    this.booking.price = this.price.total;
    console.log(this.booking);
    this.bookingservice.createBooking(this.booking).subscribe(
      (data)=>{
        console.log(data);
        this.router.navigateByUrl('/home');

      },
      (err)=>{
        console.log(err);
      }
    );
  }
}


export class pricedetail{
  day:number;
  loss:number;
  pap:number;
  sli:number;
  erp:number;
  tax:number;
  base:number;
  total:number;

  constructor(
    day:number,
  loss:number,
  pap:number,
  sli:number,
  erp:number,
  tax:number,
  base:number,
  total:number
  ){
    this.day=day;
    this.loss=loss;
    this.pap=pap;
    this.sli=sli;
    this.erp=erp;
    this.tax=tax;
    this.base=base;
    this.total=total;
  }
}

export interface driverinfo{
    firstname:string,
    lastname:string,
    email:string,
    phone:string
}
