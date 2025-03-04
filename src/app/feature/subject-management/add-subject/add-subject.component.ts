import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatChipsModule } from '@angular/material/chips';
import { MatTooltipModule } from '@angular/material/tooltip';
@Component({
  selector: 'app-add-subject',
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
    MatDialogModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatChipsModule,
    MatTooltipModule
  ],
  templateUrl: './add-subject.component.html',
  styleUrl: './add-subject.component.scss'
})
export class AddSubjectComponent {

  displayedColumns: string[] = ['code', 'name', 'department', 'gradeLevel', 'credits', 'teacher', 'status', 'actions'];
  
  subjects = [
    {
      code: 'MATH101',
      name: 'Basic Mathematics',
      department: 'Mathematics',
      gradeLevel: 'Grade 6-8',
      credits: 4,
      teacher: 'John Smith',
      status: 'Active',
      tags: ['Core']
    },
    {
      code: 'SCI201',
      name: 'General Science',
      department: 'Science',
      gradeLevel: 'Grade 6-8',
      credits: 4,
      teacher: 'Emily Johnson',
      status: 'Active',
      tags: ['Core']
    },
    {
      code: 'ENG101',
      name: 'English Literature',
      department: 'Languages',
      gradeLevel: 'Grade 6-8',
      credits: 3,
      teacher: 'Sarah Williams',
      status: 'Active',
      tags: ['Core']
    },
    {
      code: 'HIS102',
      name: 'World History',
      department: 'Social Studies',
      gradeLevel: 'Grade 9-10',
      credits: 3,
      teacher: 'Michael Brown',
      status: 'Active',
      tags: ['Core']
    },
    {
      code: 'PHY301',
      name: 'Advanced Physics',
      department: 'Science',
      gradeLevel: 'Grade 11-12',
      credits: 5,
      teacher: 'Robert Davis',
      status: 'Active',
      tags: ['Advanced', 'Elective']
    },
    {
      code: 'ART201',
      name: 'Visual Arts',
      department: 'Arts',
      gradeLevel: 'Grade 9-10',
      credits: 2,
      teacher: 'Jessica Miller',
      status: 'Active',
      tags: ['Elective']
    },
    {
      code: 'CS401',
      name: 'Computer Science',
      department: 'Technology',
      gradeLevel: 'Grade 11-12',
      credits: 4,
      teacher: 'David Wilson',
      status: 'Active',
      tags: ['Elective']
    },
    {
      code: 'MUS101',
      name: 'Music Appreciation',
      department: 'Arts',
      gradeLevel: 'Grade 6-8',
      credits: 2,
      teacher: 'Amanda Taylor',
      status: 'Inactive',
      tags: ['Elective']
    }
  ];

  constructor(private dialog: MatDialog) {}

  openAddSubjectDialog() {
    // This would open a dialog to add a new subject
    console.log('Opening add subject dialog');
  }
}
