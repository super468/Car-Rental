import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {ProductService} from "../services/product.service";
import {HttpClient} from "@angular/common/http";
import {Car} from "../class/user";

@Component({
  selector: 'app-carlists',
  templateUrl: './carlists.component.html',
  styleUrls: ['./carlists.component.css']
})
export class CarlistsComponent implements OnInit {

  //****for paginate

  loading = false;
  total = 0;
  page = 1;
  limit = 2;
  // end for paginate

  cars: Car[];
  showinglist:Car[];


  constructor(private carService:ProductService) {
  }


  ngOnInit(){
    this.getCarlists();
  }

  // getMessages(): void {
  getCarlists(){
    this.loading = true;

    this.carService.getProduct().subscribe(res => {
      this.cars = res;
      this.total = res.length;
      this.showinglist = this.cars.slice(0, this.limit);
      this.page = 1;
      this.loading = false;
    });
    console.log(this.cars.length);
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
    this.page = n;

    this.showinglist = this.cars.slice(this.getFrom(), this.getTo());
  }

  onNext(): void {
    this.page++;
    this.showinglist = this.cars.slice(this.getFrom(), this.getTo());

  }

  onPrev(): void {
    this.page--;
    this.showinglist = this.cars.slice(this.getFrom(), this.getTo());
  }


}
