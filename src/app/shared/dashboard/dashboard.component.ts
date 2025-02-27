import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MockDataService } from '../../core/services/mock-data.service';
import { MatIcon } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTableModule } from '@angular/material/table';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, MatCardModule,MatIcon,MatProgressBarModule,MatTableModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  totalStudents: number;
  averageAttendance: number;
  averagePerformance: number;

  constructor(private mockData: MockDataService) {
    const students = this.mockData.getStudents();
    this.totalStudents = students.length;
    this.averageAttendance = Math.round(
      students.reduce((acc, student) => acc + student.attendance, 0) / students.length
    );
    this.averagePerformance = Math.round(
      students.reduce((acc, student) => acc + student.performance, 0) / students.length
    );
  }

  activities = [
    {
      type: 'Academic',
      icon: 'school',
      description: 'New course materials uploaded for Class X Mathematics',
      time: '2 hours ago'
    },
    {
      type: 'Sports',
      icon: 'sports_soccer',
      description: 'Basketball team practice scheduled',
      time: '3 hours ago'
    },
    {
      type: 'Event',
      icon: 'event',
      description: 'Parent-Teacher meeting announcement sent',
      time: '5 hours ago'
    }
  ];

  displayedColumns: string[] = ['type', 'description', 'time'];
}
