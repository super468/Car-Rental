import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class BookingsService {

  constructor(private http:HttpClient) { }

  getBookingsByEmail(email:string){
    return this.http.get(`/api/booking/${email}`);

  }

  getUpcBooking(): Booking{
    return new Booking(
      'bookingid',
      '2017-08-1',
      '2017-08-04',
      'DFW',
      'DFW',
      355,
      'carid',
      'useid'
    );
  }
  getPastBooking(): Booking{
    return new Booking(
      'bookingid',
      '2017-01-1',
      '2017-01-04',
      'DFW',
      'DFW',
      255,
      'carid',
      'useid'
    );
  }

  getCncldBooking(): Booking{
    return new Booking(
      'bookingid',
      '2017-04-1',
      '2017-04-04',
      'DFW',
      'DFW',
      333,
      'carid',
      'useid'
    );
  }
}

export class Booking{

  _id:string;
  pickupdate:string;
  dropoffdate:string;
  pickuploc:string;
  dropoffloc:string;
  price:number;
  carid:string;
  email:string;

  constructor(
    _id:string,
    pickupdate:string,
    dropoffdate:string,
    pickuploc:string,
    dropoffloc:string,
    price:number,
    carid:string,
    email:string
  ){
    this._id = _id;
    this.pickupdate = pickupdate;
    this.dropoffdate =dropoffdate;
    this.pickuploc = pickuploc;
    this.dropoffloc = dropoffloc;
    this.price = price;
    this.carid = carid;
    this.email = email;
  }


}
