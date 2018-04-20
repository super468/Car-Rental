import { Injectable } from '@angular/core';

import {Subject} from "rxjs/Subject";
import {Car} from "../class/car";
import {Observable} from "rxjs/Observable";


@Injectable()
export class DataBusService {

  carInfo: Car;
  carValueUpdate:Subject<Car> = new Subject<Car>();

  constructor() { }

  setCarInfo(car:Car){

    this.carInfo = car;
    this.carValueUpdate.next(this.carInfo);

  }

  clearMessage() {
    // this.carInfo = null;
    this.carValueUpdate.next();
  }


  getCarInfo():Car{
    return this.carInfo;
  }

}
