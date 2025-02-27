import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentRegisterEditComponent } from './student-register-edit.component';

describe('StudentRegisterEditComponent', () => {
  let component: StudentRegisterEditComponent;
  let fixture: ComponentFixture<StudentRegisterEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentRegisterEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentRegisterEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
