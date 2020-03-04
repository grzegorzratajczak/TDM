import { Component, OnInit } from '@angular/core';
import {CarService} from '../car-service';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.scss']
})
export class AddCarComponent implements OnInit {

  carForm: FormGroup;

  constructor(private carService: CarService) { }

  ngOnInit() {
  }

  save(): void {
    const carAttrs = this.carForm.value;
    this.carService.saveCar(carAttrs).subscribe(
      () => alert('auto zapisane' + carAttrs),
      () => alert('Nie udało się zapisać pilota')
    );
  }

}
