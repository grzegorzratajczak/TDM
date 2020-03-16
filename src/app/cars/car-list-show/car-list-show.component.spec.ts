import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarListShowComponent } from './car-list-show.component';

describe('CarListShowComponent', () => {
  let component: CarListShowComponent;
  let fixture: ComponentFixture<CarListShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarListShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarListShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
