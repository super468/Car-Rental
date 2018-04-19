import { Component, OnInit,Input } from '@angular/core';
import {ProductService} from "../services/product.service";
import {Car} from "../class/car";


@Component({
  selector: 'app-carlists',
  templateUrl: './carlists.component.html',
  styleUrls: ['./carlists.component.css']
})
export class CarlistsComponent implements OnInit {

  selected: number = -1;//the selected card index;
  isAdmin:boolean = true;// true:if user is admin;
  showCards:boolean = true;
  //****for paginate

  loading = false;
  total = 0;
  page = 1;
  limit = 4  ;
  // end for paginate

  cars: Car[];
  showinglist:Car[];
  selectedCar_p: Car;

  searchCars: Car[];

  @Input() public pickPlace:string;


  constructor(private carService:ProductService) {
  }


  ngOnInit(){
    console.log("carlist recieved!!~~");

    this.searchCarlists();

  }

  footerRun(pickplace:string){
    this.pickPlace = pickplace;
    console.log("carlist run");
    this.searchCarlists();
  }

  searchCarlists(){
    this.loading = true;
    this.carService.searchCarProduct(this.pickPlace).subscribe(res=>{
      this.cars = res;
      this.total = res.length;
      this.showinglist = this.cars.slice(0, this.limit);
      this.page = 1;
      //init the selected status and seleted Car info for adminControl
      this.selected = -1;
      this.selectedCar_p = null;

      this.loading = false;
      console.log(this.searchCars);
      },error1 => {
         "search error!!!!!!"
      }

    );
  }

  // getMessages(): void {
  getCarlists(){
    this.loading = true;

    this.carService.getAllProduct().subscribe(res => {
      this.cars = res;
      this.total = res.length;
      this.showinglist = this.cars.slice(0, this.limit);
      this.page = 1;
      //init the selected status and seleted Car info for adminControl
      this.selected = -1;
      this.selectedCar_p = null;

      this.loading = false;
      console.log('resquest');
      console.log(this.cars);
    });
  }


  // postCarInfo(){
  //   let car1:Car = new Car("new car1111","new type",
  // 5, 23.11, 3, true, true,  'Dallas love field',
  // 15, "/assets/carimages/chevrolet_tahoe_suv_brl_287x164.jpg", true);
  //   this.carService.postCar(car1);
  //   console.log('postCarInfo finish - in carlist');
  //
  // }

  onSelect(e){
    if(e != this.selected){
      this.selected = e;
      this.selectedCar_p = this.showinglist[e];
      console.log("index:"+ e +" _id:" +this.showinglist[e]._id);
    }
    else{
      this.selected = -1;
      this.selectedCar_p = null;
    }


  }
  getFrom(): number {
    return ((this.limit * this.page) - this.limit);
  }

  getTo(): number {
    let max = this.limit * this.page;
    if (max > this.total) {
      max = this.total;
    }
    return max;
  }

  goToPage(n: number): void {
    if(this.page != n){
      this.selected = -1;
      this.selectedCar_p = null;
      this.page = n;
      this.showinglist = this.cars.slice(this.getFrom(), this.getTo());
    }

  }

  onNext(): void {
    this.page++;

    this.selected = -1;
    this.selectedCar_p = null;
    this.showinglist = this.cars.slice(this.getFrom(), this.getTo());

  }

  onPrev(): void {
    this.page--;
    this.selected = -1;
    this.selectedCar_p = null;
    this.showinglist = this.cars.slice(this.getFrom(), this.getTo());
  }


}
