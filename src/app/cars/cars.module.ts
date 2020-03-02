import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarsListComponent } from './cars-list/cars-list.component';
import { AddCarComponent } from './add-car/add-car.component';


@NgModule({
  declarations: [CarsListComponent, AddCarComponent],
  imports: [
    CommonModule,
  ],
  exports: [CarsListComponent]
})
export class CarsModule { }
