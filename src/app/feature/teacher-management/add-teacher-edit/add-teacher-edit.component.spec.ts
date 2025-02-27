import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTeacherEditComponent } from './add-teacher-edit.component';

describe('AddTeacherEditComponent', () => {
  let component: AddTeacherEditComponent;
  let fixture: ComponentFixture<AddTeacherEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddTeacherEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTeacherEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
