import {Component, OnInit} from '@angular/core';
import {CarService} from '../car-service';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.scss']
})
export class AddCarComponent implements OnInit {

  carForm: FormGroup;
  tyreTypes: string[] = ['slick', 'performance', 'standard', 'all-surface', 'off-road'];

  constructor(private carService: CarService, private router: Router) {
  }

  ngOnInit() {
        this.carForm = new FormGroup({
          id: new FormControl(),
          factory: new FormControl(),
          name: new FormControl(),
          cost: new FormControl(),
          upgrade: new FormControl(),
          tyreType: new FormControl(),
          topSpeed: new FormControl(),
          acceleration: new FormControl(),
          handling: new FormControl(),
          driveTraction: new FormControl(),
          weight: new FormControl(),
          width: new FormControl(),
          height: new FormControl(),
          groundClearance: new FormControl(),
          tractionControl: new FormControl(),
          abs: new FormControl(),
          peakPower: new FormControl(),
          peakTorque: new FormControl(),
          enginePosition: new FormControl(),
          fuel: new FormControl(),
          bodyStyle: new FormControl(),
          seatCount: new FormControl(),
          productionYear: new FormControl()
        });
  }

  save(): void {
    const carAttrs = this.carForm.value;
    this.carService.saveCar(carAttrs).subscribe(
      () => this.router.navigate(['../..']),
      () => alert('Nie udało się zapisać auta')
    );
  }

}
