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
    this.slt_droptime = this.times[0].viewValue;
    this.slt_picktime = this.times[0].viewValue;
    this.slt_pickplace;
    this.slt_dropplace;
    this.slt_pickpdate;
    this.slt_droppdate;
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


}
