import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import {FilterOptions} from "../filter/filter.component";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private route:Router) { }
  @Input() public dataset;
  @Output() public searchCar:EventEmitter<string[]> = new EventEmitter();
  public pLocation:string;
  public dLocation:string;
  public pDate:string;
  public pTime:string;
  public dDate:string;
  public dTime:string;
  public searchCondi:string[];
  ngOnInit() {
    if((typeof this.dataset[0] === 'undefined')){
      var time = new Date();
      var year = time.getFullYear();
      var month = time.getMonth()+1;
      var pickday = time.getDate();
      var dropday = time.getDate()+3;
      this.pDate = year+"-"+month+"-"+pickday;
      this.dDate = year+"-"+month+"-"+dropday;
      this.pTime = "00:00";
      this.dTime = "00:00";
      //console.log(this.dDate);
    }else{
      //console.log(typeof this.dataset[4]);
      this.pLocation = this.dataset[0];
      this.dLocation = this.dataset[1];
      this.pDate = this.dataset[2];
      this.pTime = this.dataset[3];
      this.dDate = this.dataset[4];
      this.dTime = this.dataset[5];
    }


  }
  times = [
    {value: 'time1', viewValue: '00:00'},
    {value: 'time2', viewValue: '01:00'},
    {value: 'time3', viewValue: '02:00'},
    {value: 'time4', viewValue: '03:00'},
    {value: 'time5', viewValue: '04:00'},
    {value: 'time6', viewValue: '05:00'},
    {value: 'time7', viewValue: '06:00'},
    {value: 'time8', viewValue: '07:00'},
    {value: 'time9', viewValue: '08:00'},
    {value: 'time10', viewValue: '09:00'},
    {value: 'time11', viewValue: '10:00'},
    {value: 'time12', viewValue: '11:00'},
    {value: 'time13', viewValue: '12:00'},
    {value: 'time14', viewValue: '13:00'},
    {value: 'time15', viewValue: '14:00'},
    {value: 'time16', viewValue: '15:00'},
    {value: 'time17', viewValue: '16:00'},
    {value: 'time18', viewValue: '17:00'},
    {value: 'time19', viewValue: '18:00'},
    {value: 'time20', viewValue: '19:00'},
    {value: 'time21', viewValue: '20:00'},
    {value: 'time22', viewValue: '21:00'},
    {value: 'time23', viewValue: '22:00'},
    {value: 'time24', viewValue: '23:00'}
  ];

  fireEvent(){
    this.searchCondi = [this.pLocation,this.dLocation,this.pDate,this.pTime,this.dDate,this.dTime];
    this.searchCar.emit(this.searchCondi);
  }


}
