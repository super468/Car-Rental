import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProductService} from "../services/product.service";
import {Car} from "../class/car";

@Component({
  selector: 'app-admincontrolpanel',
  templateUrl: './admincontrolpanel.component.html',
  styleUrls: ['./admincontrolpanel.component.css']
})


export class AdmincontrolpanelComponent implements OnInit {

  @Output() private getAll = new EventEmitter();
  @Input() seletedCar:Car;

  showDeleteDialog :boolean = false;
  showUpdataDialog :boolean = false;

  constructor(private productService:ProductService) {
  }

  ngOnInit() {
    this.seletedCar = null;
  }

  confirmDelete(){
    // this.productService.deleteACar();
    console.log("confirm delete: "+ this.seletedCar._id+ this.seletedCar.name);
    this.getAllCarList();
  }

  getAllCarList(){
    this.getAll.emit();
    this.showDeleteDialog = false;
  }

  closeDialog(){
    this.showDeleteDialog = false;
    this.showUpdataDialog = false;
  }

  editBtnClick() {
    if(this.seletedCar != null){
      this.showUpdataDialog = !this.showUpdataDialog;
    }

  }

  deleteBtnClick() {
    if(this.seletedCar != null){
      this.showDeleteDialog = !this.showDeleteDialog;
    }
  }
}
