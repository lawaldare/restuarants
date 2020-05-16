import { RestaurantInterface } from 'src/app/models/restaurant.model';
import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  res: RestaurantInterface;

  lat: number;
  lng: number;

  constructor(public modalRef: BsModalRef) { }

  ngOnInit(): void {
    this.lat = this.res.location.lat;
    this.lng = this.res.location.log;
  }

}
