import { Injectable } from '@angular/core';

@Injectable()
export class BookingsService {

  constructor() { }

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
  constructor(
    public _id:string,
    public pickupdate:string,
    public dropoffdate:string,
    public pickuploc:string,
    public dropoffloc:string,
    public price:number,
    public carid:string,
    public user_id:string
  ){

  }
}
