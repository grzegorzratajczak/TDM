import {Component, Input, OnInit} from '@angular/core';
import {Car} from '../car';

@Component({
  selector: 'app-car-show',
  templateUrl: './car-show.component.html',
  styleUrls: ['./car-show.component.scss']
})
export class CarShowComponent implements OnInit {

  @Input() car: Car;

  constructor() {
  }

  ngOnInit() {
  }

}
