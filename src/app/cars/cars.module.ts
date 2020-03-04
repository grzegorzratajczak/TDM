import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarsListComponent } from './cars-list/cars-list.component';
import { AddCarComponent } from './add-car/add-car.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [CarsListComponent, AddCarComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [CarsListComponent]
})
export class CarsModule { }
