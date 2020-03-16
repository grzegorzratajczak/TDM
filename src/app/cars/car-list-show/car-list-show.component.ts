import {Component, Input, OnInit} from '@angular/core';
import {Car} from '../car';
import {CarService} from '../car-service';

@Component({
  selector: 'app-car-list-show',
  templateUrl: './car-list-show.component.html',
  styleUrls: ['./car-list-show.component.scss']
})
export class CarListShowComponent implements OnInit {

  @Input() car: Car;

  constructor(private carService: CarService) {
  }

  ngOnInit() {
  }

}
