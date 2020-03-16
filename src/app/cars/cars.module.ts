import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarsListComponent } from './cars-list/cars-list.component';
import { AddCarComponent } from './add-car/add-car.component';
import {ReactiveFormsModule} from '@angular/forms';
import { CarShowComponent } from './car-show/car-show.component';
import { CarListShowComponent } from './car-list-show/car-list-show.component';


@NgModule({
  declarations: [CarsListComponent, AddCarComponent, CarShowComponent, CarListShowComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [CarsListComponent]
})
export class CarsModule { }
