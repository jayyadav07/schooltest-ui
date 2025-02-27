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
  selector: 'app-student-register-edit',
  standalone: true,
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
  templateUrl: './student-register-edit.component.html',
  styleUrl: './student-register-edit.component.scss'
})
export class StudentRegisterEditComponent {
  basicInfoForm: FormGroup;
  identificationForm: FormGroup;
  familyInfoForm: FormGroup;
  addressForm: FormGroup;
  academicInfoForm: FormGroup;
  termsAccepted = false;

    // Progress tracking
  progressWidth = 0;
  progressColor = '#ff5733'; // Initial color

  constructor(private fb: FormBuilder) {
    this.basicInfoForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      dob: ['', Validators.required],
      gender: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.required]
    });

    this.identificationForm = this.fb.group({
      aadharNumber: ['', Validators.required],
      birthCertificateNo: [''],
      tcNumber: ['']
    });

    this.familyInfoForm = this.fb.group({
      fatherName: ['', Validators.required],
      motherName: ['', Validators.required],
      guardianName: [''],
      guardianPhone: [''],
      emergencyContact: ['', Validators.required],
      emergencyContactNo: ['', Validators.required]
    });

    this.addressForm = this.fb.group({
      streetAddress: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      postalCode: ['', Validators.required]
    });

    this.academicInfoForm = this.fb.group({
      classId: ['', Validators.required],
      rollNumber: [''],
      admissionDate: [new Date(), Validators.required],
      status: ['active', Validators.required]
    });
  }

  isFormValid(): boolean {
    return this.basicInfoForm.valid && 
           this.identificationForm.valid && 
           this.familyInfoForm.valid && 
           this.addressForm.valid && 
           this.academicInfoForm.valid && 
           this.termsAccepted;
  }

  onSubmit(): void {
    if (this.isFormValid()) {
      // Combine all form data
      const formData = {
        ...this.basicInfoForm.value,
        ...this.identificationForm.value,
        ...this.familyInfoForm.value,
        ...this.addressForm.value,
        ...this.academicInfoForm.value
      };
      
      console.log('Form submitted:', formData);
      // Here you would typically send the data to your backend
      alert('Registration submitted successfully!');
    }
  }
    // Calculate progress width and color
    updateProgress(): void {
      const totalSteps = 5; // Total number of steps
      let completedSteps = 0;
  
      // Check each form's validity
      if (this.basicInfoForm.valid) completedSteps++;
      if (this.identificationForm.valid) completedSteps++;
      if (this.familyInfoForm.valid) completedSteps++;
      if (this.addressForm.valid) completedSteps++;
      if (this.academicInfoForm.valid) completedSteps++;
  
      // Calculate progress width
      this.progressWidth = (completedSteps / totalSteps) * 100;
  
      // Update progress color based on completion
      if (completedSteps === totalSteps) {
        this.progressColor = '#4caf50'; // Green when fully completed
      } else {
        this.progressColor = '#ff5733'; // Orange for incomplete steps
      }
    }
}
