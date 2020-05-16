import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { RestaurantService } from 'src/app/services/restaurant.service';
import { RestaurantInterface } from 'src/app/models/restaurant.model';
import { map } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-restaurants',
  templateUrl: './edit-restaurants.component.html',
  styleUrls: ['../add-restaurant/add-restaurant.component.scss', './edit-restaurants.component.scss']
})
export class EditRestaurantsComponent implements OnInit {


  id: string;
  name: string;
  description: string;
  logo: string;
  lat: number;
  log: number;
  restaurants: RestaurantInterface[];
  restaurant: RestaurantInterface;
  isLoading: boolean = false;

  newRes = new RestaurantInterface();


  constructor(private router: Router, private route: ActivatedRoute, private res: RestaurantService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get("id");
      this.getSingleRestaurants(this.id);
    });
  }


  getSingleRestaurants(id) {
    this.res.getSingleRestaurant(id).subscribe(data => {
      this.restaurant = data;
      this.name = this.restaurant.name;
      this.description = this.restaurant.description;
      this.logo = this.restaurant.logo;
      this.log = this.restaurant.location.log;
      this.lat = this.restaurant.location.lat;
    })


  }


  update(form: NgForm) {
    this.isLoading = true;
    this.res.delete(this.id).subscribe(data => {
      let location: any = {};
      this.newRes.name = form.value.name;
      this.newRes.description = form.value.description;
      this.newRes.logo = form.value.logo;
      location.lat = form.value.lat;
      location.log = form.value.log;
      this.newRes.location = location;

      this.res.addRestaurant(this.newRes).subscribe(data => {
        this.isLoading = false;
        this.toastr.success('Restaurant successfully updated!');
        form.resetForm();
        this.router.navigate(['restaurants'])

      }, error => {
        this.toastr.error('There is a problem in saving your updates');
      })

    }, error => {
      this.toastr.error('There is a problem in updating restaurant');
    })
  }

}

