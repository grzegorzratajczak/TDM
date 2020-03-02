import {HttpClient} from '@angular/common/http';
import {Car, CarAttrs} from './car';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {map} from 'rxjs/operators';

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
}
