import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, ReactiveFormsModule } from '@angular/forms';
import { Subject, Class, Teacher, TimeSlot } from '../../../core/models/timetable.model';
import { TimetableService } from '../../../core/services/timetable.service';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-add-timetable',
  standalone: true,
  imports: [CommonModule,
      MatCardModule,
      MatButtonModule,
      MatIconModule,
      MatTabsModule,
      MatSelectModule,
      MatFormFieldModule,
      FormsModule,
      CommonModule,
      ReactiveFormsModule,
      MatTooltipModule],
  templateUrl: './add-timetable.component.html',
  styleUrl: './add-timetable.component.scss'
})
export class AddTimetableComponent {
  timetableForm: FormGroup;
  classes: Class[] = [];
  subjects: Subject[] = [];
  teachers: Teacher[] = [];
  timeSlots: TimeSlot[] = [];

  days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  
  constructor(
    private fb: FormBuilder,
    private timetableService: TimetableService
  ) {
    this.timetableForm = this.fb.group({
      classId: ['', Validators.required],
      academicYearId: ['', Validators.required],
      entries: this.fb.array([])
    });
  }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.timetableService.getClasses().subscribe(classes => {
      this.classes = classes;
    });
    
    this.timetableService.getSubjects().subscribe(subjects => {
      this.subjects = subjects;
    });
    
    this.timetableService.getTeachers().subscribe(teachers => {
      this.teachers = teachers;
    });
    
    this.timetableService.getTimeSlots().subscribe(timeSlots => {
      this.timeSlots = timeSlots;
      this.initEntries();
    });
  }

  get entries(): FormArray {
    return this.timetableForm.get('entries') as FormArray;
  }

  initEntries(): void {
    // Clear existing entries
    while (this.entries.length) {
      this.entries.removeAt(0);
    }
    
    // Create form groups for each time slot
    this.timeSlots.forEach(timeSlot => {
      const entryGroup = this.fb.group({
        timeSlotId: [timeSlot.startTime + '-' + timeSlot.endTime],
        monday: [null],
        tuesday: [null],
        wednesday: [null],
        thursday: [null],
        friday: [null]
      });
      
      this.entries.push(entryGroup);
    });
  }

  onSubmit(): void {
    if (this.timetableForm.valid) {
      console.log('Timetable form submitted:', this.timetableForm.value);
      // Here you would call a service method to save the timetable
    } else {
      this.markFormGroupTouched(this.timetableForm);
    }
  }

  markFormGroupTouched(formGroup: FormGroup): void {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();
      
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }

  getClassName(classId: string): string {
    const foundClass = this.classes.find(c => c.id === classId);
    return foundClass ? foundClass.name : '';
  }

  getSubjectName(subjectId: string): string {
    const foundSubject = this.subjects.find(s => s.id === subjectId);
    return foundSubject ? foundSubject.name : '';
  }

  getTeacherName(teacherId: string): string {
    const foundTeacher = this.teachers.find(t => t.id === teacherId);
    return foundTeacher ? foundTeacher.name : '';
  }

  cancel(): void {
    this.timetableForm.reset();
    this.initEntries();
  }
}
