export class car {
        public id: number;
        public model: string;
        public image: string;
        public people: number;
        public luggage: number;
        public AC: string;
        public Transmission: string;
        public PickupLoc: string;
        public Price: number;

}

export const CARES = [
  {
      id: 1,
      model: 'Nissan Versa',
      image: 'https://www.autoescape.com//images-new/cr_legacy/cartypes.carrentals/default/car_CCAR.jpg',
      people: 5,
      luggage: 2,
      AC:'Yes',
      Transmission: 'Auto',
      PickupLoc: 'DALLAS LOVE FIELD - Dallas Love Field',
      Price: 16
    },
    {
        id: 2,
        model: 'Nissan Versa',
    image: 'https://www.autoescape.com/images-new/cars/nissan/nissan_versa_brl_287x164.jpg',
    people: 5,
    luggage: 2,
    AC: 'Yes',
    Transmission: 'Auto',
    PickupLoc: 'Services Dallas Love Field',
    Price: 20
    }
];
