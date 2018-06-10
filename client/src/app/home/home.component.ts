import { Component, OnInit,ViewChild } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import {FilterOptions} from "../filter/filter.component";
import {ProductService} from "../services/product.service";
import {Car} from "../class/car";
import { OnChanges } from '@angular/core';
import {DataBusService} from "../services/data-bus.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  public picktime:string;
  public droptime:string;
  public pickplace:string;
  public dropplace:string;
  public pickdate:string;
  public dropdate:string;
  public dataset;
  @ViewChild('carlists') footer;

  public carTypes:string[];
  public passengerNum:number;
  public priceMax:number;
  public priceMin:number;
  public ifAdult:boolean;

  constructor(private dataBus:DataBusService, private routerIonfo:ActivatedRoute,private carService:ProductService) { }




  ngOnInit() {
    this.picktime=this.routerIonfo.snapshot.queryParams["pickup_time"];
    this.droptime=this.routerIonfo.snapshot.queryParams["dropoff_time"];
    this.pickplace=this.routerIonfo.snapshot.queryParams["pickup_place"];
    this.dropplace=this.routerIonfo.snapshot.queryParams["dropoff_place"];
    this.pickdate=this.routerIonfo.snapshot.queryParams["pickup_date"];
    this.dropdate=this.routerIonfo.snapshot.queryParams["dropoff_date"];
    this.dataset = [this.pickplace,this.dropplace,this.pickdate,this.picktime,this.dropdate,this.droptime];
    //this.searchCarlists();
    //console.log(this.dataset);
    //console.log(this.pickplace);
    this.dataBus.setSearchCondi(this.dataset);
    console.log(this.pickplace);
    if((typeof this.pickplace === 'undefined')||(this.pickplace=="")){
      //this.run(this.pickplace);
      this.runAll();
    }
    else{
      this.run(this.pickplace);
    }

  }
  ngAfterViewInit(){
    console.log("--filter:ngAfterViewInit--");

    this.picktime=this.routerIonfo.snapshot.queryParams["pickup_time"];
    this.droptime=this.routerIonfo.snapshot.queryParams["dropoff_time"];
    this.pickplace=this.routerIonfo.snapshot.queryParams["pickup_place"];
    this.dropplace=this.routerIonfo.snapshot.queryParams["dropoff_place"];
    this.pickdate=this.routerIonfo.snapshot.queryParams["pickup_date"];
    this.dropdate=this.routerIonfo.snapshot.queryParams["dropoff_date"];
    this.dataset = [this.pickplace,this.dropplace,this.pickdate,this.picktime,this.dropdate,this.droptime];

    //console.log(this.pickplace);

    this.dataBus.setSearchCondi(this.dataset);
    //this.searchCarlists();
    //console.log(this.dataset);
    console.log(this.pickplace);
    if((typeof this.pickplace === 'undefined')||(this.pickplace=="")){
      //this.run(this.pickplace);
      this.runAll();
    }
    else{
      this.run(this.pickplace);
    }

  }

  run(pickplace:string){
    console.log("home run.");
    this.footer.footerRunLoc(pickplace);
  }

  runAll(){
    console.log("home run --search all carlist");
    this.footer.footerRunAll();
  }

  runFilter(newoptions:NewFilterOptions){
    this.footer.footerRunFilter(newoptions);

  }

  runParent(msg:string[]) {
    this.pickplace=msg[0];
    this.dropplace=msg[1];
    this.pickdate=msg[2];
    this.picktime=msg[3];
    this.dropdate=msg[4];
    this.droptime=msg[5];
    this.dataset = [this.pickplace,this.dropplace,this.pickdate,this.picktime,this.dropdate,this.droptime];

    this.dataBus.setSearchCondi(this.dataset);
    console.log(this.pickplace);

    this.runFilter(new NewFilterOptions(this.pickplace,this.priceMax,this.priceMin,this.carTypes,this.passengerNum,this.ifAdult));

  }

  getFilter(options: FilterOptions) {
    console.log('---home get filter value from filter--');
    console.log(options);

    this.carTypes = options.carType;
    this.passengerNum = options.pasgerNum_max;
    this.priceMax = options.price_max;
    this.priceMin=options.price_min;
    this.ifAdult=options.isAdult;

    if ((typeof this.carTypes[0] === 'undefined')){
      this.carTypes=["NoCarTypes"];
    }

    if((typeof this.pickplace === 'undefined')){
      this.pickplace = "AllTypes";
    }



    let newOptions = new NewFilterOptions(this.pickplace,this.priceMax,this.priceMin,this.carTypes,this.passengerNum,this.ifAdult);
    // if((typeof this.pickplace === 'undefined')||(this.pickplace=="")){
    //   //this.run(this.pickplace);
    //   this.runAll();
    // }
    // else{
    //   this.runFilter(newOptions);
    //}
    this.runFilter(newOptions);
    console.log(newOptions);
  }
}

export class NewFilterOptions{
  constructor(public pickLocation:string,
              public priceMax:number,
              public priceMin:number,
              public carType:string[],
              public passengerNumMax:number,
              public ifAdult:boolean
  ){

  }
}
