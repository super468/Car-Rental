import { Component, OnInit } from '@angular/core';
import {AuthenticationService, UserDetails} from "../services/authentication.service";
import { trigger, state, transition, style, animate } from '@angular/animations'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
      trigger('visibilityChanged', [
      state('shown', style({ opacity: 1 })),
      state('hidden', style({ opacity: 0 })),
      transition('shown => hidden', animate('1000ms')),
      transition('hidden => shown', animate('1500ms')),
    ])
  ]
})
export class HeaderComponent implements OnInit {
  details: UserDetails;
  imgSrc = "/assets/XXAR_800x400.png";
  imgs:string[] = ["/assets/XXAR_800x400.png",'/assets/carcool.png'];

  i = 0;
  visiblityState = 'shown';

  constructor(public auth:AuthenticationService) { }

  ngOnInit() {
    this.auth.profile().subscribe(user => {
      this.details = user;
    }, (err) => {
      console.error(err);
    });

    this.resetImg();
  }

  // changeImg(){
  //   this.i = (this.i + 1)%2;
  //   this.imgSrc = this.imgs[this.i];
  // }

  changeImg() {
    this.i = (this.i + 1)%2;

    if (this.visiblityState === 'hidden')
      this.visiblityState = 'shown';
    else
      this.visiblityState = 'hidden';
    setTimeout(()=>{ this.imgSrc = this.imgs[this.i]; this.visiblityState = 'shown';}, 1000);

  }

  resetImg(){
    this.imgSrc = this.imgs[0];
    this.i = 0;
    this.visiblityState = 'shown'
  }
}
