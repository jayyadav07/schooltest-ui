import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TimeSlot, Subject, TimetableEntry, Class, AcademicYear, Teacher, ExamType, ExamTimeSlot, ExamTimetableEntry } from '../models/timetable.model';

@Injectable({
  providedIn: 'root'
})
export class TimetableService {
  private timeSlots: TimeSlot[] = [
    { startTime: '8:00', endTime: '8:45', periodNumber: 1, type: 'period' },
    { startTime: '8:50', endTime: '9:35', periodNumber: 2, type: 'period' },
    { startTime: '9:40', endTime: '10:25', periodNumber: 3, type: 'period' },
    { startTime: '10:25', endTime: '10:45', type: 'break' },
    { startTime: '10:45', endTime: '11:30', periodNumber: 4, type: 'period' },
    { startTime: '11:35', endTime: '12:20', periodNumber: 5, type: 'period' },
    { startTime: '12:20', endTime: '1:00', type: 'lunch' },
    { startTime: '1:00', endTime: '1:45', periodNumber: 6, type: 'period' },
    { startTime: '1:50', endTime: '2:35', periodNumber: 7, type: 'period' },
    { startTime: '2:40', endTime: '3:25', periodNumber: 8, type: 'period' }
  ];

  private examTimeSlots: ExamTimeSlot[] = [
    { id: '1', startTime: '9:00', endTime: '10:30', day: 'Monday' },
    { id: '2', startTime: '9:00', endTime: '10:30', day: 'Tuesday' },
    { id: '3', startTime: '9:00', endTime: '10:30', day: 'Wednesday' },
    { id: '4', startTime: '9:00', endTime: '10:30', day: 'Thursday' },
    { id: '5', startTime: '9:00', endTime: '10:30', day: 'Friday' },
    { id: '6', startTime: '11:00', endTime: '12:30', day: 'Monday' },
    { id: '7', startTime: '11:00', endTime: '12:30', day: 'Tuesday' },
    { id: '8', startTime: '11:00', endTime: '12:30', day: 'Wednesday' },
    { id: '9', startTime: '11:00', endTime: '12:30', day: 'Thursday' },
    { id: '10', startTime: '11:00', endTime: '12:30', day: 'Friday' },
    { id: '11', startTime: '2:00', endTime: '3:30', day: 'Monday' },
    { id: '12', startTime: '2:00', endTime: '3:30', day: 'Tuesday' },
    { id: '13', startTime: '2:00', endTime: '3:30', day: 'Wednesday' },
    { id: '14', startTime: '2:00', endTime: '3:30', day: 'Thursday' },
    { id: '15', startTime: '2:00', endTime: '3:30', day: 'Friday' }
  ];

  private examTypes: ExamType[] = [
    { id: '1', name: 'Mid-Term Examination' },
    { id: '2', name: 'Half-Yearly Examination' },
    { id: '3', name: 'Final Examination' },
    { id: '4', name: 'Unit Test' }
  ];

  private subjects: Subject[] = [
    { id: '1', name: 'Science', color: 'science' },
    { id: '2', name: 'Mathematics', color: 'mathematics' },
    { id: '3', name: 'Languages', color: 'languages' },
    { id: '4', name: 'Social Studies', color: 'social-studies' },
    { id: '5', name: 'Arts', color: 'arts' },
    { id: '6', name: 'Physical Education', color: 'physical-education' }
  ];

  private classes: Class[] = [
    { id: '1', name: 'Class 6-A' },
    { id: '2', name: 'Class 6-B' },
    { id: '3', name: 'Class 7-A' },
    { id: '4', name: 'Class 7-B' },
    { id: '5', name: 'Class 8-A' }
  ];

  private academicYears: AcademicYear[] = [
    { id: '1', name: '2024-2025' },
    { id: '2', name: '2025-2026' }
  ];

  private teachers: Teacher[] = [
    { id: '1', name: 'Sarah Williams' },
    { id: '2', name: 'John Smith' },
    { id: '3', name: 'Emily Johnson' },
    { id: '4', name: 'Michael Brown' }
  ];

