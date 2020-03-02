export interface CarAttrs {

  id: number;
  factory: string;
  name: string;
  cost: number;
  upgrade: string;
  tyreType: string;
  topSpeed: number;
  acceleration: number;
  handling: number;
  driveTraction: string;
  weight: number;
  width: number;
  height: number;
  groundClearance: string;
  tractionControl: boolean;
  abs: boolean;
  peakPower: number;
  peakTorque: number;
  enginePosition: string;
  fuel: string;
  bodyStyle: string;
  seatCount: number;
  productionYear: number;

}

export class Car {

  id: number;
  factory: string;
  name: string;
  cost: number;
  upgrade: string;
  tyreType: string;
  topSpeed: number;
  acceleration: number;
  handling: number;
  driveTraction: string;
  weight: number;
  width: number;
  height: number;
  groundClearance: string;
  tractionControl: boolean;
  abs: boolean;
  peakPower: number;
  peakTorque: number;
  enginePosition: string;
  fuel: string;
  bodyStyle: string;
  seatCount: number;
  productionYear: number;

  constructor(carAttrs: Partial<Car> = {}) {
    this.id = carAttrs.id;
    this.factory = carAttrs.factory;
    this.name = carAttrs.name;
    this.cost = carAttrs.cost;
    this.upgrade = carAttrs.upgrade;
    this.tyreType = carAttrs.tyreType;
    this.topSpeed = carAttrs.topSpeed;
    this.acceleration = carAttrs.acceleration;
    this.handling = carAttrs.handling;
    this.driveTraction = carAttrs.driveTraction;
    this.weight = carAttrs.weight;
    this.width = carAttrs.width;
    this.height = carAttrs.height;
    this.groundClearance = carAttrs.groundClearance;
    this.tractionControl = carAttrs.tractionControl;
    this.abs = carAttrs.abs;
    this.peakPower = carAttrs.peakPower;
    this.peakTorque = carAttrs.peakTorque;
    this.enginePosition = carAttrs.enginePosition;
    this.fuel = carAttrs.fuel;
    this.bodyStyle = carAttrs.bodyStyle;
    this.seatCount = carAttrs.seatCount;
    this.productionYear = carAttrs.productionYear;
  }
}
