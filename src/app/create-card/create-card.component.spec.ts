import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCardComponent } from './create-card.component';
import { GroupsService } from '../groups/groups.service';
import { SharedModule } from '../shared/shared.module';

describe('CreateCardComponent', () => {
  let component: CreateCardComponent;
  let fixture: ComponentFixture<CreateCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [CreateCardComponent],
      providers: [GroupsService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
