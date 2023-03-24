import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComCComponent } from './com-c.component';

describe('ComCComponent', () => {
  let component: ComCComponent;
  let fixture: ComponentFixture<ComCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComCComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
