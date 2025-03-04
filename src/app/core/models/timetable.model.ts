export interface TimeSlot {
  startTime: string;
  endTime: string;
  periodNumber?: number;
  type: 'period' | 'break' | 'lunch';
}

export interface Subject {
  id: string;
  name: string;
  color: string;
  teacher?: string;
  room?: string;
}

export interface TimetableEntry {
  timeSlot: TimeSlot;
  monday?: Subject;
  tuesday?: Subject;
  wednesday?: Subject;
  thursday?: Subject;
  friday?: Subject;
}

export interface Class {
  id: string;
  name: string;
}

export interface AcademicYear {
  id: string;
  name: string;
}

export interface Teacher {
  id: string;
  name: string;
}

export interface ExamType {
  id: string;
  name: string;
}

export interface ExamTimeSlot {
  id: string;
  startTime: string;
  endTime: string;
  day: string;
}

export interface ExamTimetableEntry {
  timeSlot: ExamTimeSlot;
  monday?: Subject;
  tuesday?: Subject;
  wednesday?: Subject;
  thursday?: Subject;
  friday?: Subject;
}