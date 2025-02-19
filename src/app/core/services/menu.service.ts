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
          { label: 'Add Student', route: '/students/add' },
          { label: 'View Students', route: '/students/view' },
          { label: 'Attendance', route: '/students/attendance' }
        ]
      },
      {
        label: 'Teacher Management',
        icon: 'school',
        children: [
          { label: 'Add Teacher', route: '/teachers/add' },
          { label: 'View Teachers', route: '/teachers/view' },
          { label: 'Assign Classes', route: '/teachers/assign' }
        ]
      },
      {
        label: 'Timetable Management',
        icon: 'schedule',
        children: [
          { label: 'Add Timetable', route: '/timetable/add' },
          { label: 'View Timetable', route: '/timetable/view' }
        ]
      },
      {
        label: 'Financial Management',
        icon: 'account_balance',
        children: [
          { label: 'View Financials', route: '/finance/view' },
          { label: 'Manage Expenses', route: '/finance/expenses' }
        ]
      },
      {
        label: 'Visitors & Vehicles',
        icon: 'directions_car',
        children: [
          { label: 'View Logs', route: '/visitors/logs' },
          { label: 'Add Visitor', route: '/visitors/add' }
        ]
      },
      {
        label: 'Result Management',
        icon: 'assessment',
        children: [
          { label: 'View Results', route: '/results/view' },
          { label: 'Generate Results', route: '/results/generate' }
        ]
      },
      {
        label: 'Reports',
        icon: 'assessment',
        children: [
          { label: 'Attendance Report', route: '/reports/attendance' },
          { label: 'Financial Report', route: '/reports/financial' },
          { label: 'Student Performance Report', route: '/reports/performance' }
        ]
      },
      {
        label: 'Settings',
        icon: 'settings',
        children: [
          { label: 'School Information', route: '/settings/school' },
          { label: 'User Roles and Permissions', route: '/settings/roles' }
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
          { label: 'View Students', route: '/students/view' },
          { label: 'Attendance', route: '/students/attendance' }
        ]
      },
      {
        label: 'Timetable',
        icon: 'schedule',
        route: '/timetable'
      },
      {
        label: 'Result Management',
        icon: 'assessment',
        children: [
          { label: 'View Results', route: '/results/view' }
        ]
      },
      {
        label: 'Track Visitors & Vehicles',
        icon: 'directions_car',
        route: '/visitors'
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
        route: '/timetable'
      },
      {
        label: 'View Results',
        icon: 'assessment',
        route: '/results/view'
      },
      {
        label: 'Track Visitors & Vehicles',
        icon: 'directions_car',
        route: '/visitors'
      }
    ];
  }
}
