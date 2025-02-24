import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssigneClassComponent } from './assigne-class.component';

describe('AssigneClassComponent', () => {
  let component: AssigneClassComponent;
  let fixture: ComponentFixture<AssigneClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssigneClassComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssigneClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
