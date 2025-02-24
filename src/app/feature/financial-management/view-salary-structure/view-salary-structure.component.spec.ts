import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSalaryStructureComponent } from './view-salary-structure.component';

describe('ViewSalaryStructureComponent', () => {
  let component: ViewSalaryStructureComponent;
  let fixture: ComponentFixture<ViewSalaryStructureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewSalaryStructureComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewSalaryStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
