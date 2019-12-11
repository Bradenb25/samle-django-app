import { TestBed, inject } from '@angular/core/testing';

import { DetailService } from './detail-service.service';

describe('DetailServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DetailService]
    });
  });

  it('should be created', inject([DetailService], (service: DetailService) => {
    expect(service).toBeTruthy();
  }));
});
