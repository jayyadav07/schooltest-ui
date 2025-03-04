
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';


export interface ClassData {
  class_id: number;
  name: string;
  section: string;
  total_students: number;
  class_teacher: string;
  subject_count: number;
  start_date: string;
  status: 'active' | 'inactive';
}

@Component({
  selector: 'app-view-class-list',
  standalone: true,
  imports: [
    FormsModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDatepickerModule,
    MatInputModule,
    CommonModule,
    MatNativeDateModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule
  ],
  templateUrl: './view-class-list.component.html',
  styleUrl: './view-class-list.component.scss'
})
export class ViewClassListComponent {
  displayedColumns: string[] = ['class_id', 'name', 'section', 'total_students', 'class_teacher', 'subject_count', 'start_date', 'status', 'actions'];
  
  classData: ClassData[] = [
    { class_id: 1, name: '1st Grade', section: 'A', total_students: 30, class_teacher: 'Mr. Smith', subject_count: 5, start_date: '2023-06-15', status: 'active' },
    { class_id: 2, name: '10th Standard', section: 'B', total_students: 25, class_teacher: 'Ms. Johnson', subject_count: 8, start_date: '2023-06-10', status: 'inactive' }
  ];
  
  dataSource = new MatTableDataSource<ClassData>(this.classData);
  filteredDataSource = this.dataSource;

  classNames = ['1st Grade', '10th Standard'];
  sections = ['A', 'B', 'C'];
  statuses = ['active', 'inactive'];
  selectedClass: string | null = null;
  selectedSection: string | null = null;
  searchTeacher: string = '';
  selectedStatus: string | null = null;
  startDate: Date | null = null;
  endDate: Date | null = null;

  toggleStatus(classData: ClassData): void {
    classData.status = classData.status === 'active' ? 'inactive' : 'active';
  }

  editClass(classData: ClassData): void {
    console.log('Edit class:', classData);
  }

  deleteClass(classData: ClassData): void {
    console.log('Delete class:', classData);
  }

  applyFilters(): void {
    // Implement filtering logic
  }
}
