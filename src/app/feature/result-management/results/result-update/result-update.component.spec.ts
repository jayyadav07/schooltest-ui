import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultUpdateComponent } from './result-update.component';

describe('ResultUpdateComponent', () => {
  let component: ResultUpdateComponent;
  let fixture: ComponentFixture<ResultUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResultUpdateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
