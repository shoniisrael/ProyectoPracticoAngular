import { TestBed } from '@angular/core/testing';

import { Ride } from '../models/rides.interface';

import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { environment } from '../../environments/environment';
import { RidesService } from '../../app/services/rides.service';
import { mockRide } from '../modules/shared/mocks/rides.mock';

const mockRideList = {
  records: [
    // Mock data goes here
  ],
};

describe('RidesService', () => {
  let service: RidesService;
  let httpControllerMock: HttpTestingController;
  let apiUrl = environment.apiUrl;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(RidesService);
    httpControllerMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpControllerMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should get a list of rides', (doneFn) => {
    service.getRideList().subscribe((data) => {
      expect(data).toEqual(mockRideList);
      doneFn();
    });
    const url = apiUrl;
    const req = httpControllerMock.expectOne(service['url']);
    expect(req.request.method).toEqual('GET');
    req.flush(mockRideList);
  });
});
