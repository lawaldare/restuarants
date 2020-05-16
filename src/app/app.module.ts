import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NgxPaginationModule } from 'ngx-pagination';
import { AgmCoreModule } from '@agm/core';
import { ModalModule } from "ngx-bootstrap/modal";







import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { RestaurantListsComponent } from './components/restaurant-lists/restaurant-lists.component';
import { AddRestaurantComponent } from './components/add-restaurant/add-restaurant.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { EditRestaurantsComponent } from './components/edit-restaurants/edit-restaurants.component';
import { MapComponent } from './components/map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    RestaurantListsComponent,
    AddRestaurantComponent,
    NavbarComponent,
    EditRestaurantsComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ModalModule.forRoot(),
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    NgxPaginationModule,
    AgmCoreModule.forRoot({
      apiKey: environment.googleMapAPIKey
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
