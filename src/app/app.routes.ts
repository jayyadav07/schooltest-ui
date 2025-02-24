import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './feature/dashboard/dashboard.component';
import { HomeComponent } from './feature/home/home.component';
import { StudentRegisterComponent } from './feature/student/student-register/student-register.component';


export const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'home', component: HomeComponent },
  { path: 'student', component: StudentRegisterComponent },
  //{ path: 'student-management', loadChildren: () => import('./features/student-management/student-management.module').then(m => m.StudentManagementModule) },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouting { }