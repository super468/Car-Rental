import {Component, EventEmitter, OnInit, Output} from '@angular/core';
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

  @Output()
  carFilter:EventEmitter<FilterOptions> = new EventEmitter();

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

  getMinPrice(index:string):number {
    switch (index) {
      case '0':
      case '1':
        return 0;
      case '2':
        return 50;
      case '3':
        return 100;
      case '4':
        return 150;
      case '5':
        return 200;
      default:
        return 0;
    }
  }
  getMaxPrice(index:string):number{
      if(index == '0' || index == '1'){
        return 5000;
      }
      else{
        return this.getMinPrice(index) + 50;
      }

  }
  getTypes(index:Array<boolean>):Array<string>{
    let types:Array<string> = new Array<string>();
    for (let i in index) {
      if(index[i]){
        if(this.options[i].text == 'Luxury' && this.formModel.value.age != 'larger18' ){
            continue;
        }
        types.push(this.options[i].text);
      }
    }
    return types;
  }
  onSubmit(value:any){
    console.log("my submit -----");
    let values = this.formModel.value;
    let min = this.getMinPrice(values.price);
    let max = this.getMaxPrice(values.price);
    let cartypes = this.getTypes(values.type);
    let max_pasgerNum = values.paserNum;
    let isAdult = ((values.age == 'larger18')?true:false);


    this.carFilter.emit(new FilterOptions(min, max, cartypes, max_pasgerNum, isAdult));
  }

  // changeDS(){
  //   this.formModel.setControl("other", new FormControl(this.testvalue) );
  // }
}

export class FilterOptions{
  constructor(public price_min:number,
              public price_max:number,
              public carType:Array<string>,
              public pasgerNum_max:number,
              public isAdult:boolean
  ){

  }
}
