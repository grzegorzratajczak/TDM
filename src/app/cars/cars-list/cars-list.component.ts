import {Component, OnInit} from '@angular/core';
import {CarService} from '../car-service';
import {Car, CarAttrs} from '../car';
import {CarPropertiesService} from '../car-properties.service';
import {SimpleAskDialogComponent} from '../../dialogs/simple-ask-dialog/simple-ask-dialog.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-car-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.scss']
})
export class CarsListComponent implements OnInit {

  cars: Car[] = [];
  columnsToDisplay = [
    'cost',
    'factory',
    'name',
    'upgrade',
    'tyreType',
    'topSpeed',
    'acceleration',
    'handling',
    'driveTraction',
    'weight',
    'width',
    'height',
    'groundClearance',
    'tractionControl',
    'abs',
    'peakPower',
    'peakTorque',
    'enginePosition',
    'fuel',
    'bodyStyle',
    'seatCount',
    'productionYear',
    'country',
    'options',
  ];
  tyreTypes;
  atrTyreType: any;

  constructor(private carService: CarService, private carPropertiesService: CarPropertiesService, public dialog: MatDialog) {
  }

  ngOnInit() {
    this.getCarsList();
    this.tyreTypes = this.carPropertiesService.tyreTypes;
  }

  deleteCarFromList(carAttrs: CarAttrs) {
    this.carService.deleteCar(carAttrs).subscribe({
        next: () => this.cars.splice(carAttrs.id),
        error: () => alert('Nie udało się usunąć auta')
      }
    );
    location.reload();
  }

  openDeleteCarDialog(carAttrs: CarAttrs) {
    const dialogRef = this.dialog.open(SimpleAskDialogComponent, {
      width: '250px',
      data: {content: carAttrs, question: 'Usunąć auto?'}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.deleteCarFromList(result);
    });
  }

  getCarsList() {
    this.carService.getCars().subscribe({
      next: (cars) => this.cars = cars,
      error: () => alert('Nie udało się pobrać listy aut')
    });
  }

  filterCarsListByCost(atrToSort: number) {
    const tempCars = [];
    for (const car of this.cars) {
      if (car.cost.toString() === atrToSort.toString()) {
        tempCars.push(car);
      }
    }
    this.cars = tempCars;
  }

  filterCarsListByTyreType(atrTyreType: any) {
    const tempCars = [];
    for (const car of this.cars) {
      if (car.tyreType.toString() === atrTyreType.toString()) {
        tempCars.push(car);
      }
    }
    this.cars = tempCars;
  }

  filterCarsListForBadWeather() {
    const tempCars = [];
    for (const car of this.cars) {
      if (car.tyreType.toString() === 'Standard') {
        tempCars.push(car);
      } else if (car.tyreType.toString() === 'All-surface') {
        tempCars.push(car);
      } else if (car.tyreType.toString() === 'Off-road') {
        tempCars.push(car);
      }
    }
    this.cars = tempCars;
  }

  filterCarsListBy4WD() {
    const tempCars = [];
    for (const car of this.cars) {
      if (car.driveTraction.toString() === '4WD') {
        tempCars.push(car);
      }
    }
    this.cars = tempCars;
  }

  editCar(carAttrs: CarAttrs) {

  }
}
