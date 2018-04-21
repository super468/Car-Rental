import {Component, Input, OnInit} from '@angular/core';
import {Booking, BookingsService} from "../services/bookings.service";
import * as $ from 'jquery';
import {AuthenticationService} from "../services/authentication.service";
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../services/product.service";
import {Car} from "../class/car";
@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {
  private bookings:Booking[]=[];
  email:string;
  cars:Car[]=[];
  singlearray:any[]=[];
  constructor(private BookingService:BookingsService,private routerIonfo:ActivatedRoute, private prdservice:ProductService) {

    this.email=this.routerIonfo.snapshot.queryParams["email"];

  }

  ngOnInit() {
    this.BookingService.getBookingsByEmail(this.email).subscribe(
      (data:any) =>{
        this.bookings = data;
        for(let booking of this.bookings){
          this.prdservice.searchCarId(booking.carid).subscribe(
            (car:any)=>{
              console.log(car);
              this.singlearray.push({
                booking:booking,
                car:car
              })

            },(err)=>{
              console.log(err);
            }
          );
        }
        // for(let i = 0; i < this.bookings.length; i++){
        //   this.singlearray.push(
        //     {
        //       booking:this.bookings[i],
        //       car:this.cars[i]
        //     }
        //   )
        // }
        //console.log(this.bookings);
      },(err)=>{
        console.log(err);
      }
    );



  }
}
