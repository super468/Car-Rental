import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../services/product.service";
import {Car} from "../class/car";
import {favorite, FavoritelistService} from "../services/favoritelist.service";

@Component({
  selector: 'app-favoritelist',
  templateUrl: './favoritelist.component.html',
  styleUrls: ['./favoritelist.component.css']
})
export class FavoritelistComponent implements OnInit {
  private email:string;
  showinglist:Car[]=[];
  loading = false;
  favorites:favorite[];
  constructor(private routerIonfo:ActivatedRoute,private carService:ProductService,private favoriteserivce:FavoritelistService) {
    this.email=this.routerIonfo.snapshot.queryParams["email"];

  }

  ngOnInit() {
    this.getCarlists();
  }

  getCarlists(){
    this.loading = true;

    this.carService.getAllProduct().subscribe(res => {
      console.log(res);
      this.favoriteserivce.getFavoritesByEmail(this.email).subscribe(
        (data:any)=>{
          this.favorites=data;
          for(let car of res){
            for(let favorite of this.favorites){
              if(car._id == favorite.carid){
                this.showinglist.push(car);
              }
            }
          }
        },(err)=>{
          console.log(err);
        }
      );
      this.loading = false;
    });
  }

}
