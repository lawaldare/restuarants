import { RestaurantService } from './../../services/restaurant.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurant-lists',
  templateUrl: './restaurant-lists.component.html',
  styleUrls: ['./restaurant-lists.component.scss']
})
export class RestaurantListsComponent implements OnInit {

  constructor(private res: RestaurantService) { }

  ngOnInit() {
    this.getAllRes()
  }

  getAllRes() {
    this.res.getRestaurants().subscribe(data => {
      console.log(data);

    })
  }

}
