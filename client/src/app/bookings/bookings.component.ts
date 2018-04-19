import {Component, Input, OnInit} from '@angular/core';
import {Booking, BookingsService} from "../services/bookings.service";
import * as $ from 'jquery';
import {AuthenticationService} from "../services/authentication.service";
import {ActivatedRoute} from "@angular/router";
@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {
  private bookings:Booking[];
  email:string;
  constructor(private BookingService:BookingsService,private routerIonfo:ActivatedRoute) {

    this.email=this.routerIonfo.snapshot.queryParams["email"];

  }

  ngOnInit() {
    this.BookingService.getBookingsByEmail(this.email).subscribe(
      (data:any) =>{
        this.bookings = data;
        console.log(this.bookings);
      },(err)=>{
        console.log(err);
      }
    );

  }
}
