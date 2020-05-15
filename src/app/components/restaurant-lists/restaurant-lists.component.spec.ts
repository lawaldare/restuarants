import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantListsComponent } from './restaurant-lists.component';

describe('RestaurantListsComponent', () => {
  let component: RestaurantListsComponent;
  let fixture: ComponentFixture<RestaurantListsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantListsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
