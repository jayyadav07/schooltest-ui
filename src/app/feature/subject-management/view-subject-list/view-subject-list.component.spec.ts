import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSubjectListComponent } from './view-subject-list.component';

describe('ViewSubjectListComponent', () => {
  let component: ViewSubjectListComponent;
  let fixture: ComponentFixture<ViewSubjectListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewSubjectListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewSubjectListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
