import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolInformationListComponent } from './school-information-list.component';

describe('SchoolInformationListComponent', () => {
  let component: SchoolInformationListComponent;
  let fixture: ComponentFixture<SchoolInformationListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SchoolInformationListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchoolInformationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
