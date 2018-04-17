

export class User {

  constructor(
    public id: number,
    public name: string,
    public email: string,
    public password: string
  ) {  }

}

export class Car {
  // public _id:string;

  constructor(
    public name:string,
    public type:string,
    public passengers:number,
    public price:number,
    public luggage:number,
    public isAuto:boolean,
    public ACsup:boolean,
    public pickuploc:string,
    public insurance:number,
    public imageName:string,
    public isavailable:boolean
  ) {  }
}


export class Boooking {
  // public _id:string;

  constructor(
    public car_ID:string,
    public startDate:Date,
    public finishDate:Date,
    public pickupLocation:string,
    public returnLocation:string
  ) {  }
}