  // Mock timetable data for Class 6-A
  private classTimetable: TimetableEntry[] = this.timeSlots.map(timeSlot => {
    const entry: TimetableEntry = { timeSlot };
    
    if (timeSlot.type === 'period') {
      // Randomly assign subjects for each day
      if (Math.random() > 0.3) entry.monday = this.getRandomSubject();
      if (Math.random() > 0.3) entry.tuesday = this.getRandomSubject();
      if (Math.random() > 0.3) entry.wednesday = this.getRandomSubject();
      if (Math.random() > 0.3) entry.thursday = this.getRandomSubject();
      if (Math.random() > 0.3) entry.friday = this.getRandomSubject();
    } else if (timeSlot.type === 'break') {
      entry.monday = { id: 'break', name: 'Break', color: 'break-cell' };
      entry.tuesday = { id: 'break', name: 'Break', color: 'break-cell' };
      entry.wednesday = { id: 'break', name: 'Break', color: 'break-cell' };
      entry.thursday = { id: 'break', name: 'Break', color: 'break-cell' };
      entry.friday = { id: 'break', name: 'Break', color: 'break-cell' };
    } else if (timeSlot.type === 'lunch') {
      entry.monday = { id: 'lunch', name: 'Lunch', color: 'lunch-cell' };
      entry.tuesday = { id: 'lunch', name: 'Lunch', color: 'lunch-cell' };
      entry.wednesday = { id: 'lunch', name: 'Lunch', color: 'lunch-cell' };
      entry.thursday = { id: 'lunch', name: 'Lunch', color: 'lunch-cell' };
      entry.friday = { id: 'lunch', name: 'Lunch', color: 'lunch-cell' };
    }
    
    return entry;
  });

  // Mock exam timetable data
  private examTimetable: ExamTimetableEntry[] = [
    {
      timeSlot: { id: '1', startTime: '9:00', endTime: '10:30', day: 'Monday' },
      monday: { id: '1', name: 'Science', color: 'science' }
    },
    {
      timeSlot: { id: '2', startTime: '9:00', endTime: '10:30', day: 'Tuesday' },
      tuesday: { id: '2', name: 'Mathematics', color: 'mathematics' }
    },
    {
      timeSlot: { id: '3', startTime: '9:00', endTime: '10:30', day: 'Wednesday' },
      wednesday: { id: '3', name: 'Languages', color: 'languages' }
    },
    {
      timeSlot: { id: '4', startTime: '9:00', endTime: '10:30', day: 'Thursday' },
      thursday: { id: '4', name: 'Social Studies', color: 'social-studies' }
    },
    {
      timeSlot: { id: '5', startTime: '9:00', endTime: '10:30', day: 'Friday' },
      friday: { id: '5', name: 'Arts', color: 'arts' }
    },
    {
      timeSlot: { id: '6', startTime: '11:00', endTime: '12:30', day: 'Monday' },
      monday: { id: '2', name: 'Mathematics', color: 'mathematics' }
    },
    {
      timeSlot: { id: '7', startTime: '11:00', endTime: '12:30', day: 'Tuesday' },
      tuesday: { id: '1', name: 'Science', color: 'science' }
    },
    {
      timeSlot: { id: '8', startTime: '11:00', endTime: '12:30', day: 'Wednesday' },
      wednesday: { id: '4', name: 'Social Studies', color: 'social-studies' }
    },
    {
      timeSlot: { id: '9', startTime: '11:00', endTime: '12:30', day: 'Thursday' },
      thursday: { id: '3', name: 'Languages', color: 'languages' }
    },
    {
      timeSlot: { id: '10', startTime: '11:00', endTime: '12:30', day: 'Friday' },
      friday: { id: '6', name: 'Physical Education', color: 'physical-education' }
    }
  ];

