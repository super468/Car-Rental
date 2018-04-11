import { Component, OnInit } from '@angular/core';
import {Booking, BookingsService} from "../services/bookings.service";

@Component({
  selector: 'app-upcbookings',
  templateUrl: './upcbookings.component.html',
  styleUrls: ['./upcbookings.component.css']
})
export class UpcbookingsComponent implements OnInit {

  private booking:Booking;

  constructor(private BookingService: BookingsService) { }

  ngOnInit() {
    this.booking = this.BookingService.getUpcBooking();
  }

}
