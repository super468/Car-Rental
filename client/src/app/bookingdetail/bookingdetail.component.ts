import { Component, OnInit } from '@angular/core';
import {NgModel} from "@angular/forms";
import {BookingsService} from "../services/bookings.service";

@Component({
  selector: 'app-bookingdetail',
  templateUrl: './bookingdetail.component.html',
  styleUrls: ['./bookingdetail.component.css']
})
export class BookingdetailComponent implements OnInit {

  driverinfo:driverinfo = new driverinfo('','','','');
  price:pricedetail = new pricedetail(3,26.99,5.49,8.96,6.99,48.09,64.28, 591.32);
  pricepayload:pricedetail = new pricedetail(3,26.99,5.49,8.96,6.99,48.09,64.28, 591.32);
  ls:boolean=false;
  checkboxValue:boolean=false;

  constructor(private bookingservice:BookingsService) {

  }

  ngOnInit() {
    this.price.total = (this.price.base + this.price.tax) * this.price.day;
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

export class driverinfo{
  constructor(
    firstname:string,
    lastname:string,
    email:string,
    phone:string
  ){

  }
}
