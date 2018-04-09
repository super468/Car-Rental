import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {HomeComponent} from "./home/home.component";
import {RegisterComponent} from "./register/register.component";
import {ProfileComponent} from "./profile/profile.component";
import {AuthGuardService} from "./services/auth-guard.service";
import {WelcomeComponent} from "./welcome/welcome.component";


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
    canActivate: [AuthGuardService]
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
