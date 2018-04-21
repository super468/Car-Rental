import { Component, OnInit,ViewChild } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import {FilterOptions} from "../filter/filter.component";
import {ProductService} from "../services/product.service";
import {Car} from "../class/car";
import { OnChanges } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  private picktime:string;
  private droptime:string;
  private pickplace:string;
  private dropplace:string;
  private pickdate:string;
  private dropdate:string;
  public dataset;
  @ViewChild('carlists') footer;

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


  constructor(private routerIonfo:ActivatedRoute,private carService:ProductService) { }




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
  runParent(msg:string[]) {
    this.pickplace=msg[0];
    this.dropplace=msg[1];
    this.pickdate=msg[2];
    this.picktime=msg[3];
    this.dropdate=msg[4];
    this.droptime=msg[5];
    this.dataset = [this.pickplace,this.dropplace,this.pickdate,this.picktime,this.dropdate,this.droptime];
    console.log(this.pickplace);
    if((typeof this.pickplace === 'undefined')||(this.pickplace=="")){
      //this.run(this.pickplace);
      this.runAll();
    }
    else{
      this.run(this.pickplace);
    }


  }

  getFilter(options: FilterOptions) {
    console.log('---home get filter value from filter--');
    console.log(options);

  }
}
