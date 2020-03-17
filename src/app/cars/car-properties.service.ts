import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarPropertiesService {

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
  enginePositions: string[] = ['FRONT', 'MID', 'REAR'];

  constructor() {
  }

}
