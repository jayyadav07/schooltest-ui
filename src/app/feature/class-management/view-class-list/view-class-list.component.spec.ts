import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewClassListComponent } from './view-class-list.component';

describe('ViewClassListComponent', () => {
  let component: ViewClassListComponent;
  let fixture: ComponentFixture<ViewClassListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewClassListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewClassListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
