import { TestBed } from '@angular/core/testing';

import { FreeapiServiceService } from './freeapi-service.service';

describe('FreeapiServiceService', () => {
  let service: FreeapiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FreeapiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
