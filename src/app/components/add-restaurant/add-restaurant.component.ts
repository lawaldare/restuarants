import { RestaurantService } from './../../services/restaurant.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RestaurantInterface } from 'src/app/models/restaurant.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.scss']
})
export class AddRestaurantComponent implements OnInit {

  constructor(private resService: RestaurantService, private toastr: ToastrService) { }

  name: string;
  description: string;
  logo: string;
  location = { lat: 0, log: 0 };
  lat: number;
  log: number;

  res = new RestaurantInterface();

  ngOnInit() {
    console.log(this.res);

  }


  add(form: NgForm) {
    let location: any = {};
    this.res.name = form.value.name;
    this.res.description = form.value.description;
    this.res.logo = form.value.logo;
    location.lat = form.value.lat;
    location.log = form.value.log;
    this.res.location = location;

    this.resService.addRestaurant(this.res).subscribe(data => {
      console.log(data);
      form.resetForm();

    })


  }

}
