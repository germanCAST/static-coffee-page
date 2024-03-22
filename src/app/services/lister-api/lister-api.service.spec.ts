import { TestBed } from '@angular/core/testing';

import { ListerApiService } from './lister-api.service';

describe('ListerApiService', () => {
  let service: ListerApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListerApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
