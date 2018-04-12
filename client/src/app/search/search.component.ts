import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }
  public selectedpk:string;
  public selecteddr:string;
  ngOnInit() {
    this.selectedpk = this.dataset[4];
    this.selecteddr = this.dataset[5];
  }
  times = [
    {value: 'time1', viewValue: '00:00'},
    {value: 'time2', viewValue: '00:30'},
    {value: 'time3', viewValue: '01:00'},
    {value: 'time4', viewValue: '01:30'}
  ];
  @Input() public dataset;

}
