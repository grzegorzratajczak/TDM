import {HttpClient} from '@angular/common/http';
import {Car, CarAttrs} from './car';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {map} from 'rxjs/operators';
import {Injectable} from '@angular/core';

@Injectable()
export class CarService {

  constructor(private httpClient: HttpClient) {
  }

  getCars(): Observable<Car[]> {
    return this.httpClient.get<Car[]>(`${environment.apiUrl}/cars`);
  }

  saveCar(carAttrs: CarAttrs): Observable<Car> {
    if (carAttrs.id) {
      return this.updateCar(carAttrs);
    } else {
      return this.createCar(carAttrs);
    }
  }

  private updateCar(data: CarAttrs): Observable<Car> {
    return this.httpClient.put(`${environment.apiUrl}/cars/${data.id}`, data).pipe(
      map((carAttrs) => new Car(carAttrs))
    );
  }

  private createCar(data: CarAttrs): Observable<Car> {
    return this.httpClient.post(`${environment.apiUrl}/cars`, data).pipe(
      map((carAttrs) => new Car(carAttrs))
    );
  }

  deleteCar(data: CarAttrs): Observable<Car> {
    return this.httpClient.delete(`${environment.apiUrl}/cars/${data.id}`).pipe(
      map((carAttrs) => new Car(carAttrs))
    );
  }

  getCategoryColorByCarCost(carCost: number) {
    if (carCost < 7) {
      return 'gray';
    }
    if (carCost < 11) {
      return 'green';
    }
    if (carCost < 15) {
      return 'blue';
    }
    if (carCost < 19) {
      return 'yellow';
    }
    if (carCost < 23) {
      return 'red';
    }
    if (carCost < 27) {
      return 'purple';
    } else {
      return 'gold';
    }
  }
}
