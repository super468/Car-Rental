import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../services/product.service";
import {Car} from "../class/car";

@Component({
  selector: 'app-favoritelist',
  templateUrl: './favoritelist.component.html',
  styleUrls: ['./favoritelist.component.css']
})
export class FavoritelistComponent implements OnInit {
  private email:string;
  showinglist:Car[];
  loading = false;

  constructor(private routerIonfo:ActivatedRoute,private carService:ProductService) {
    this.email=this.routerIonfo.snapshot.queryParams["email"];
  }

  ngOnInit() {
    this.getCarlists();
  }

  getCarlists(){
    this.loading = true;

    this.carService.getAllProduct().subscribe(res => {
      console.log(res);


      this.showinglist = res;
      this.loading = false;
    });
  }

}
