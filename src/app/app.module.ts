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
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';

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
    MatDialogModule,
    MatFormFieldModule,
    FormsModule
  ],
  providers: [CarService, CarPropertiesService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
