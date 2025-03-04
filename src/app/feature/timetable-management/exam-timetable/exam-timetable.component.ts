import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Class, ExamTimeSlot, ExamType, Subject } from '../../../core/models/timetable.model';
import { TimetableService } from '../../../core/services/timetable.service';


@Component({
  selector: 'app-exam-timetable',
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
  templateUrl: './exam-timetable.component.html',
  styleUrl: './exam-timetable.component.scss'
})
export class ExamTimetableComponent implements OnInit {

  examTimetableForm: FormGroup;
  classes: Class[] = [];
  subjects: Subject[] = [];
  examTypes: ExamType[] = [];
  timeSlots: ExamTimeSlot[] = [];
  days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  
  constructor(
    private fb: FormBuilder,
    private timetableService: TimetableService
  ) {
    this.examTimetableForm = this.fb.group({
      classId: ['', Validators.required],
      academicYearId: ['', Validators.required],
      examTypeId: ['', Validators.required],
      timeSlots: this.fb.array([]),
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
    
    this.timetableService.getExamTypes().subscribe(examTypes => {
      this.examTypes = examTypes;
    });
    
    this.timetableService.getExamTimeSlots().subscribe(timeSlots => {
      this.timeSlots = timeSlots;
     // this.initTimeSlots();
      this.initEntries();
    });
  }

  get timeSlotsArray(): FormArray {
    return this.examTimetableForm.get('timeSlots') as FormArray;
  }

  get entries(): FormArray {
    return this.examTimetableForm.get('entries') as FormArray;
  }

  initTimeSlots(): void {
    // Clear existing time slots
    while (this.timeSlotsArray.length) {
      this.timeSlotsArray.removeAt(0);
    }
    
    // Group time slots by time (startTime-endTime)
    const uniqueTimes = Array.from(new Set(this.timeSlots.map(slot => `${slot.startTime}-${slot.endTime}`)));
    
    // Create form groups for each unique time
    uniqueTimes.forEach(time => {
      const [startTime, endTime] = time.split('-');
      const timeSlotGroup = this.fb.group({
        startTime: [startTime, Validators.required],
        endTime: [endTime, Validators.required]
      });
      
      this.timeSlotsArray.push(timeSlotGroup);
    });
  }

  initEntries(): void {
    // Clear existing entries
    while (this.entries.length) {
      this.entries.removeAt(0);
    }
    
    // Group time slots by time (startTime-endTime)
    const uniqueTimes = Array.from(new Set(this.timeSlots.map(slot => `${slot.startTime}-${slot.endTime}`)));
    
    // Create form groups for each unique time
    uniqueTimes.forEach(time => {
      const entryGroup = this.fb.group({
        timeSlot: [time],
        monday: [null],
        tuesday: [null],
        wednesday: [null],
        thursday: [null],
        friday: [null]
      });
      
      this.entries.push(entryGroup);
    });
  }

  updateTimeSlot(index: number): void {
    const timeSlotGroup = this.timeSlotsArray.at(index) as FormGroup;
    const startTime = timeSlotGroup.get('startTime')?.value;
    const endTime = timeSlotGroup.get('endTime')?.value;
    
    // Update the corresponding entry's timeSlot
    const entryGroup = this.entries.at(index) as FormGroup;
    entryGroup.get('timeSlot')?.setValue(`${startTime}-${endTime}`);
  }

  onSubmit(): void {
    if (this.examTimetableForm.valid) {
      console.log('Exam Timetable form submitted:', this.examTimetableForm.value);
      // Here you would call a service method to save the exam timetable
    } else {
      this.markFormGroupTouched(this.examTimetableForm);
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

  getExamTypeName(examTypeId: string): string {
    const foundExamType = this.examTypes.find(e => e.id === examTypeId);
    return foundExamType ? foundExamType.name : '';
  }

  getSubjectName(subjectId: string): string {
    const foundSubject = this.subjects.find(s => s.id === subjectId);
    return foundSubject ? foundSubject.name : '';
  }

  cancel(): void {
    this.examTimetableForm.reset();
    this.initTimeSlots();
    this.initEntries();
  }
}
