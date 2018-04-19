import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

export interface favorite{
    email:string,
    carid:string
}

@Injectable()
export class FavoritelistService {

  constructor(private http:HttpClient) { }

  getFavoritesByEmail(email:string){
    return this.http.get(`/api/favoritelist/${email}`);
  }

  createFavorite(favorite:favorite){
    return this.http.post(`/api/favoritelist`,favorite);
  }

  deleteFavorite(favorite:favorite){
    return this.http.delete(`/api/favoritelist/${favorite.email}&${favorite.carid}`);
  }
}
