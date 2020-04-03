import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CarsModule} from './cars/cars.module';
import {CarService} from './cars/car-service';
import {HttpClientModule} from '@angular/common/http';
import {CarPropertiesService} from './cars/car-properties.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CarsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatButtonModule
    ],
  providers: [CarService, CarPropertiesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
