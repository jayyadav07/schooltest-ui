import { Component } from '@angular/core';
import { CommonModule, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';

export interface Student {
  id: number;
  firstName: string;
  lastName: string;
  classId: number;
  phoneNumber: number;
  status: 'active' | 'inactive';
  admissionDate: string;
}

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [
    FormsModule,
    MatSlideToggleModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDatepickerModule,
    MatInputModule,
    NgSwitchDefault,
    NgSwitchCase,
    CommonModule,
    MatNativeDateModule
  ],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.scss'
})
export class StudentListComponent {
  displayedColumns: string[] = ['id','firstName', 'lastName', 'classId', 'phoneNumber','status', 'actions'];
  students: Student[] = [
    { id: 1, firstName: 'John', lastName: 'Doe', classId: 10, phoneNumber:988277363, status: 'active', admissionDate: '2023-01-15'},
    { id: 2, firstName: 'Jane', lastName: 'Smith', classId: 12, phoneNumber:988277363, status: 'inactive' , admissionDate: '2023-02-20'},
    { id: 3, firstName: 'Alice', lastName: 'Johnson', classId: 11, phoneNumber:988277363, status: 'active' , admissionDate: '2023-03-10'  },
  ];
  dataSource = new MatTableDataSource<Student>(this.students);
  // Filter Data
  filteredDataSource = this.dataSource;
  // Filter Options
  classes = [10, 11, 12];
  statuses = ['active', 'inactive'];
  selectedClass: number | null = null;
  selectedStatus: string | null = null;
  startDate: Date | null = null;
  endDate: Date | null = null;
  searchQuery: string = '';

  toggleStatus(student: Student): void {
    student.status = student.status === 'active' ? 'inactive' : 'active';
  }

  editStudent(student: Student): void {
    console.log('Edit student:', student);
  }

  deleteStudent(student: Student): void {
    console.log('Delete student:', student);
  }

  // Apply Filters
  applyFilters(): void {
    
  }

  // Check if admission date is within the selected range
  isWithinDateRange(admissionDate: string): boolean {
    if (!this.startDate || !this.endDate) return true; // No date range selected
    const date = new Date(admissionDate);
    return date >= this.startDate && date <= this.endDate;
  }

}
