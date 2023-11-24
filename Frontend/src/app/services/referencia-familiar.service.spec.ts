import { TestBed } from '@angular/core/testing';

import { ReferenciaFamiliarService } from './referencia-familiar.service';

describe('ReferenciaFamiliarService', () => {
  let service: ReferenciaFamiliarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReferenciaFamiliarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
