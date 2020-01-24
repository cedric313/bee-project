import { TestBed } from '@angular/core/testing';

import { GetLivestockService } from './get-livestock.service';

describe('GetLivestockService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetLivestockService = TestBed.get(GetLivestockService);
    expect(service).toBeTruthy();
  });
});
