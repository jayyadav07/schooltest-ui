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

@Component({
  selector: 'app-add-teacher-edit',
   imports:[
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
          MatDividerModule
    ],
  templateUrl: './add-teacher-edit.component.html',
  styleUrl: './add-teacher-edit.component.scss'
})
export class AddTeacherEditComponent {

  // Form Groups for each step
  basicInfoForm: FormGroup;
  addressForm: FormGroup;
  professionalForm: FormGroup;
  termsAccepted = false;

  // Progress tracking
  progressWidth = 0;
  progressColor = '#ff5733'; // Initial color

  // Sample data for dropdowns (replace with actual data from your backend)
  subjects = [
    { id: 1, name: 'Mathematics' },
    { id: 2, name: 'Science' },
    { id: 3, name: 'English' },
    { id: 4, name: 'History' }
  ];

  constructor(private fb: FormBuilder) {
    // Initialize forms with validation
    this.basicInfoForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      dob: ['', Validators.required],
      gender: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.required]
    });

    this.addressForm = this.fb.group({
      streetAddress: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      postalCode: ['', Validators.required]
    });

    this.professionalForm = this.fb.group({
      joiningDate: ['', Validators.required],
      subjectId: ['', Validators.required],
      salaryId: ['', Validators.required]
    });
  }

  // Check if all forms are valid
  isFormValid(): boolean {
    return (
      this.basicInfoForm.valid &&
      this.addressForm.valid &&
      this.professionalForm.valid &&
      this.termsAccepted
    );
  }

  // Submit the form
  onSubmit(): void {
    if (this.isFormValid()) {
      // Combine all form data
      const formData = {
        ...this.basicInfoForm.value,
        ...this.addressForm.value,
        ...this.professionalForm.value
      };

      console.log('Form submitted:', formData);
      // Here you would typically send the data to your backend
      alert('Teacher registration submitted successfully!');
    }
  }

  // Update progress bar
  updateProgress(): void {
    const totalSteps = 3; // Total number of steps
    let completedSteps = 0;

    // Check each form's validity
    if (this.basicInfoForm.valid) completedSteps++;
    if (this.addressForm.valid) completedSteps++;
    if (this.professionalForm.valid) completedSteps++;

    // Calculate progress width
    this.progressWidth = (completedSteps / totalSteps) * 100;

    // Update progress color based on completion
    if (completedSteps === totalSteps) {
      this.progressColor = '#4caf50'; // Green when fully completed
    } else {
      this.progressColor = '#ff5733'; // Orange for incomplete steps
    }
  }
  getSubjectName(subjectId: number): string {
    const subject = this.subjects.find(sub => sub.id === subjectId);
    return subject ? subject.name : 'Not selected';
  }
}
