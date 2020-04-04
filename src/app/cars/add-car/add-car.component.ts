import {Component, OnInit} from '@angular/core';
import {CarService} from '../car-service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {map} from 'rxjs/operators';
import {CarPropertiesService} from '../car-properties.service';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.scss']
})
export class AddCarComponent implements OnInit {

  carForm: FormGroup;
  tyreTypes: string[];
  groundClearances: string[];
  fuels: string[];
  countries: string[];
  factories: string[];
  driveTractions: string[];
  bodyStyles: string[];
  enginePositions: string[];

  constructor(private carService: CarService, private router: Router, private carPropertiesService: CarPropertiesService) {
  }

  ngOnInit() {
    this.tyreTypes = this.carPropertiesService.tyreTypes;
    this.groundClearances = this.carPropertiesService.groundClearances;
    this.fuels = this.carPropertiesService.fuels;
    this.countries = this.carPropertiesService.countries;
    this.factories = this.carPropertiesService.factories;
    this.driveTractions = this.carPropertiesService.driveTractions;
    this.bodyStyles = this.carPropertiesService.bodyStyles;
    this.enginePositions = this.carPropertiesService.enginePositions;
    this.createNewFormGroup();
  }

  save(): void {
    const carFromForm = this.carForm.value;
    this.carService.saveCar(carFromForm).subscribe(
      () => this.router.navigate(['../..']),
      () => alert('Nie udało się zapisać auta')
    );
  }

  createNewFormGroup() {
    this.carForm = new FormGroup({
      id: new FormControl(),
      factory: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      cost: new FormControl('', Validators.required),
      upgrade: new FormControl('', Validators.required),
      tyreType: new FormControl('', [Validators.required]),
      topSpeed: new FormControl('', Validators.required),
      acceleration: new FormControl('', Validators.required),
      handling: new FormControl('', Validators.required),
      driveTraction: new FormControl('', Validators.required),
      weight: new FormControl('', Validators.required),
      width: new FormControl('', Validators.required),
      height: new FormControl('', Validators.required),
      groundClearance: new FormControl('', Validators.required),
      tractionControl: new FormControl('', Validators.required),
      abs: new FormControl('', [Validators.required]),
      peakPower: new FormControl('', Validators.required),
      peakTorque: new FormControl('', Validators.required),
      enginePosition: new FormControl('', Validators.required),
      fuel: new FormControl('', Validators.required),
      bodyStyle: new FormControl('', Validators.required),
      seatCount: new FormControl('', Validators.required),
      productionYear: new FormControl('', Validators.required),
      country: new FormControl('', Validators.required)
    });
  }
}
