import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import "rxjs/Rx";
import {Car} from "../class/car";
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


  getAllProduct():Observable<Car[]>{
    console.log("sent request 1");

    return this.http.get<Car[]>('/api/carlists');
  }

  postCar(carInfor:Car):void {

    console.log('postCar begin - in productservice');
  this.http.post('/api/carlists', carInfor).subscribe(
    res => {
        console.log("get response after postcar");
        console.log(res);
      },
      err => {
        console.log("Error occured when post car");
      }
    );
    console.log('postCar finish - in productservice');
  }

  //search car by car id conditions
  searchCarId(id:string){
    return this.http.get(`/api/car/${id}`);
  }

  //search by several conditions
  // searchCarProduct():Observable<Car[]>{
  //   console.log("search!!!")
  //
  //   return this.http.get<Car[]>('/api/carlists/search');
  // }

  searchCarProduct(pickPlace:string): Observable<Car[]>{
     return this.http.get<Car[]>(`/api/carlists/search/${pickPlace}`);

  }

  createCar(car:Car){
    return this.http.post(`/api/car`,car);
  }

  deleteCarById(id:string){
    return this.http.delete(`/api/car/${id}`);
  }

  putCar(car:Car){
    console.log('enter productservice putcar and car infor is:\n');
    console.log(car);
    return this.http.put(`/api/car`,car);
  }
}
