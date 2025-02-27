
import { HomeComponent } from './feature/home/home.component';
import { DashboardComponent } from './shared/dashboard/dashboard.component';
import { StudentListComponent } from './feature/student-management/student-list/student-list.component';
import { StudentRegisterEditComponent } from './feature/student-management/student-register-edit/student-register-edit.component';
import { ViewTeacherComponent } from './feature/teacher-management/view-teacher/view-teacher.component';
import { AddTeacherEditComponent } from './feature/teacher-management/add-teacher-edit/add-teacher-edit.component';
import { AssigneClassComponent } from './feature/teacher-management/assigne-class/assigne-class.component';
import { AddTimetableComponent } from './feature/timetable-management/add-timetable/add-timetable.component';
import { UpdateTimetableComponent } from './feature/timetable-management/update-timetable/update-timetable.component';
import { TimetableComponent } from './feature/timetable-management/timetable/timetable.component';
import { VehicleListComponent } from './feature/visitors-vehicles/vehicle-list/vehicle-list.component';
import { VehicleRegisterComponent } from './feature/visitors-vehicles/vehicle-register/vehicle-register.component';
import { VehicleUpdateComponent } from './feature/visitors-vehicles/vehicle-update/vehicle-update.component';
import { VisitorComponent } from './feature/visitors-vehicles/visitor/visitor.component';
import { VisitorListComponent } from './feature/visitors-vehicles/visitor-list/visitor-list.component';
import { SchoolInformationComponent } from './feature/setting/school-information/school-information.component';
import { SchoolInformationListComponent } from './feature/setting/school-information-list/school-information-list.component';
import { UserRolePermissionComponent } from './feature/setting/user-role-permission/user-role-permission.component';
import { SendNotificationComponent } from './feature/notification/send-notification/send-notification.component';
import { ViewNotificationComponent } from './feature/notification/view-notification/view-notification.component';
import { StaffAttendanceComponent } from './feature/attendance/staff-attendance/staff-attendance.component';
import { StudentAttendanceComponent } from './feature/attendance/student-attendance/student-attendance.component';
import { AttendanceListComponent } from './feature/attendance/attendance-list/attendance-list.component';
import { FinanceComponent } from './feature/financial-management/finance/finance.component';
import { SalaryTableComponent } from './feature/financial-management/salary-table/salary-table.component';
import { UpdateSalaryStructureComponent } from './feature/financial-management/update-salary-structure/update-salary-structure.component';
import { ViewFinancialComponent } from './feature/financial-management/view-financial/view-financial.component';
import { ViewSalaryComponent } from './feature/financial-management/view-salary/view-salary.component';
import { ViewSalaryStructureComponent } from './feature/financial-management/view-salary-structure/view-salary-structure.component';
import { AttendanceReportComponent } from './feature/reports/attendance-report/attendance-report.component';
import { FinancialReportComponent } from './feature/reports/financial-report/financial-report.component';
import { StudentPerformanceComponent } from './feature/reports/student-performance/student-performance.component';
import { ResultListComponent } from './feature/result-management/result-list/result-list.component';
import { UpdateResultComponent } from './feature/result-management/update-result/update-result.component';
import { ViewResultComponent } from './feature/result-management/view-result/view-result.component';
import { StudentRegisterComponent } from './feature/student-management/student/student-register/student-register.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';


export const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'home', component: HomeComponent },
  { path: 'student', component: StudentRegisterComponent },
  //{ path: 'student-management', loadChildren: () => import('./features/student-management/student-management.module').then(m => m.StudentManagementModule) },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  
  //student
  { path: 'student/list', component: StudentRegisterComponent },
  { path: 'student/register', component: StudentRegisterEditComponent },
  { path: 'student/detail/:id', component: StudentRegisterComponent },

  //teacher
  { path: 'teacher/list', component: ViewTeacherComponent },
  { path: 'teacher/register', component: AddTeacherEditComponent },
  { path: 'teacher/detail/:id', component: AddTeacherEditComponent },
  { path: 'teacher/assign-class', component: AssigneClassComponent },

   //timetable
   { path: 'timetable/list', component: TimetableComponent },
   { path: 'timetable/register', component: AddTimetableComponent },
   { path: 'timetable/detail/:id', component: UpdateTimetableComponent },

    //visitor-vehicle
    { path: 'vehicle/list', component: VehicleListComponent },
    { path: 'vehicle/register', component: VehicleRegisterComponent },
    { path: 'vehicle/detail/:id', component: VehicleUpdateComponent },
    { path: 'visitor/register', component: VisitorComponent },
    { path: 'visitor/list', component: VisitorListComponent },

    //setting
    { path: 'setting/school-info', component: SchoolInformationComponent },
    { path: 'setting/school-info/list', component: SchoolInformationListComponent },
    { path: 'setting/userrole', component: UserRolePermissionComponent },

    //notification
    { path: 'notification/send', component: SendNotificationComponent },
    { path: 'notification/list', component: ViewNotificationComponent },

    //attendance
    { path: 'attendance/staff', component: StaffAttendanceComponent },
    { path: 'attendance/student', component: StudentAttendanceComponent },
    { path: 'attendance/list', component: AttendanceListComponent },

    //financial-management
    { path: 'financial/add', component: FinanceComponent },
    { path: 'financial/view', component: ViewFinancialComponent },
    { path: 'financial/salary-table', component: SalaryTableComponent },
    { path: 'financial/update-salary-structure', component: UpdateSalaryStructureComponent },
    { path: 'financial/salary', component: ViewSalaryComponent },
    { path: 'financial/view-salary-structure', component: ViewSalaryStructureComponent },

    //report
    { path: 'report/attendance', component: AttendanceReportComponent },
    { path: 'report/financial', component: FinancialReportComponent },
    { path: 'report/student-performance', component: StudentPerformanceComponent },
    
    //result-management
    { path: 'result/list', component: ResultListComponent },
    { path: 'result/update', component: UpdateResultComponent },
    { path: 'result/details', component: ViewResultComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouting { }