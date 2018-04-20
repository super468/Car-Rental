import { Component, OnInit } from '@angular/core';
import {NgModel} from "@angular/forms";
import {Booking, BookingsService} from "../services/bookings.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Car} from "../class/car";
import {DataBusService} from "../services/data-bus.service";

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
  price:pricedetail = new pricedetail(3,26.99,5.49,8.96,6.99,48.09,64.28, 591.32);
  pricepayload:pricedetail = new pricedetail(3,26.99,5.49,8.96,6.99,48.09,64.28, 591.32);
  booking:Booking = new Booking('2018-01-01','2018-01-02','DFW','DFW',0,'1','a@a.com',this.driverinfo);

  car:Car;


  constructor(private bookingservice:BookingsService,private router: Router, private dataBus:DataBusService) {
      this.car = this.dataBus.getCarInfo();
  }

  ngOnInit() {
    this.price.total = (this.price.base + this.price.tax) * this.price.day;

    this.dataBus.carValueUpdate.subscribe(
      (val)=> {this.car = this.dataBus.getCarInfo();
        console.log('---init--get--car');
        console.log(this.car);
      }
    );
  }

  ngAfterContentChecked(){
    this.car = this.dataBus.getCarInfo();
    console.log('---ngAfterContentChecked');
    console.log(this.car);

}

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
    console.log(this.booking);
    this.booking.price = this.price.total;
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
