import { RestaurantInterface } from 'src/app/models/restaurant.model';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class RestaurantService {


  URL = environment.baseURL;

  constructor(private httpClient: HttpClient) { }


  getRestaurants() {
    return this.httpClient.get(this.URL);
  }

  addRestaurant(res: RestaurantInterface) {

    return this.httpClient.post(this.URL, res);

  }
}
