import { Injectable } from '@angular/core';
import { Student, Result } from '../models/student.model';
import { delay, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MockDataService {
  private students: Student[] = [
    { 
      id: 1, 
      name: 'John Doe', 
      rollNumber: 'A001', 
      class: '10', 
      section: 'A', 
      attendance: 92, 
      performance: 85 
    },
    { 
      id: 2, 
      name: 'Jane Smith', 
      rollNumber: 'A002', 
      class: '10', 
      section: 'A', 
      attendance: 88, 
      performance: 90 
    },
    { 
      id: 3, 
      name: 'Mike Johnson', 
      rollNumber: 'A003', 
      class: '10', 
      section: 'B', 
      attendance: 95, 
      performance: 78 
    },
    { 
      id: 4, 
      name: 'Sarah Williams', 
      rollNumber: 'A004', 
      class: '10', 
      section: 'B', 
      attendance: 91, 
      performance: 88 
    },
    { 
      id: 5, 
      name: 'David Brown', 
      rollNumber: 'A005', 
      class: '10', 
      section: 'A', 
      attendance: 87, 
      performance: 92 
    }
  ];

  private results: Result[] = [
    { id: 1, studentId: 1, subject: 'Mathematics', marks: 85, grade: 'A', term: 'Mid-Term' },
    { id: 2, studentId: 1, subject: 'Science', marks: 78, grade: 'B', term: 'Mid-Term' },
    { id: 3, studentId: 1, subject: 'English', marks: 88, grade: 'A', term: 'Mid-Term' },
    { id: 4, studentId: 2, subject: 'Mathematics', marks: 92, grade: 'A+', term: 'Mid-Term' },
    { id: 5, studentId: 2, subject: 'Science', marks: 85, grade: 'A', term: 'Mid-Term' },
    { id: 6, studentId: 2, subject: 'English', marks: 90, grade: 'A', term: 'Mid-Term' },
    { id: 7, studentId: 3, subject: 'Mathematics', marks: 75, grade: 'B', term: 'Mid-Term' },
    { id: 8, studentId: 3, subject: 'Science', marks: 82, grade: 'A', term: 'Mid-Term' },
    { id: 9, studentId: 3, subject: 'English', marks: 80, grade: 'A', term: 'Mid-Term' }
  ];

  getStudents() {
    return this.students;
  }

  getResults() {
    return this.results;
  }

  getStudentById(id: number) {
    return this.students.find(student => student.id === id);
  }

  getResultsByStudentId(studentId: number) {
    return this.results.filter(result => result.studentId === studentId);
  }

   // Simulate submitting the student data
   submitStudentData(studentData: any): Observable<any> {
    console.log('Student data submitted:', studentData);
    // Simulate a delay of 2 seconds
    return of({ message: 'Success' }).pipe(
      delay(2000) // Simulated delay
    );
  }
}