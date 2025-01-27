import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopDriversComponent } from './top-drivers.component';
import { DriverService } from 'src/app/services/drivers.service';

let mockAPIService1: any;
mockAPIService1 = {
  getDriversList: jest.fn(),
};
describe('TopDriversComponent', () => {
  let component: TopDriversComponent;
  let fixture: ComponentFixture<TopDriversComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TopDriversComponent],
      providers: [{ provide: DriverService, useValue: mockAPIService1 }],
    }).compileComponents();

    fixture = TestBed.createComponent(TopDriversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
