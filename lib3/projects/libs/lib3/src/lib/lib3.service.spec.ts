import { TestBed } from '@angular/core/testing';

import { Lib3Service } from './lib3.service';

describe('Lib3Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Lib3Service = TestBed.get(Lib3Service);
    expect(service).toBeTruthy();
  });
});
