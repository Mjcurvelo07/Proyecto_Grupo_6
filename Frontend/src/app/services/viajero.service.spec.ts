import { TestBed } from '@angular/core/testing';

import { ViajeroService } from './viajero.service';

describe('ViajeroService', () => {
  let service: ViajeroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViajeroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
