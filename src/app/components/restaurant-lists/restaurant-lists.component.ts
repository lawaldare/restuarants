import { MapComponent } from './../map/map.component';
import { RestaurantService } from './../../services/restaurant.service';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { RestaurantInterface } from 'src/app/models/restaurant.model';
import { map } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';




@Component({
  selector: 'app-restaurant-lists',
  templateUrl: './restaurant-lists.component.html',
  styleUrls: ['./restaurant-lists.component.scss']
})
export class RestaurantListsComponent implements OnInit {

  restaurants: RestaurantInterface[];
  restaurant: RestaurantInterface
  page: number = 1;
  total: number;
  lat: number;
  lng: number;
  modalRef: BsModalRef;
  isLoading: boolean = false;

  constructor(private res: RestaurantService, private toastr: ToastrService, private router: Router, private modalService: BsModalService) { }

  ngOnInit() {
    this.getAllRes()
  }

  getAllRes() {
    this.isLoading = true;
    this.res.getRestaurants().pipe(map(responseData => {
      const resArray: RestaurantInterface[] = [];
      for (const key in responseData) {
        if (responseData.hasOwnProperty(key)) {
          resArray.push({ ...responseData[key], id: key });
        }
      }
      return resArray;
    })).subscribe(data => {
      this.isLoading = false;
      this.restaurants = data.reverse();
      this.total = this.restaurants.length;
    })
  }


  delete(id) {
    this.res.delete(id).subscribe(data => {
      this.toastr.success('Restaurant successfully deleted!');
      this.getAllRes()
    }, error => {
      this.toastr.error('There is a problem deleting the restaurant');
    })
  }

  goToEditPage(id) {
    this.router.navigate([id, 'edit']);
  }

  openMap(res) {
    this.modalRef = this.modalService.show(MapComponent, {
      backdrop: "static",
      initialState: { res: res }
    });
  }
}


