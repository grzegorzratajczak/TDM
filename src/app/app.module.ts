import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CarsModule} from './cars/cars.module';
import {CarService} from './cars/car-service';
import {HttpClientModule} from '@angular/common/http';
import {CarPropertiesService} from './cars/car-properties.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {SimpleAskDialogComponent} from './dialogs/simple-ask-dialog/simple-ask-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    SimpleAskDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule
  ],
  providers: [CarService, CarPropertiesService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
