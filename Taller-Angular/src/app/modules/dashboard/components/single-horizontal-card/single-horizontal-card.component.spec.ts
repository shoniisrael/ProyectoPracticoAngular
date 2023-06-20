import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleHorizontalCardComponent } from './single-horizontal-card.component';

describe('SingleHorizontalCardComponent', () => {
  let component: SingleHorizontalCardComponent;
  let fixture: ComponentFixture<SingleHorizontalCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleHorizontalCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleHorizontalCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
