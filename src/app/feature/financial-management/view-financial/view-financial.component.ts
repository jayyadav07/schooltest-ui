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
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-view-financial',
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
    MatChipsModule],
  templateUrl: './view-financial.component.html',
  styleUrl: './view-financial.component.scss'
})
export class ViewFinancialComponent {
  displayedColumns: string[] = ['date', 'category', 'description', 'amount', 'status', 'actions'];
  
  incomeReports = [
    {
      date: '2025-03-01',
      category: 'Tuition Fees',
      description: 'March 2025 Tuition Collection',
      amount: '45,000',
      status: 'Completed'
    },
    {
      date: '2025-02-15',
      category: 'Admission Fees',
      description: 'New Student Admissions',
      amount: '12,500',
      status: 'Completed'
    },
    {
      date: '2025-02-10',
      category: 'Library Fees',
      description: 'Annual Library Fee Collection',
      amount: '8,750',
      status: 'Completed'
    },
    {
      date: '2025-02-05',
      category: 'Transportation Fees',
      description: 'February Transportation Fees',
      amount: '6,800',
      status: 'Completed'
    },
    {
      date: '2025-01-25',
      category: 'Examination Fees',
      description: 'Mid-Term Examination Fees',
      amount: '9,200',
      status: 'Completed'
    }
  ];
  
  expenseReports = [
    {
      date: '2025-03-05',
      category: 'Salaries',
      description: 'Staff Salaries for February',
      amount: '38,000',
      status: 'Completed'
    },
    {
      date: '2025-02-28',
      category: 'Utilities',
      description: 'Electricity and Water Bills',
      amount: '4,200',
      status: 'Completed'
    },
    {
      date: '2025-02-20',
      category: 'Maintenance',
      description: 'Building Maintenance',
      amount: '3,500',
      status: 'Completed'
    },
    {
      date: '2025-02-15',
      category: 'Supplies',
      description: 'Office and Classroom Supplies',
      amount: '2,800',
      status: 'Completed'
    },
    {
      date: '2025-02-10',
      category: 'Transportation',
      description: 'School Bus Maintenance',
      amount: '1,800',
      status: 'Pending'
    }
  ];
}
