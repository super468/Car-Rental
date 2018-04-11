import { Component, OnInit } from '@angular/core';
import {Booking, BookingsService} from "../services/bookings.service";

@Component({
  selector: 'app-pastbookings',
  templateUrl: './pastbookings.component.html',
  styleUrls: ['./pastbookings.component.css']
})
export class PastbookingsComponent implements OnInit {

  private booking:Booking;

  constructor(private BookingService: BookingsService) { }

  ngOnInit() {
    this.booking = this.BookingService.getPastBooking();
  }

}
