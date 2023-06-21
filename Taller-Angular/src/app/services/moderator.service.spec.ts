import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { ModeratorService } from './moderator.service';

describe('ModeratorService', () => {
  let service: ModeratorService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ModeratorService],
    });
    service = TestBed.inject(ModeratorService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should retrieve the list of moderators', () => {
    const mockData = {
      records: [
        // Mock data goes here
      ],
    };

    service.getModeratorsList().subscribe((data) => {
      expect(data).toEqual(mockData);
    });

    const req = httpMock.expectOne(service['url']);
    expect(req.request.method).toBe('GET');
    req.flush(mockData);
  });
});
