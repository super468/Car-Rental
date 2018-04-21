import {Component, Input, OnInit} from '@angular/core';
import {Car} from "../class/car";
import {favorite, FavoritelistService} from "../services/favoritelist.service";
import {AuthenticationService} from "../services/authentication.service";
import {forEach} from "@angular/router/src/utils/collection";
import {Booking, BookingsService} from "../services/bookings.service";
import {driverinfo} from "../bookingdetail/bookingdetail.component";
import {DataBusService} from "../services/data-bus.service";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{

  @Input() public car: Car;
  @Input() public favorites: favorite[];

  ngOnInit(): void {
    for(let car of this.favorites){
      if(car.carid == this.car._id){
        this.check = true;
        break;
      }
    }
  }


  favorite:favorite;
  email:string;
  check:any = false;
  booking: Booking;
  constructor(private dataBus:DataBusService, private favoritelist:FavoritelistService,private auth:AuthenticationService,private bookingservice:BookingsService){
    if(this.auth.isLoggedIn()){
      this.email = this.auth.getUserDetails().email;
    }

  }

  onchange(event){
    this.favorite ={
      email:this.email,
      carid:this.car._id
    };
    console.log(this.car.name);
    if(event.target.checked){
      console.log("checked");
      this.favoritelist.createFavorite(this.favorite).subscribe(
        (data)=>{
          console.log(data);
        },
        (err)=>{
          console.log(err);
        }
      );
    }else {
      console.log("unchecked");
      this.favoritelist.deleteFavorite(this.favorite).subscribe(
        (data)=>{
          console.log(data);
        },(err)=>{
          console.log(err);
        }
      )
    }
  }

  onclick(){
    // this.booking = new Booking('','','')
    // this.bookingservice.setBooking(this.booking);
    console.log(this.car.name);
  }

  btnContinueClick() {

    this.dataBus.setCarInfo(this.car);
    console.log('car set carinfor to databus');
  }
}
