import { EditRestaurantsComponent } from './components/edit-restaurants/edit-restaurants.component';
import { AddRestaurantComponent } from './components/add-restaurant/add-restaurant.component';
import { RestaurantListsComponent } from './components/restaurant-lists/restaurant-lists.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'restaurants', component: RestaurantListsComponent
  },
  {
    path: 'add-new', component: AddRestaurantComponent
  },
  {
    path: ':id/edit', component: EditRestaurantsComponent
  },
  { path: "", pathMatch: "full", redirectTo: "restaurants" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
