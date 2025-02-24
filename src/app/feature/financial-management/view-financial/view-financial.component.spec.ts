import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFinancialComponent } from './view-financial.component';

describe('ViewFinancialComponent', () => {
  let component: ViewFinancialComponent;
  let fixture: ComponentFixture<ViewFinancialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewFinancialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewFinancialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
