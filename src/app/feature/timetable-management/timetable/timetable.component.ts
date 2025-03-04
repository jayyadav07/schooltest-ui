import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';

type Teacher = 'john-smith' | 'emily-johnson' | 'michael-brown' | 'sarah-williams' | 'robert-davis';

interface TeacherSchedule {
  periodId: number;
  day: number;
  class: string;
  subject: string;
  room: string;
}

@Component({
  selector: 'app-timetable',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    MatSelectModule,
    MatFormFieldModule,
    FormsModule,
    MatTooltipModule
  ],
  templateUrl: './timetable.component.html',
  styleUrl: './timetable.component.scss'
})
export class TimetableComponent {

  selectedClass = '6a';
  selectedYear = '2025-2026';
  selectedTeacher = '';
  
  weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  
  periods = [
    { id: 1, name: 'Period 1', time: '8:00 - 8:45', isBreak: false },
    { id: 2, name: 'Period 2', time: '8:50 - 9:35', isBreak: false },
    { id: 3, name: 'Period 3', time: '9:40 - 10:25', isBreak: false },
    { id: 4, name: 'Break', time: '10:25 - 10:45', isBreak: true },
    { id: 5, name: 'Period 4', time: '10:45 - 11:30', isBreak: false },
    { id: 6, name: 'Period 5', time: '11:35 - 12:20', isBreak: false },
    { id: 7, name: 'Lunch', time: '12:20 - 1:00', isBreak: true },
    { id: 8, name: 'Period 6', time: '1:00 - 1:45', isBreak: false },
    { id: 9, name: 'Period 7', time: '1:50 - 2:35', isBreak: false },
    { id: 10, name: 'Period 8', time: '2:40 - 3:25', isBreak: false }
  ];
  
  timetableData = {
    '6a': [
      { periodId: 1, day: 0, subject: 'Mathematics', teacher: 'John Smith', room: '101' },
      { periodId: 1, day: 1, subject: 'English', teacher: 'Sarah Williams', room: '101' },
      { periodId: 1, day: 2, subject: 'Science', teacher: 'Emily Johnson', room: '101' },
      { periodId: 1, day: 3, subject: 'Social Studies', teacher: 'Michael Brown', room: '101' },
      { periodId: 1, day: 4, subject: 'Art', teacher: 'Jessica Miller', room: '101' },
      
      { periodId: 2, day: 0, subject: 'Science', teacher: 'Emily Johnson', room: '101' },
      { periodId: 2, day: 1, subject: 'Mathematics', teacher: 'John Smith', room: '101' },
      { periodId: 2, day: 2, subject: 'English', teacher: 'Sarah Williams', room: '101' },
      { periodId: 2, day: 3, subject: 'Computer Science', teacher: 'David Wilson', room: '301' },
      { periodId: 2, day: 4, subject: 'Social Studies', teacher: 'Michael Brown', room: '101' },
      
      { periodId: 3, day: 0, subject: 'English', teacher: 'Sarah Williams', room: '101' },
      { periodId: 3, day: 1, subject: 'Science', teacher: 'Emily Johnson', room: '101' },
      { periodId: 3, day: 2, subject: 'Mathematics', teacher: 'John Smith', room: '101' },
      { periodId: 3, day: 3, subject: 'Art', teacher: 'Jessica Miller', room: '101' },
      { periodId: 3, day: 4, subject: 'Physical Education', teacher: 'Robert Davis', room: 'Gym' },
      
      { periodId: 5, day: 0, subject: 'Social Studies', teacher: 'Michael Brown', room: '101' },
      { periodId: 5, day: 1, subject: 'Computer Science', teacher: 'David Wilson', room: '301' },
      { periodId: 5, day: 2, subject: 'Physical Education', teacher: 'Robert Davis', room: 'Gym' },
      { periodId: 5, day: 3, subject: 'Mathematics', teacher: 'John Smith', room: '101' },
      { periodId: 5, day: 4, subject: 'English', teacher: 'Sarah Williams', room: '101' },
      
      { periodId: 6, day: 0, subject: 'Computer Science', teacher: 'David Wilson', room: '301' },
      { periodId: 6, day: 1, subject: 'Social Studies', teacher: 'Michael Brown', room: '101' },
      { periodId: 6, day: 2, subject: 'Art', teacher: 'Jessica Miller', room: '101' },
      { periodId: 6, day: 3, subject: 'Science', teacher: 'Emily Johnson', room: '101' },
      { periodId: 6, day: 4, subject: 'Mathematics', teacher: 'John Smith', room: '101' },
      
      { periodId: 8, day: 0, subject: 'Art', teacher: 'Jessica Miller', room: '101' },
      { periodId: 8, day: 1, subject: 'Physical Education', teacher: 'Robert Davis', room: 'Gym' },
      { periodId: 8, day: 2, subject: 'Social Studies', teacher: 'Michael Brown', room: '101' },
      { periodId: 8, day: 3, subject: 'English', teacher: 'Sarah Williams', room: '101' },
      { periodId: 8, day: 4, subject: 'Science', teacher: 'Emily Johnson', room: '101' },
      
      { periodId: 9, day: 0, subject: 'Physical Education', teacher: 'Robert Davis', room: 'Gym' },
      { periodId: 9, day: 1, subject: 'Art', teacher: 'Jessica Miller', room: '101' },
      { periodId: 9, day: 2, subject: 'Computer Science', teacher: 'David Wilson', room: '301' },
      { periodId: 9, day: 3, subject: 'Social Studies', teacher: 'Michael Brown', room: '101' },
      { periodId: 9, day: 4, subject: 'Computer Science', teacher: 'David Wilson', room: '301' },
      
      { periodId: 10, day: 0, subject: 'Library', teacher: 'Amanda Taylor', room: 'Library' },
      { periodId: 10, day: 1, subject: 'Music', teacher: 'Amanda Taylor', room: 'Music Room' },
      { periodId: 10, day: 2, subject: 'Library', teacher: 'Amanda Taylor', room: 'Library' },
      { periodId: 10, day: 3, subject: 'Music', teacher: 'Amanda Taylor', room: 'Music Room' },
      { periodId: 10, day: 4, subject: 'Class Meeting', teacher: 'John Smith', room: '101' }
    ]
  };
  
