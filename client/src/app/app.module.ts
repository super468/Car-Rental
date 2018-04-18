import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { MatTabsModule } from '@angular/material/tabs';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './/app-routing.module';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import {AuthenticationService} from "./services/authentication.service";
import {AuthGuardService} from "./services/auth-guard.service";
import {HttpClientModule} from "@angular/common/http";
import { SearchComponent } from './search/search.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { FilterComponent } from './filter/filter.component';
import { CarlistsComponent } from './carlists/carlists.component';
import { SearchWelcomeComponent } from './search-welcome/search-welcome.component';
import { BookingsComponent } from './bookings/bookings.component';
import { AccountComponent } from './account/account.component';
import {BookingsService} from "./services/bookings.service";
import {AccountService} from "./services/account.service";
import { FavoritelistComponent } from './favoritelist/favoritelist.component';
import {ProductService} from "./services/product.service";
import { PaginationComponent } from './pagination/pagination.component';
import { CardComponent } from './card/card.component';
import { BookingdetailComponent } from './bookingdetail/bookingdetail.component';
import { AdmincontrolpanelComponent } from './admincontrolpanel/admincontrolpanel.component';
import { DeletedialogComponent } from './deletedialog/deletedialog.component';
import {AngularSvgIconModule} from 'angular-svg-icon';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    RegisterComponent,
    ProfileComponent,
    SearchComponent,
    WelcomeComponent,
    FilterComponent,
    CarlistsComponent,
    SearchWelcomeComponent,
    BookingsComponent,
    AccountComponent,
    FavoritelistComponent,
    PaginationComponent,
    CardComponent,
    BookingdetailComponent,
    CardComponent,
    AdmincontrolpanelComponent,
    DeletedialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatTabsModule,
    AngularSvgIconModule
  ],
  providers: [
    AuthenticationService,
    AuthGuardService,
    BookingsService,
    AccountService,
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
