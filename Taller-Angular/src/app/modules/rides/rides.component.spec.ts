// angular
import { ComponentFixture, TestBed } from '@angular/core/testing';
// rxjs
import { of } from 'rxjs';
// ride
import { RidesService } from '../../services/rides.service';
import { mockRide } from '../../modules/shared/mocks/rides.mock';
import { RidesComponent } from './rides.component';

let mockRideService: { getRideList: jest.Mock<any, any, any>; };
mockRideService = {
  getRideList: jest.fn()
}


describe('RidesComponent', () => {
  let component: RidesComponent;
  let fixture: ComponentFixture<RidesComponent>;

  beforeEach(async () => {
    mockRideService.getRideList.mockImplementation(()=>of([mockRide]));
    await TestBed.configureTestingModule({
      declarations: [ RidesComponent ],
      providers: [
        {provide: RidesService, useValue: mockRideService}]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RidesComponent);
    component = fixture.componentInstance;    
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
