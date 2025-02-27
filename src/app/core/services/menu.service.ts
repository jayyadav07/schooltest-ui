import { Injectable } from '@angular/core';
import { MenuItem } from '../models/menu-item.model';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  // Admin Menu Items
  getAdminMenuItems(): MenuItem[] {
    return [
      {
        label: 'Dashboard',
        icon: 'home',
        route: '/dashboard'
      },
      {
        label: 'Student Management',
        icon: 'school',
        children: [
          { label: 'Add Student', route: '/student/register' },
          { label: 'View Students', route: '/student/list' },
          { label: 'Attendance', route: '/attendance/student' }
        ]
      },
      {
        label: 'Teacher Management',
        icon: 'school',
        children: [
          { label: 'Add Teacher', route: '/teacher/register' },
          { label: 'View Teachers', route: '/teacher/list' },
          { label: 'Assign Classes', route: '/teacher/assign-class' }
        ]
      },
      {
        label: 'Timetable Management',
        icon: 'schedule',
        children: [
          { label: 'Add Timetable', route: '/timetable/register' },
          { label: 'View Timetable', route: '/timetable/list' },
          { label: 'Update Timetable', route: '/timetable/detail/:id' }
        ]
      },
      {
        label: 'Financial Management',
        icon: 'account_balance',
        children: [
          { label: 'View Financials', route: '/financial/view' },
          { label: 'Manage Expenses', route: '/financial/add' },
          { label: 'Salary Table', route: '/financial/salary-table' },
          { label: 'Update Salary Structure', route: '/financial/update-salary-structure' },
          { label: 'View Salary', route: '/financial/salary' },
          { label: 'View Salary Structure', route: '/financial/view-salary-structure' }
        ]
      },
      {
        label: 'Visitors & Vehicles',
        icon: 'directions_car',
        children: [
          { label: 'View Logs', route: '/vehicle/list' },
          { label: 'Add Vehicle', route: '/vehicle/register' },
          { label: 'Update Vehicle', route: '/vehicle/detail/:id' },
          { label: 'Add Visitor', route: '/visitor/register' },
          { label: 'View Visitors', route: '/visitor/list' }
        ]
      },
      {
        label: 'Result Management',
        icon: 'assessment',
        children: [
          { label: 'View Results', route: '/result/list' },
          { label: 'Update Results', route: '/result/update' },
          { label: 'Result Details', route: '/result/details' }
        ]
      },
      {
        label: 'Reports',
        icon: 'assessment',
        children: [
          { label: 'Attendance Report', route: '/report/attendance' },
          { label: 'Financial Report', route: '/report/financial' },
          { label: 'Student Performance Report', route: '/report/student-performance' }
        ]
      },
      {
        label: 'Settings',
        icon: 'settings',
        children: [
          { label: 'School Information', route: '/setting/school-info' },
          { label: 'School Info List', route: '/setting/school-info/list' },
          { label: 'User Roles and Permissions', route: '/setting/userrole' }
        ]
      }
    ];
  }

  // Teacher Menu Items
  getTeacherMenuItems(): MenuItem[] {
    return [
      {
        label: 'Dashboard',
        icon: 'dashboard',
        route: '/dashboard'
      },
      {
        label: 'Student Management',
        icon: 'school',
        children: [
          { label: 'View Students', route: '/student/list' },
          { label: 'Attendance', route: '/attendance/student' }
        ]
      },
      {
        label: 'Timetable',
        icon: 'schedule',
        children: [
          { label: 'View Timetable', route: '/timetable/list' }
        ]
      },
      {
        label: 'Result Management',
        icon: 'assessment',
        children: [
          { label: 'View Results', route: '/result/list' }
        ]
      },
      {
        label: 'Visitors & Vehicles',
        icon: 'directions_car',
        children: [
          { label: 'View Logs', route: '/vehicle/list' },
          { label: 'Add Visitor', route: '/visitor/register' }
        ]
      }
    ];
  }

  // Student Menu Items
  getStudentMenuItems(): MenuItem[] {
    return [
      {
        label: 'Dashboard',
        icon: 'dashboard',
        route: '/dashboard'
      },
      {
        label: 'Timetable',
        icon: 'schedule',
        route: '/timetable/list'
      },
      {
        label: 'View Results',
        icon: 'assessment',
        route: '/result/list'
      },
      {
        label: 'Track Visitors & Vehicles',
        icon: 'directions_car',
        route: '/vehicle/list'
      }
    ];
  }
}
