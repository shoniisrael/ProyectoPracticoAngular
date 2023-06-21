import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { DriverService } from './drivers.service';

describe('DriverService', () => {
  let service: DriverService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DriverService],
    });
    service = TestBed.inject(DriverService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should retrieve the list of Drivers', () => {
    const mockData = {
      records: [
        // Mock data goes here
      ],
    };

    service.getDriversList().subscribe((data) => {
      expect(data).toEqual(mockData);
    });

    const req = httpMock.expectOne(service['url']);
    expect(req.request.method).toBe('GET');
    req.flush(mockData);
  });
});
