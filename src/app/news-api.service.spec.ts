import { TestBed, inject } from '@angular/core/testing';

import { NewsAPIService } from './news-api.service';

describe('NewsAPIService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewsAPIService]
    });
  });

  it('should be created', inject([NewsAPIService], (service: NewsAPIService) => {
    expect(service).toBeTruthy();
  }));
});
