import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatChipsModule } from '@angular/material/chips';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-update-result',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatTabsModule,
    MatProgressBarModule,
    MatChipsModule,
    MatTooltipModule,
    MatExpansionModule,
    MatDividerModule
  ],
  templateUrl: './update-result.component.html',
  styleUrl: './update-result.component.scss'
})
export class UpdateResultComponent {

  displayedColumns: string[] = ['rollNumber', 'name', 'class', 'totalMarks', 'percentage', 'grade', 'rank', 'status', 'actions'];
  selectedExamPeriod = 'final';
  expandedElement: any = null;
  
  studentResult = [
    {
      rollNumber: '001',
      name: 'John Smith',
      class: 'Class 10-A',
      totalMarks: 450,
      maxMarks: 500,
      grade: 'A',
      rank: 1,
      status: 'Pass',
      remarks: 'Excellent performance. John has shown remarkable improvement in all subjects. Keep up the good work!',
      attendance: {
        present: 85,
        absent: 5,
        percentage: 94.4
      },
      subjects: [
        { name: 'Mathematics', marksObtained: 95, maxMarks: 100, grade: 'A' },
        { name: 'Science', marksObtained: 92, maxMarks: 100, grade: 'A' },
        { name: 'English', marksObtained: 88, maxMarks: 100, grade: 'A' },
        { name: 'Social Studies', marksObtained: 85, maxMarks: 100, grade: 'A' },
        { name: 'Computer Science', marksObtained: 90, maxMarks: 100, grade: 'A' }
      ]
    },
    {
      rollNumber: '002',
      name: 'Emily Johnson',
      class: 'Class 10-A',
      totalMarks: 430,
      maxMarks: 500,
      grade: 'A',
      rank: 2,
      status: 'Pass',
      remarks: 'Very good performance. Emily has shown consistent effort throughout the term.',
      attendance: {
        present: 82,
        absent: 8,
        percentage: 91.1
      },
      subjects: [
        { name: 'Mathematics', marksObtained: 88, maxMarks: 100, grade: 'A' },
        { name: 'Science', marksObtained: 90, maxMarks: 100, grade: 'A' },
        { name: 'English', marksObtained: 92, maxMarks: 100, grade: 'A' },
        { name: 'Social Studies', marksObtained: 80, maxMarks: 100, grade: 'B' },
        { name: 'Computer Science', marksObtained: 80, maxMarks: 100, grade: 'B' }
      ]
    },
    {
      rollNumber: '003',
      name: 'Michael Brown',
      class: 'Class 10-A',
      totalMarks: 410,
      maxMarks: 500,
      grade: 'B',
      rank: 3,
      status: 'Pass',
      remarks: 'Good performance. Michael needs to focus more on Mathematics and Science.',
      attendance: {
        present: 80,
        absent: 10,
        percentage: 88.9
      },
      subjects: [
        { name: 'Mathematics', marksObtained: 75, maxMarks: 100, grade: 'B' },
        { name: 'Science', marksObtained: 78, maxMarks: 100, grade: 'B' },
        { name: 'English', marksObtained: 85, maxMarks: 100, grade: 'A' },
        { name: 'Social Studies', marksObtained: 82, maxMarks: 100, grade: 'B' },
        { name: 'Computer Science', marksObtained: 90, maxMarks: 100, grade: 'A' }
      ]
    },
    {
      rollNumber: '004',
      name: 'Sarah Williams',
      class: 'Class 10-A',
      totalMarks: 380,
      maxMarks: 500,
      grade: 'B',
      rank: 4,
      status: 'Pass',
      remarks: 'Satisfactory performance. Sarah has shown improvement but needs to work harder in Science.',
      attendance: {
        present: 75,
        absent: 15,
        percentage: 83.3
      },
      subjects: [
        { name: 'Mathematics', marksObtained: 80, maxMarks: 100, grade: 'B' },
        { name: 'Science', marksObtained: 65, maxMarks: 100, grade: 'C' },
        { name: 'English', marksObtained: 88, maxMarks: 100, grade: 'A' },
        { name: 'Social Studies', marksObtained: 75, maxMarks: 100, grade: 'B' },
        { name: 'Computer Science', marksObtained: 72, maxMarks: 100, grade: 'B' }
      ]
    },
    {
      rollNumber: '005',
      name: 'David Wilson',
      class: 'Class 10-A',
      totalMarks: 320,
      maxMarks: 500,
      grade: 'C',
      rank: 5,
      status: 'Pass',
      remarks: 'Average performance. David needs significant improvement in most subjects.',
      attendance: {
        present: 70,
        absent: 20,
        percentage: 77.8
      },
      subjects: [
        { name: 'Mathematics', marksObtained: 60, maxMarks: 100, grade: 'C' },
        { name: 'Science', marksObtained: 65, maxMarks: 100, grade: 'C' },
        { name: 'English', marksObtained: 70, maxMarks: 100, grade: 'B' },
        { name: 'Social Studies', marksObtained: 65, maxMarks: 100, grade: 'C' },
        { name: 'Computer Science', marksObtained: 60, maxMarks: 100, grade: 'C' }
      ]
    },
    {
      rollNumber: '006',
      name: 'Jessica Miller',
      class: 'Class 10-A',
      totalMarks: 280,
      maxMarks: 500,
      grade: 'D',
      rank: 6,
      status: 'Pass',
      remarks: 'Below average performance. Jessica needs to work much harder in all subjects.',
      attendance: {
        present: 65,
        absent: 25,
        percentage: 72.2
      },
      subjects: [
        { name: 'Mathematics', marksObtained: 55, maxMarks: 100, grade: 'D' },
        { name: 'Science', marksObtained: 60, maxMarks: 100, grade: 'C' },
        { name: 'English', marksObtained: 65, maxMarks: 100, grade: 'C' },
        { name: 'Social Studies', marksObtained: 50, maxMarks: 100, grade: 'D' },
        { name: 'Computer Science', marksObtained: 50, maxMarks: 100, grade: 'D' }
      ]
    },
    {
      rollNumber: '007',
      name: 'Robert Davis',
      class: 'Class 10-A',
      totalMarks: 220,
      maxMarks: 500,
      grade: 'F',
      rank: 7,
      status: 'Fail',
      remarks: 'Poor performance. Robert needs immediate attention and remedial classes.',
      attendance: {
        present: 60,
        absent: 30,
        percentage: 66.7
      },
      subjects: [
        { name: 'Mathematics', marksObtained: 40, maxMarks: 100, grade: 'F' },
        { name: 'Science', marksObtained: 45, maxMarks: 100, grade: 'F' },
        { name: 'English', marksObtained: 50, maxMarks: 100, grade: 'D' },
        { name: 'Social Studies', marksObtained: 45, maxMarks: 100, grade: 'F' },
        { name: 'Computer Science', marksObtained: 40, maxMarks: 100, grade: 'F' }
      ]
    }
  ];

