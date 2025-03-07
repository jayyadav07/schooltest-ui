import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleUpdateComponent } from './vehicle-update.component';

describe('VehicleUpdateComponent', () => {
  let component: VehicleUpdateComponent;
  let fixture: ComponentFixture<VehicleUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VehicleUpdateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehicleUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
