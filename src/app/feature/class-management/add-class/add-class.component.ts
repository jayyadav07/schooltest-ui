import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { MatChipsModule } from '@angular/material/chips';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatBadgeModule } from '@angular/material/badge';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-add-class',
  standalone: true,
  imports: [ CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
    MatSelectModule,
    MatTabsModule,
    MatChipsModule,
    MatTooltipModule,
    MatProgressBarModule,
    MatBadgeModule],
  templateUrl: './add-class.component.html',
  styleUrl: './add-class.component.scss'
})
export class AddClassComponent {

  displayedColumns: string[] = ['name', 'gradeLevel', 'classTeacher', 'students', 'room', 'subjects', 'status', 'actions'];
  
  classes = [
    {
      name: 'Class 6',
      section: 'A',
      gradeLevel: 'Grade 6',
      classTeacher: 'John Smith',
      studentCount: 28,
      capacity: 30,
      room: 'Room 101',
      subjects: ['Mathematics', 'Science', 'English', 'Social Studies', 'Art'],
      status: 'Active'
    },
    {
      name: 'Class 6',
      section: 'B',
      gradeLevel: 'Grade 6',
      classTeacher: 'Emily Johnson',
      studentCount: 30,
      capacity: 30,
      room: 'Room 102',
      subjects: ['Mathematics', 'Science', 'English', 'Social Studies', 'Music'],
      status: 'Active'
    },
    {
      name: 'Class 7',
      section: 'A',
      gradeLevel: 'Grade 7',
      classTeacher: 'Michael Brown',
      studentCount: 25,
      capacity: 30,
      room: 'Room 201',
      subjects: ['Mathematics', 'Science', 'English', 'History', 'Geography'],
      status: 'Active'
    },
    {
      name: 'Class 8',
      section: 'A',
      gradeLevel: 'Grade 8',
      classTeacher: 'Sarah Williams',
      studentCount: 27,
      capacity: 30,
      room: 'Room 301',
      subjects: ['Mathematics', 'Physics', 'Chemistry', 'Biology', 'Computer Science'],
      status: 'Active'
    },
    {
      name: 'Class 9',
      section: 'A',
      gradeLevel: 'Grade 9',
      classTeacher: 'Robert Davis',
      studentCount: 32,
      capacity: 35,
      room: 'Room 401',
      subjects: ['Mathematics', 'Physics', 'Chemistry', 'Biology', 'English Literature'],
      status: 'Active'
    },
    {
      name: 'Class 10',
      section: 'A',
      gradeLevel: 'Grade 10',
      classTeacher: 'Jessica Miller',
      studentCount: 34,
      capacity: 35,
      room: 'Room 501',
      subjects: ['Mathematics', 'Physics', 'Chemistry', 'Biology', 'Computer Science'],
      status: 'Active'
    },
    {
      name: 'Class 11',
      section: 'Science',
      gradeLevel: 'Grade 11',
      classTeacher: 'David Wilson',
      studentCount: 25,
      capacity: 30,
      room: 'Room 601',
      subjects: ['Mathematics', 'Physics', 'Chemistry', 'Biology', 'Computer Science'],
      status: 'Active'
    },
    {
      name: 'Class 11',
      section: 'Commerce',
      gradeLevel: 'Grade 11',
      classTeacher: 'Amanda Taylor',
      studentCount: 20,
      capacity: 30,
      room: 'Room 602',
      subjects: ['Accountancy', 'Business Studies', 'Economics', 'Mathematics', 'English'],
      status: 'Active'
    }
  ];

  getCapacityClass(studentCount: number, capacity: number): string {
    const percentage = (studentCount / capacity) * 100;
    if (percentage < 70) return 'capacity-low';
    if (percentage < 90) return 'capacity-medium';
    return 'capacity-high';
  }
}
