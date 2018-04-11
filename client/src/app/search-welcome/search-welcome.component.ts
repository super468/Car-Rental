import { Component, OnInit,Input,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-search-welcome',
  templateUrl: './search-welcome.component.html',
  styleUrls: ['./search-welcome.component.css']
})
export class SearchWelcomeComponent implements OnInit {

  constructor() { }
  public slt_droptime: string;
  public slt_picktime: string;
  public slt_pickplace: string;
  public slt_dropplace: string;
  public slt_pickpdate: string;
  public slt_droppdate: string;
  ngOnInit() {
    this.slt_pickpdate="2018-02-20";
    this.slt_droptime = this.times[0].viewValue;
    this.slt_picktime = this.times[0].viewValue;
    this.slt_pickplace;
    this.slt_dropplace;
    this.slt_pickpdate ="01-01-2018";
  }
  times = [
    {value: 'time1', viewValue: '00:00'},
    {value: 'time2', viewValue: '00:30'},
    {value: 'time3', viewValue: '01:00'},
    {value: 'time4', viewValue: '01:30'}
  ];

 
}
