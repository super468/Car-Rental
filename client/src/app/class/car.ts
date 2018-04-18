

export class Car {

  constructor(
    public name:string,
    public type:string,
    public passengers:number,
    public price:number,
    public luggage:number,
    public isAuto:boolean,
    public ACsup:boolean,
    public pickupLoc:string,
    public insurance:number,
    public imageName:string,
    public isavailable:boolean,
    public _id?:string
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
  ) {}
}
// export const CARS = [
//   {
//     name: 'Nissan Altima',
//     type: 'Standard',
//     imageName: '/assets/carimages/nissan_altima_standard_brl_287x164.jpg',
//     passengers: 5,
//     luggage: 2,
//     price: 40.00,
//     ACsup:true,
//     isAuto: true,
//     pickupLoc: 'DALLAS LOVE FIELD - Dallas Love Field',
//     isavailable:true,
//     insurance:10.00
//   },
//   {
//     name: 'Chevrolet Sonica',
//     type: 'Economy',
//     imageName: '/assets/carimages/chevrolet_sonic_economy_brl_287x164.jpg',
//     passengers: 5,
//     luggage: 2,
//     price: 40.00,
//     ACsup:true,
//     isAuto: true,
//     pickupLoc: 'Plano high school',
//     isavailable:true,
//     insurance:10.00
//   }
// ];
