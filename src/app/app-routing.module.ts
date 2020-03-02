import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CarsListComponent} from './cars/cars-list/cars-list.component';
import {AddCarComponent} from './cars/add-car/add-car.component';


const routes: Routes = [
  {path: 'cars-list', component: CarsListComponent},
  {path: 'add-car', component: AddCarComponent},
  {path: '', redirectTo: '/cars-list', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
