import { Component, OnInit } from '@angular/core';
import {Booking, BookingsService} from "../services/bookings.service";
import * as $ from 'jquery';
@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {

  constructor(private BookingService:BookingsService) { }

  ngOnInit() {

  }

  openCity(cityName) {
    // var i, tabcontent, tablinks;
    // tabcontent = $(".tabcontent");
    // for (i = 0; i < tabcontent.length; i++) {
    //   tabcontent[i].style.display = "none";
    // }
    // tablinks = $(".tablinks");
    // for (i = 0; i < tablinks.length; i++) {
    //   tablinks[i].className = tablinks[i].className.replace(" active", "");
    // }
    // $("cityName").style.display = "block";
    // evt.currentTarget.className += " active";
    alert(cityName);
    $("p").html(cityName);

  }



}
