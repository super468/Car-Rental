import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }
  @Input() public dataset;
  public pLocation:string;
  public dLocation:string;
  public pDate:string;
  public pTime:string;
  public dDate:string;
  public dTime:string;
  ngOnInit() {


    this.pLocation = this.dataset[0];
    this.dLocation = this.dataset[1];
    this.pDate = this.dataset[2];
    this.pTime = this.dataset[3];
    this.dDate = this.dataset[4];
    this.dTime = this.dataset[5];
  }
  times = [
    {value: 'time1', viewValue: '00:00'},
    {value: 'time2', viewValue: '00:30'},
    {value: 'time3', viewValue: '01:00'},
    {value: 'time4', viewValue: '01:30'}
  ];


}
