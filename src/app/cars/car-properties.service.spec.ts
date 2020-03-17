import { TestBed } from '@angular/core/testing';

import { CarPropertiesService } from './car-properties.service';

describe('CarPropertiesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CarPropertiesService = TestBed.get(CarPropertiesService);
    expect(service).toBeTruthy();
  });
});
