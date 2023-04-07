import { TestBed } from '@angular/core/testing';

import { RidesService } from './rides.service';
import { Ride } from '../models/rides.interface';

import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { environment } from '../../environments/environment';

const mockRideList: Ride[] = [
  {
    user: {
      name: 'Sierra Ferguson',
      phone: '+593 995 836 045',
      avatar: 'https://i.pravatar.cc/300',
    },
    status: 'completed',
    car_comfort: 'convenient',
    ordered_time: '04/10/2023 20:30:00',
    start_location: 'El Corazón 320, Villaflora, Quito, Ecuador',
    finish_location: 'Amazonas 445 y Pereria, Quito, Ecuador',
    income: '35.44',
  },
];

describe('RidesService', () => {
  let service: RidesService;
  let httpController: HttpTestingController;
  let apiUrl = environment.apiUrl + 'rides';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(RidesService);
    httpController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpController.verify();
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
    const req = httpController.expectOne(url);
    expect(req.request.method).toEqual('GET');
    req.flush(mockRideList);
  });
});