  teacherSchedules = {
    'john-smith': [
      { periodId: 1, day: 0, class: 'Class 6-A', subject: 'Mathematics', room: '101' },
      { periodId: 2, day: 1, class: 'Class 6-A', subject: 'Mathematics', room: '101' },
      { periodId: 3, day: 2, class: 'Class 6-A', subject: 'Mathematics', room: '101' },
      { periodId: 5, day: 3, class: 'Class 6-A', subject: 'Mathematics', room: '101' },
      { periodId: 6, day: 4, class: 'Class 6-A', subject: 'Mathematics', room: '101' },
      { periodId: 1, day: 1, class: 'Class 7-A', subject: 'Mathematics', room: '201' },
      { periodId: 2, day: 2, class: 'Class 7-A', subject: 'Mathematics', room: '201' },
      { periodId: 3, day: 3, class: 'Class 7-A', subject: 'Mathematics', room: '201' },
      { periodId: 5, day: 4, class: 'Class 7-A', subject: 'Mathematics', room: '201' },
      { periodId: 6, day: 0, class: 'Class 7-A', subject: 'Mathematics', room: '201' },
      { periodId: 10, day: 4, class: 'Class 6-A', subject: 'Class Meeting', room: '101' }
    ]
  };
  
  getClassName(): string {
    switch(this.selectedClass) {
      case '6a': return '6-A';
      case '7a': return '7-A';
      case '8a': return '8-A';
      case '9a': return '9-A';
      case '10a': return '10-A';
      default: return '';
    }
  }
  
  getTimetableCell(periodId: number, day: number): any {
    // if (!this.timetableData[this.selectedClass]) return null;
    
    // return this.timetableData[this.selectedClass].find(
    //   (      cell: { periodId: number; day: number; }) => cell.periodId === periodId && cell.day === day
    // );
  }
  
  getCellTooltip(periodId: number, day: number): string {
    const cell = this.getTimetableCell(periodId, day);
    if (!cell) return '';
    
    return `${cell.subject}\nTeacher: ${cell.teacher}\nRoom: ${cell.room}`;
  }
  
  getTeacherName(): string {
    switch(this.selectedTeacher) {
      case 'john-smith': return 'John Smith';
      case 'emily-johnson': return 'Emily Johnson';
      case 'michael-brown': return 'Michael Brown';
      case 'sarah-williams': return 'Sarah Williams';
      case 'robert-davis': return 'Robert Davis';
      default: return '';
    }
  }
  
  getTeacherScheduleCell(periodId: number, day: number): any {
    // if (!this.teacherSchedules[this.selectedTeacher]) return null;
    
    // return this.teacherSchedules[this.selectedTeacher].find(
    //   (      cell: { periodId: number; day: number; }) => cell.periodId === periodId && cell.day === day
    // );
  }
  
  getTeacherCellTooltip(periodId: number, day: number): string {
    const cell = this.getTeacherScheduleCell(periodId, day);
    if (!cell) return '';
    
    return `${cell.class}\n${cell.subject}\nRoom: ${cell.room}`;
  }
}
