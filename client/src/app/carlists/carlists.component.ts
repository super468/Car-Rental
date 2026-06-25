import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from "../services/product.service";
import { Car } from "../class/car";
import { AuthenticationService } from "../services/authentication.service";
import { favorite, FavoritelistService } from "../services/favoritelist.service";
import { NewFilterOptions } from "../home/home.component";

@Component({
  selector: 'app-carlists',
  templateUrl: './carlists.component.html',
  styleUrls: ['./carlists.component.css']
})
export class CarlistsComponent implements OnInit {

  selected: number = -1;
  isAdmin: boolean = true;
  showCards: boolean = true;

  loading = false;
  total = 0;
  page = 1;
  limit = 4;

  cars: Car[] = [];
  showinglist: Car[] = [];
  favorites: favorite[] = [];

  selectedCar_p: Car | null = null;

  searchCars: Car[] = [];
  maintenanceCars: Car[] = [];

  @Input() public pickPlace: string = "";
  public newOptions!: NewFilterOptions;

  constructor(
    private carService: ProductService,
    private favoriteservice: FavoritelistService,
    private auth: AuthenticationService
  ) {
    if (this.auth.isLoggedIn()) {
      this.favoriteservice.getFavoritesByEmail(this.auth.getUserDetails().email).subscribe(
        (data: any) => {
          this.favorites = data;
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }

  ngOnInit() {
    console.log("carlist recieved!!~~");

    this.getCarlists();

    this.isAdmin = this.auth.Ifadmin();
  }

  footerRunLoc(pickplace: string) {
    this.pickPlace = pickplace;
    this.searchCarlists();
  }

  footerRunAll() {
    this.getCarlists();
  }

  footerRunFilter(new_options: NewFilterOptions) {
    this.newOptions = new_options;
    this.searchCarFilter();
  }

  searchCarFilter() {
    this.loading = true;
    console.log(this.newOptions);

    this.carService.searchCarwithFilter(this.newOptions).subscribe(
      res => {
        console.log("CARS FILTRADOS:", res);

        this.cars = res;
        this.total = res.length;
        this.showinglist = this.cars.slice(0, this.limit);
        this.page = 1;

        this.selected = -1;
        this.selectedCar_p = null;

        this.loading = false;
      },
      error => {
        console.log("search error!!!!!!", error);
        this.loading = false;
      }
    );
  }

  searchCarlists() {
    this.loading = true;

    this.carService.searchCarProduct(this.pickPlace).subscribe(
      res => {
        console.log("CARS POR LOCALIZACAO:", res);

        this.cars = res;
        this.total = res.length;
        this.showinglist = this.cars.slice(0, this.limit);
        this.page = 1;

        this.selected = -1;
        this.selectedCar_p = null;

        this.loading = false;
      },
      error => {
        console.log("search error!!!!!!", error);
        this.loading = false;
      }
    );
  }

  getCarlists() {
    console.log('--get all cars-');
    this.loading = true;

    this.carService.getAllProduct().subscribe(
      res => {
        console.log("CARS RECEBIDOS:", res);

        this.cars = res;
        this.total = res.length;
        this.showinglist = this.cars.slice(0, this.limit);
        this.page = 1;

        this.selected = -1;
        this.selectedCar_p = null;

        this.loading = false;
      },
      error => {
        console.log("Erro ao buscar carros:", error);
        this.loading = false;
      }
    );
  }

  addCarToMaintenance(car: Car) {
    const alreadyInMaintenance = this.maintenanceCars.some(
      (item: any) => item._id === (car as any)._id
    );

    if (!alreadyInMaintenance) {
      this.maintenanceCars.push(car);
      console.log("Car added to maintenance:", car);
    }
  }

  removeCarFromMaintenance(car: Car) {
    this.maintenanceCars = this.maintenanceCars.filter(
      (item: any) => item._id !== (car as any)._id
    );

    console.log("Car removed from maintenance:", car);
  }

  showCarsInMaintenance() {
    console.log("CARS EM MANUTENCAO:", this.maintenanceCars);

    this.cars = this.maintenanceCars;
    this.total = this.cars.length;
    this.showinglist = this.cars.slice(0, this.limit);
    this.page = 1;

    this.selected = -1;
    this.selectedCar_p = null;
  }

  isCarInMaintenance(car: Car): boolean {
    return this.maintenanceCars.some(
      (item: any) => item._id === (car as any)._id
    );
  }

  onSelect(e: number) {
    if (e != this.selected) {
      this.selected = e;
      this.selectedCar_p = this.showinglist[e];

      console.log("index:" + e + " _id:" + (this.showinglist[e] as any)._id);
    } else {
      this.selected = -1;
      this.selectedCar_p = null;
    }
  }

  getFrom(): number {
    return ((this.limit * this.page) - this.limit);
  }

  getTo(): number {
    let max = this.limit * this.page;

    if (max > this.total) {
      max = this.total;
    }

    return max;
  }

  goToPage(n: number): void {
    if (this.page != n) {
      this.selected = -1;
      this.selectedCar_p = null;
      this.page = n;
      this.showinglist = this.cars.slice(this.getFrom(), this.getTo());
    }
  }

  onNext(): void {
    this.page++;

    this.selected = -1;
    this.selectedCar_p = null;
    this.showinglist = this.cars.slice(this.getFrom(), this.getTo());
  }

  onPrev(): void {
    this.page--;

    this.selected = -1;
    this.selectedCar_p = null;
    this.showinglist = this.cars.slice(this.getFrom(), this.getTo());
  }
}