import {Component, DoCheck, OnInit} from '@angular/core';
import {AuthenticationService, TokenPayload} from "../services/authentication.service";
import {AccountDetail, AccountPayload, AccountService, PassWord} from "../services/account.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  states = [
    { state:'TX'},
    { state:'CA'},
    { state:'NY'}
  ];

  private email:string;
  private account:AccountDetail = new AccountDetail('','','','','','','','',undefined);
  private payload:AccountPayload;
  private password:PassWord = new PassWord('','');
  private flag:boolean;
  // credentials: TokenPayload = {
  //   email: this.email
  // };

  constructor(private auth:AuthenticationService, private acc: AccountService, private router: Router) {


    this.auth.profile().subscribe(user => {
      this.email = user.email;
      this.acc.getAccountByEmail(this.email).subscribe(
        data => {
          if(data!= null){
            this.flag = true;
            this.account = data
          }
          else{
            this.flag = false;
          }
        },
        err => console.error(err),
        () => console.log(this.account)
      );
    }, (err) => {
      console.error(err);
    });

  }

  onSubmit(){
    this.payload = new AccountPayload(
      this.email,
      this.account.name,
      this.account.phone,
      this.account.address1,
      this.account.address2,
      this.account.city,
      this.account.state,
      this.account.zip
      );
    console.log(this.payload);
    if(this.flag == true){
      this.acc.updateAccountByEmail(this.payload,this.email).subscribe(() => {
        this.router.navigateByUrl('/profile');
      }, (err) => {
        console.error(err);
      });
    }
    else {
      this.acc.createAccount(this.payload).subscribe(() => {
        this.router.navigateByUrl('/profile');
      }, (err) => {
        console.error(err);
      });
    }

  }

  ngOnInit() {

  }

}