  // Mock timetable data for Teacher Sarah Williams
  private teacherTimetable: TimetableEntry[] = this.timeSlots.map(timeSlot => {
    const entry: TimetableEntry = { timeSlot };
    
    if (timeSlot.type === 'period') {
      // Randomly assign classes for each day
      if (Math.random() > 0.5) {
        const randomClass = this.classes[Math.floor(Math.random() * this.classes.length)];
        entry.monday = { 
          id: '2', 
          name: 'Mathematics', 
          color: 'mathematics',
          room: `Room ${Math.floor(Math.random() * 10) + 101}`
        };
      }
      if (Math.random() > 0.5) {
        const randomClass = this.classes[Math.floor(Math.random() * this.classes.length)];
        entry.tuesday = { 
          id: '2', 
          name: 'Mathematics', 
          color: 'mathematics',
          room: `Room ${Math.floor(Math.random() * 10) + 101}`
        };
      }
      if (Math.random() > 0.5) {
        const randomClass = this.classes[Math.floor(Math.random() * this.classes.length)];
        entry.wednesday = { 
          id: '2', 
          name: 'Mathematics', 
          color: 'mathematics',
          room: `Room ${Math.floor(Math.random() * 10) + 101}`
        };
      }
      if (Math.random() > 0.5) {
        const randomClass = this.classes[Math.floor(Math.random() * this.classes.length)];
        entry.thursday = { 
          id: '2', 
          name: 'Mathematics', 
          color: 'mathematics',
          room: `Room ${Math.floor(Math.random() * 10) + 101}`
        };
      }
      if (Math.random() > 0.5) {
        const randomClass = this.classes[Math.floor(Math.random() * this.classes.length)];
        entry.friday = { 
          id: '2', 
          name: 'Mathematics', 
          color: 'mathematics',
          room: `Room ${Math.floor(Math.random() * 10) + 101}`
        };
      }
    } else if (timeSlot.type === 'break' || timeSlot.type === 'lunch') {
      // Breaks and lunch are the same for everyone
      entry.monday = { id: timeSlot.type, name: timeSlot.type === 'break' ? 'Break' : 'Lunch', color: `${timeSlot.type}-cell` };
      entry.tuesday = { id: timeSlot.type, name: timeSlot.type === 'break' ? 'Break' : 'Lunch', color: `${timeSlot.type}-cell` };
      entry.wednesday = { id: timeSlot.type, name: timeSlot.type === 'break' ? 'Break' : 'Lunch', color: `${timeSlot.type}-cell` };
      entry.thursday = { id: timeSlot.type, name: timeSlot.type === 'break' ? 'Break' : 'Lunch', color: `${timeSlot.type}-cell` };
      entry.friday = { id: timeSlot.type, name: timeSlot.type === 'break' ? 'Break' : 'Lunch', color: `${timeSlot.type}-cell` };
    }
    
    return entry;
  });

  constructor() { }

  getTimeSlots(): Observable<TimeSlot[]> {
    return of(this.timeSlots);
  }

  getExamTimeSlots(): Observable<ExamTimeSlot[]> {
    return of(this.examTimeSlots);
  }

  getExamTypes(): Observable<ExamType[]> {
    return of(this.examTypes);
  }

  getSubjects(): Observable<Subject[]> {
    return of(this.subjects);
  }

  getClasses(): Observable<Class[]> {
    return of(this.classes);
  }

  getAcademicYears(): Observable<AcademicYear[]> {
    return of(this.academicYears);
  }

  getTeachers(): Observable<Teacher[]> {
    return of(this.teachers);
  }

  getClassTimetable(classId: string, academicYearId: string): Observable<TimetableEntry[]> {
    // In a real application, this would filter based on the classId and academicYearId
    return of(this.classTimetable);
  }

  getExamTimetable(classId: string, academicYearId: string, examTypeId: string): Observable<ExamTimetableEntry[]> {
    // In a real application, this would filter based on the classId, academicYearId, and examTypeId
    return of(this.examTimetable);
  }

  getTeacherTimetable(teacherId: string, academicYearId: string): Observable<TimetableEntry[]> {
    // In a real application, this would filter based on the teacherId and academicYearId
    return of(this.teacherTimetable);
  }

  private getRandomSubject(): Subject {
    return this.subjects[Math.floor(Math.random() * this.subjects.length)];
  }
}