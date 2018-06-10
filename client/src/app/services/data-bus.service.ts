import { Injectable } from '@angular/core';

import {Subject} from "rxjs/Subject";
import {Car} from "../class/car";
import {Observable} from "rxjs/Observable";


@Injectable()
export class DataBusService {

  carInfo: Car;
  searchCondi:string[];
  carValueUpdate:Subject<Car> = new Subject<Car>();
  carSearchCondiUpdate:Subject<string[]> = new Subject<string[]>();

  constructor() { }

  setCarInfo(car:Car){

    this.carInfo = car;
    this.carValueUpdate.next(this.carInfo);

  }

  setSearchCondi(data:string[]){

    this.searchCondi = data;
    this.carSearchCondiUpdate.next(this.searchCondi);

  }

  clearCarMessage() {
    // this.carInfo = null;
    this.carValueUpdate.next();
  }

  getSearchCondi():string[]{
    return this.searchCondi;
  }

  getCarInfo():Car{
    return this.carInfo;
  }

}
