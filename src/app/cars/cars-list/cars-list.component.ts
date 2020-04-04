import {Component, OnInit} from '@angular/core';
import {CarService} from '../car-service';
import {Car, CarAttrs} from '../car';
import {CarPropertiesService} from '../car-properties.service';

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
  atrCostToSort = 10;
  tyreTypes;
  atrTyreType: any;

  constructor(private carService: CarService, private carPropertiesService: CarPropertiesService) {
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

  editCar(car: Car) {

  }

  getCarsList() {
    this.carService.getCars().subscribe({
      next: (cars) => this.cars = cars,
      error: () => alert('Nie udało się pobrać listy aut')
    });
  }

  sortCarsListByCost(atrToSort: number) {
    const tempCars = [];
    for (const car of this.cars) {
      if (car.cost.toString() === atrToSort.toString()) {
        tempCars.push(car);
      }
    }
    this.cars = tempCars;
  }

  sortCarsListByTyreType(atrTyreType: any) {
    const tempCars = [];
    for (const car of this.cars) {
      if (car.tyreType.toString() === atrTyreType.toString()) {
        tempCars.push(car);
      }
    }
    this.cars = tempCars;
  }

  sortCarsListForBadWeather() {
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

  sortCarsListBy4WD() {
    const tempCars = [];
    for (const car of this.cars) {
      if (car.driveTraction.toString() === '4WD') {
        tempCars.push(car);
      }
    }
    this.cars = tempCars;
  }
}
