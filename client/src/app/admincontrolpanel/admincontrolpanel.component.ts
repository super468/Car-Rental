import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProductService} from "../services/product.service";
import {Car} from "../class/car";
import {HttpClient, HttpHeaders} from "@angular/common/http";
// import { saveAs } from 'file-saver/FileSaver';
import {observeOn} from "rxjs/operators";


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
  // imageName:string;
  imageUrl:string = '/assets/car-rental-logo.jpg';
  fileToUpload:File;
  formCarInfo:Car;
  formCarInfo_isAuto: any;
  formCarInfo_ACsup: any;


  constructor(private productService:ProductService, private http:HttpClient) {
  }

  ngOnInit() {
    this.seletedCar = null;
    if(this.seletedCar != null){
      this.formCarInfo = this.seletedCar;
    }
    else{
      this.formCarInfo  =  new Car(
        '',
        'Standard',
        2,
        0,
        2,
        true,
        true,
         "",
         0,
        '/assets/car-rental-logo.jpg',
        true
      );
    }

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
      this.showUpdataDialog = true;
      this.formCarInfo = this.seletedCar;
    }


  }

  deleteBtnClick() {
    if(this.seletedCar != null){
      this.showDeleteDialog = !this.showDeleteDialog;
    }
  }

  // onFileSeleted(e) {
  //   this.imageName = e.target.files[0];
  //   alert(this.imageName);
  //
  // }
  //
  // onUpload() {
  //   const fd = new FormData();
  //   fd.append('image', this.imageName);
  //   // this.http.post()
  // }

  handleFileInput(file: FileList) {
    console.log('handlefile');
    this.fileToUpload = file.item(0);

    let reader = new FileReader();
    reader.onload = (event:any) => {
      this.imageUrl = event.target.result;
    };

    reader.readAsDataURL(this.fileToUpload);
    //
    // reader.onload = function(e) {
    //   var url = e.target;
    //   console.log(e.target); //返回图片url
    // };

  }

  onImageSubmit(){
    console.log('onImageSubmit');
    // this.http.post('/api/image', sdfs);
    let file = this.fileToUpload;
    // const headers = new HttpHeaders()
    //   .append('Content-Type', 'multipart/form-data');

    const formData: FormData = new FormData();
    formData.append('CarImage', file, file.name);

    console.log(formData);

    this.http.post('/api/image/post', formData)
      .subscribe(
        res => {
          console.log("get response after post picture");
          console.log(res);
        },
        err => {
          console.log("Error occured when post Image");
        }
      );

    // const endpoint = '/api/image/post';
    // const formData: FormData = new FormData();
    // // formData.append('fileKey', file, file.name);
    // formData.set('imageName', this.fileToUpload.name);
    // formData.set('imageData', this.imageUrl);
    //
    //
    //
    // this.http
    //   .post(endpoint, formData ).subscribe(
    //   res => {
    //           console.log("get response after post picture");
    //           console.log(res);
    //         },
    //         err => {
    //           console.log("Error occured when post Image");
    //         }
    // );


    console.log('postCar finish');

  }


  // setACsup($event) {
  //   console.log($event.target.value);
  //   console.log(this.formCarInfo.ACsup);
  //   // if($event.target.value == 'true'){
  //   //   this.formCarInfo.ACsup = true;
  //   //
  //   //   // formCarInfo_ACsup="";
  //   //   console.log('setacsup to true');
  //   // }
  //   // else {
  //   //   this.formCarInfo.ACsup = false;
  //   //   console.log('setacsup to false');
  //   // }
  //   console.log($event.target.value);
  //   console.log(this.formCarInfo.ACsup);
  //
  // }

  // setIsAuto($event) {
  //   console.log($event.target.value);
  //   console.log(this.formCarInfo.isAuto);
  //   if($event.target.value == 'YES'){
  //     this.formCarInfo.isAuto = true;
  //     // formCarInfo_isAuto: any;
  //   }
  //   else{
  //     this.formCarInfo.isAuto = false;
  //   }
  //   console.log($event.target.value);
  //   console.log(this.formCarInfo.isAuto);
  //
  //
  // }
}
