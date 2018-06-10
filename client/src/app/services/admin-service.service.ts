import { Injectable } from '@angular/core';
import {AuthenticationService} from "./authentication.service";
import {Router} from "@angular/router";

@Injectable()
export class AdminServiceService {

  constructor(private auth: AuthenticationService, private router: Router) {

  }

  canActivate() {
    if (this.auth.Ifadmin()) {
      this.router.navigateByUrl('/home');
      return false;
    }
    return true;
  }

}
