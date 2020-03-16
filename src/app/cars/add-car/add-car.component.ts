import {Component, OnInit} from '@angular/core';
import {CarService} from '../car-service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.scss']
})
export class AddCarComponent implements OnInit {

  carForm: FormGroup;
  tyreTypes: string[] = ['Slick', 'Performance', 'Standard', 'All-surface', 'Off-road'];
  groundClearances: string[] = ['Low', 'Medium', 'High'];
  fuels: string[] = ['Diesel', 'Electro', 'Hydrogen', 'Hybrid', 'Petrol', 'Unknown'];
  countries: string[] = ['AT', 'AU', 'DE', 'FR', 'GB', 'IT', 'JP', 'SE', 'US'];
  factories: string[] = ['Acura', 'Alfa Romeo', 'Audi', 'Ariel', 'Aston Martin', 'Austin', 'Bentley', 'BMW', 'Bugatti', 'Buick',
    'Cadillac', 'Caterham', 'Chevrolet', 'Chrysler', 'Citroen', 'Dodge', 'DS', 'Fiat', 'Ford', 'GMC', 'Honda', 'Hummer', 'Infiniti',
    'Jaguar', 'KTM', 'Lamborghini', 'Lancia', 'Land Rover', 'Lotus', 'Maserati', 'Mazda', 'McLaren', 'Mercedes-Benz', 'MG', 'Mini',
    'Mitsubishi', 'Nissan', 'Pagani', 'Peugeot', 'Plymouth', 'Pontiac', 'Porshe', 'Ram', 'Renault', 'Rover', 'RUF', 'Scuderia Cameron',
    'Smart', 'Subaru', 'Suzuki', 'TVR', 'Vauxhall/Opel', 'Volvo', 'Volkswagen'];
  driveTractions: string[] = ['FWD', 'RWD', '4WD'];
  bodyStyles: string[] = ['Cabrio', 'Coupe', 'Hatchback', 'Minivan', 'Pickup', 'Roadster', 'Sedan', 'SUV', 'Wagon', 'Van'];

  constructor(private carService: CarService, private router: Router) {
  }

  ngOnInit() {
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

  save(): void {
    const carAttrs = this.carForm.value;
    this.carService.saveCar(carAttrs).subscribe(
      () => this.router.navigate(['../..']),
      () => alert('Nie udało się zapisać auta')
    );
  }

}
