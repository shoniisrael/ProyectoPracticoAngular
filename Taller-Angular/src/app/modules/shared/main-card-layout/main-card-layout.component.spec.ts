import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCardLayoutComponent } from './main-card-layout.component';

describe('MainCardLayoutComponent', () => {
  let component: MainCardLayoutComponent;
  let fixture: ComponentFixture<MainCardLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainCardLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainCardLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
