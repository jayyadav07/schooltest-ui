import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core'; // Required for datepicker
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-school-information',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatCheckboxModule
  ],
  templateUrl: './school-information.component.html',
  styleUrl: './school-information.component.scss'
})
export class SchoolInformationComponent {
  schoolInfoForm: FormGroup;
  principalInfoForm: FormGroup;
  facilitiesInfoForm: FormGroup;

  // Progress tracking
  progressWidth = 0;
  progressColor = '#ff5733'; // Initial color

  constructor(private fb: FormBuilder) {
    this.schoolInfoForm = this.fb.group({
      schoolLogo: [null],
      schoolName: ['', Validators.required],
      board: ['', Validators.required],
      establishmentYear: ['', Validators.required],
      contactNumber: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required]
    });

    this.principalInfoForm = this.fb.group({
      principalName: ['', Validators.required],
      principalEmail: ['', [Validators.required, Validators.email]],
      principalPhone: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      principalQualification: ['', Validators.required],
      principalExperience: ['', [Validators.required, Validators.min(0)]]
    });

    this.facilitiesInfoForm = this.fb.group({
      playground: [false],
      library: [false],
      computerLab: [false],
      scienceLab: [false],
      sportsComplex: [false],
      auditorium: [false],
      transportation: [false],
      canteen: [false],
      medicalRoom: [false]
    });
  }

  // Check form validity for all steps
  isFormValid(): boolean {
    return this.schoolInfoForm.valid &&
           this.principalInfoForm.valid &&
           this.facilitiesInfoForm.valid;
  }

  // Handle form submission
  onSubmit(): void {
    if (this.isFormValid()) {
      const formData = {
        ...this.schoolInfoForm.value,
        ...this.principalInfoForm.value,
        ...this.facilitiesInfoForm.value
      };
      
      console.log('Form submitted:', formData);
      alert('Registration submitted successfully!');
    }
  }

  // Update progress tracking
  updateProgress(): void {
    const totalSteps = 3; // Number of steps
    let completedSteps = 0;

    if (this.schoolInfoForm.valid) completedSteps++;
    if (this.principalInfoForm.valid) completedSteps++;
    if (this.facilitiesInfoForm.valid) completedSteps++;

    this.progressWidth = (completedSteps / totalSteps) * 100;

    if (completedSteps === totalSteps) {
      this.progressColor = '#4caf50'; // Green when fully completed
    } else {
      this.progressColor = '#ff5733'; // Orange for incomplete steps
    }
  }
}