  dataSource = new MatTableDataSource(this.studentResult);
  studentResults = this.studentResult;

  classPerformance = [
    { name: 'Class 10-A', averagePercentage: 85.2 },
    { name: 'Class 10-B', averagePercentage: 82.7 },
    { name: 'Class 9-A', averagePercentage: 78.5 },
    { name: 'Class 9-B', averagePercentage: 76.3 },
    { name: 'Class 8-A', averagePercentage: 80.1 },
    { name: 'Class 8-B', averagePercentage: 79.4 }
  ];

  subjectPerformance = [
    { name: 'Mathematics', averagePercentage: 76.8 },
    { name: 'Science', averagePercentage: 79.2 },
    { name: 'English', averagePercentage: 82.5 },
    { name: 'Social Studies', averagePercentage: 77.4 },
    { name: 'Computer Science', averagePercentage: 83.1 }
  ];

  gradeDistribution = [
    { grade: 'A', count: 245, percentage: 35 },
    { grade: 'B', count: 315, percentage: 45 },
    { grade: 'C', count: 98, percentage: 14 },
    { grade: 'D', count: 28, percentage: 4 },
    { grade: 'F', count: 14, percentage: 2 }
  ];

  topPerformers = [
    {
      rank: 1,
      name: 'John Smith',
      class: 'Class 10-A',
      totalMarks: 450,
      maxMarks: 500,
      grade: 'A',
      avatar: 'https://i.pravatar.cc/150?img=1'
    },
    {
      rank: 2,
      name: 'Emily Johnson',
      class: 'Class 10-A',
      totalMarks: 430,
      maxMarks: 500,
      grade: 'A',
      avatar: 'https://i.pravatar.cc/150?img=5'
    },
    {
      rank: 3,
      name: 'Michael Brown',
      class: 'Class 10-A',
      totalMarks: 410,
      maxMarks: 500,
      grade: 'B',
      avatar: 'https://i.pravatar.cc/150?img=3'
    }
  ];

  getExamPeriodTitle(): string {
    switch (this.selectedExamPeriod) {
      case 'monthly': return 'Monthly Test';
      case 'midterm': return 'Mid-Term Examination';
      case 'final': return 'Final Examination';
      default: return 'Examination';
    }
  }

  getPerformanceClass(marks: number, maxMarks: number): string {
    const percentage = (marks / maxMarks) * 100;
    if (percentage < 60) return 'performance-low';
    if (percentage < 80) return 'performance-medium';
    return 'performance-high';
  }

  getGradeClass(grade: string): string {
    switch (grade) {
      case 'A': return 'grade-a';
      case 'B': return 'grade-b';
      case 'C': return 'grade-c';
      case 'D': return 'grade-d';
      case 'F': return 'grade-f';
      default: return '';
    }
  }
}
