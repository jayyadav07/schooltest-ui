import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSalaryStructureComponent } from './update-salary-structure.component';

describe('UpdateSalaryStructureComponent', () => {
  let component: UpdateSalaryStructureComponent;
  let fixture: ComponentFixture<UpdateSalaryStructureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateSalaryStructureComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateSalaryStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
