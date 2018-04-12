import { Component, OnInit } from '@angular/core';
// import * as $ from 'jquery';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  psgervalue: number;//passengers number

  pricelist: any[] = [];

  options: any[] = []; // object: {id, text} or array: []

  constructor() { }

  ngOnInit() {

    this.psgervalue=7;
    this.options = [
      {id: 'eco', text: 'Economy'},
      {id: 'cmpt', text: 'Compact'},
      {id: 'std', text: 'Standard'},
      {id: 'suv', text: 'SUV'},
      {id: 'lux', text: 'Luxury'}
    ];
    this.pricelist = [
      {id: '0', text: '--ALL--'},
      {id: '1', text: 'Under 50$'},
      {id: '2', text: '50$ - 100'},
      {id: '3', text: '100$ - 150$'},
      {id: '4', text: '150$ - 200$'},
      {id: '5', text: 'Above 200$'}
      ];

    this.options.forEach(x => x.state = true);
  }

  checkAll(ev) {
    this.options.forEach(x => x.state = ev.target.checked)
  }

  isAllChecked() {
    return this.options.every(_ => _.state);
  }



}
