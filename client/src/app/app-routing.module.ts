import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {HomeComponent} from "./home/home.component";
import {RegisterComponent} from "./register/register.component";
import {ProfileComponent} from "./profile/profile.component";
import {AuthGuardService} from "./services/auth-guard.service";
import {WelcomeComponent} from "./welcome/welcome.component";
import {BookingsComponent} from "./bookings/bookings.component";
import {AccountComponent} from "./account/account.component";
import {UpcbookingsComponent} from "./upcbookings/upcbookings.component";
import {PastbookingsComponent} from "./pastbookings/pastbookings.component";
import {CncldbookingsComponent} from "./cncldbookings/cncldbookings.component";
import {SearchWelcomeComponent} from "./search-welcome/search-welcome.component";
import {FavoritelistComponent} from "./favoritelist/favoritelist.component";
import {BookingdetailComponent} from "./bookingdetail/bookingdetail.component";


const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },{
    path: 'register',
    component: RegisterComponent
  },{
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuardService],
    children:[
      {
        path: 'bookings',
        component: BookingsComponent,
        children:[
          {
            path: 'upcbookings',
            component: UpcbookingsComponent,
          },
          {
            path: 'pastbookings',
            component: PastbookingsComponent,
          },
          {
            path: 'cncldbookings',
            component: CncldbookingsComponent,
          }
        ]
      },
      {
        path: 'account',
        component: AccountComponent
      },
      {
        path: 'favoritelist',
        component: FavoritelistComponent
      }
    ]
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'bookingdetail',
    component: BookingdetailComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [ RouterModule ]
})
export class AppRoutingModule {

}
