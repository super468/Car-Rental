import { Component, OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup} from "@angular/forms";
// import * as $ from 'jquery';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit{

  psgervalue: number;//passengers number
  // flag:boolean;
  pricelist: any[] = [];

  options: any[] = []; // object: {id, text} or array: []

  formModel:FormGroup = new FormGroup({
    price: new FormControl(),
    type: new FormArray([
      new FormControl("eco"),
      new FormControl("cmpt"),
      new FormControl("std"),
      new FormControl("suv"),
      new FormControl("lux")
    ]),
    paserNum: new FormControl(),
    age:new FormControl()
    });

  constructor() { }

  ngOnInit() {
    // this.flag = false;
    this.psgervalue=7;
    // this.formModel.get('price').controls.price.value = 0;
    this.formModel.setControl('age',new FormControl("larger18"));
    this.formModel.setControl('price',new FormControl("0"));
    // this.formModel.value.age.value="larger18" ;
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
      {id: '2', text: '50$ - 100$'},
      {id: '3', text: '100$ - 150$'},
      {id: '4', text: '150$ - 200$'},
      {id: '5', text: 'Above 200$'}
      ];

    this.options.forEach(x => x.state = true);

  }

  ngAfterViewInit(){
    console.log("--filter:ngAfterViewInit--");
    this.formModel.valueChanges.subscribe(value => {
      this.onSubmit(value);
    });
    this.onSubmit(this.formModel.value);
  }

  typecheckAll(ev) {
    this.options.forEach(x => x.state = ev.target.checked)
  }

  isAllChecked() {
    return this.options.every(_ => _.state);
  }


  onSubmit(values:object){
    console.log("my submit -----");
    console.log(values);
  }

  // changeDS(){
  //   this.formModel.setControl("other", new FormControl(this.testvalue) );
  // }
}
