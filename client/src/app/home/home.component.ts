import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import {FilterOptions} from "../filter/filter.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private picktime:string;
  private droptime:string;
  private pickplace:string;
  private dropplace:string;
  private pickdate:string;
  private dropdate:string;
  public dataset;
  constructor(private routerIonfo:ActivatedRoute) { }

  ngOnInit() {
    this.picktime=this.routerIonfo.snapshot.queryParams["pickup_time"];
    this.droptime=this.routerIonfo.snapshot.queryParams["dropoff_time"];
    this.pickplace=this.routerIonfo.snapshot.queryParams["pickup_place"];
    this.dropplace=this.routerIonfo.snapshot.queryParams["dropoff_place"];
    this.pickdate=this.routerIonfo.snapshot.queryParams["pickup_date"];
    this.dropdate=this.routerIonfo.snapshot.queryParams["dropoff_date"];
    this.dataset = [this.pickplace,this.dropplace,this.pickdate,this.picktime,this.dropdate,this.droptime];

  }

  runParent(msg:string[]) {

    console.log(msg);
  }

  getFilter($event: FilterOptions) {
    console.log('---home get filter value from filter--');
    console.log($event);

  }
}
