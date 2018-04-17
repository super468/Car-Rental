import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import "rxjs/Rx";
import {Observable} from "rxjs/Observable";

export class AccountDetail{

  _id:string;
  email:string;
  name:string;
  phone:string;
  address1:string;
  address2:string;
  city:string;
  state:string;
  zip:number;

  constructor(
  _id:string,
  email:string,
  name:string,
  phone:string,
  address1:string,
  address2:string,
  city:string,
  state:string,
  zip:number
  ){
    this._id = _id;
    this.email =email;
    this.name = name;
    this.phone = phone;
    this.address1 = address1;
    this.address2 = address2;
    this.city = city;
    this.state =state;
    this.zip = zip;

  }

}

interface TokenResponse {
  token: string;
}

export class AccountPayload {

  name:string;
  phone:string;
  address1:string;
  address2:string;
  city:string;
  state:string;
  zip:number;

  constructor(
  name:string,
  phone:string,
  address1:string,
  address2:string,
  city:string,
  state:string,
  zip:number
  ){

    this.name = name;
    this.phone = phone;
    this.address1 = address1;
    this.address2 = address2;
    this.city = city;
    this.state =state;
    this.zip = zip;
  }


}

export class PassWord{
  constructor(
    currentpassword:string,
    newpassword:string
  ){

}
}

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class AccountService {

  constructor(private http:HttpClient) {}

  getAccountByEmail(email:string):Observable<any> {
    return this.http.get(`/api/account/${email}`);
  }

  updateAccountByEmail(payload:AccountPayload,email:string):Observable<any>{
    return this.http.post(`/api/account/${email}`,payload);
  }

}
