import {Component, OnInit} from '@angular/core';
import {CarService} from '../car-service';
import {Car, CarAttrs} from '../car';

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
  atrToSort: number = 10;

  constructor(private carService: CarService) {
  }

  ngOnInit() {
    this.carService.getCars().subscribe({
      next: (cars) => this.cars = cars,
      error: () => alert('Nie udało się pobrać listy aut')
    });
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
}
