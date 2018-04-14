import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import "rxjs/Rx";
import {Car} from "../class/user";
import {map} from "rxjs/operators/map";
import {ReplaySubject} from "rxjs/ReplaySubject";


@Injectable()
export class ProductService {

  // private dataObservable$ = new ReplaySubject(1);


  constructor(private http:HttpClient) { }

  getProductlist(): Observable<Car[]>{
    this.http.post<Car[]>("/api/carlists", {}).subscribe(data => {
      console.log(data);
    },
      err => {
        console.log("Error occured.")

      });
    return null;
  }


  getProduct():Observable<Car[]>{
    console.log("sent request 1")

    return this.http.get<Car[]>('/api/carlists');
    // this.http.post('/api/carlists', {
    //   id: '1'
    // })
    //   .subscribe(
    //
    //     res => {
    //       console.log("get response");
    //       console.log(res);
    //     },
    //     err => {
    //       console.log("Error occured");
    //     }
    //   );
    // console.log("sent request 2")

    // let base = this.http.get('／api/carlists').map(data => _.values(data))
    //   .do(console.log);
    // ;
    //
    // const request = base;


    // console.log(request);

  }



}
