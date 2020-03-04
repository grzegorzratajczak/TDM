import {Component, OnInit} from '@angular/core';
import {CarService} from '../car-service';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.scss']
})
export class AddCarComponent implements OnInit {

  carForm: FormGroup;

  constructor(private carService: CarService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.data.pipe(map((data) => data.car))
      .subscribe((car) => {
        this.carForm = new FormGroup({
          id: new FormControl(car.id),
          factory: new FormControl(car.factory),
          name: new FormControl(car.name),
          cost: new FormControl(car.cost),
          upgrade: new FormControl(car.upgrade),
          tyreType: new FormControl(car.tyreType),
          topSpeed: new FormControl(car.topSpeed),
          acceleration: new FormControl(car.acceleration),
          handling: new FormControl(car.handling),
          driveTraction: new FormControl(car.driveTraction),
          weight: new FormControl(car.weight),
          width: new FormControl(car.width),
          height: new FormControl(car.height),
          groundClearance: new FormControl(car.groundClearance),
          tractionControl: new FormControl(car.tractionControl),
          abs: new FormControl(car.abs),
          peakPower: new FormControl(car.peakPower),
          peakTorque: new FormControl(car.peakTorque),
          enginePosition: new FormControl(car.enginePosition),
          fuel: new FormControl(car.fuel),
          bodyStyle: new FormControl(car.bodyStyle),
          seatCount: new FormControl(car.seatCount),
          productionYear: new FormControl(car.productionYear)
        });
      });
  }

  save(): void {
    const carAttrs = this.carForm.value;
    this.carService.saveCar(carAttrs).subscribe(
      () => alert('auto zapisane' + carAttrs),
      () => alert('Nie udało się zapisać pilota')
    );
  }

}
