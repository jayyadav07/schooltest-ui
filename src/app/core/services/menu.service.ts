import { Injectable } from '@angular/core';
import { MenuItem } from '../models/menu-item.model';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  getMenuItems(): MenuItem[] {
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
        label: 'Result Management',
        icon: 'assessment',
        children: [
          { label: 'View Results', route: '/results/view' }
        ]
      },
      {
        label: 'Timetable',
        icon: 'schedule',
        route: '/timetable'
      },
      {
        label: 'Finance',
        icon: 'account_balance',
        route: '/finance'
      },
      {
        label: 'Visitor Log',
        icon: 'people',
        route: '/visitors'
      }
    ];
  }
}