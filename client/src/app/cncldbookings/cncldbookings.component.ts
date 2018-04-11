import { Component, OnInit } from '@angular/core';
import {Booking, BookingsService} from "../services/bookings.service";

@Component({
  selector: 'app-cncldbookings',
  templateUrl: './cncldbookings.component.html',
  styleUrls: ['./cncldbookings.component.css']
})
export class CncldbookingsComponent implements OnInit {

  private booking:Booking;

  constructor(private BookingService: BookingsService) { }

  ngOnInit() {
    this.booking = this.BookingService.getCncldBooking();
  }


}
