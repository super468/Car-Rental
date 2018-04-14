export class User {

  constructor(
    public id: number,
    public name: string,
    public email: string,
    public password: string
  ) {  }

}

export class Car {

  constructor(
    public name:string,
    public type:string,
    public passengers:number,
    public price:number,
    public luggage:number,
    public isAuto:boolean,
    public ACsup:boolean,
    public pickuploc:string
  ) {  }
}
