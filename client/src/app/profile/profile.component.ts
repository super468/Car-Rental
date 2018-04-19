import { Component, OnInit } from '@angular/core';
import {AuthenticationService, UserDetails} from "../services/authentication.service";
import * as $ from "jquery";
import {favorite, FavoritelistService} from "../services/favoritelist.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  details: UserDetails;
  constructor(private auth: AuthenticationService) {
    this.auth.profile().subscribe(user => {
      this.details = user;
    }, (err) => {
      console.error(err);
    });

  }

  ngOnInit() {
    //console.log(this.auth.Ifadmin());

  }

  onclick(event){
    $('li').removeClass("active");
    event.target.className='list-group-item active';
    console.log(event.target);
  }


}
