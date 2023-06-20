// angular
import { ComponentFixture, TestBed } from '@angular/core/testing';
// rxjs
import { of } from 'rxjs';
// moderator
import { ModeratorService } from '../../services/moderator.service';
import { mockModerator } from '../../modules/shared/mocks/moderator.mock';
import { ModeratorComponent } from './moderator.component';

let mockModeratorsService: { getModeratorsList: jest.Mock<any, any, any> };
mockModeratorsService = {
  getModeratorsList: jest.fn(),
};
describe('ModeratorComponent', () => {
  let component: ModeratorComponent;
  let fixture: ComponentFixture<ModeratorComponent>;

  beforeEach(async () => {
    mockModeratorsService.getModeratorsList.mockImplementation(() =>
      of([mockModerator])
    );
    await TestBed.configureTestingModule({
      declarations: [ModeratorComponent],
      providers: [
        {
          provide: ModeratorService,
          useValue: mockModeratorsService,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ModeratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
