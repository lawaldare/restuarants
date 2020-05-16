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
    return this.httpClient.get(`${this.URL}res.json`);
  }

  addRestaurant(res: RestaurantInterface) {
    return this.httpClient.post(`${this.URL}res.json`, res);
  }

  delete(id: string) {
    return this.httpClient.delete(`${this.URL}res/${id}.json`);
  }

  edit(id: string, body) {
    return this.httpClient.patch(`${this.URL}res/${id}.json`, body);
  }

  getSingleRestaurant(id: string) {
    return this.httpClient.get(`${this.URL}res/${id}.json`);
  }
}
