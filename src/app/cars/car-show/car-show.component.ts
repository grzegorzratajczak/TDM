import {Component, Input, OnInit} from '@angular/core';
import {Car} from '../car';
import {CarService} from '../car-service';

@Component({
  selector: 'app-car-show',
  templateUrl: './car-show.component.html',
  styleUrls: ['./car-show.component.scss']
})
export class CarShowComponent implements OnInit {

  @Input() car: Car;

  constructor(private carService: CarService) {
  }

  ngOnInit() {
  }

}
