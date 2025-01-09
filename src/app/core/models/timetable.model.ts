export interface TimeSlot {
  id: number;
  day: string;
  startTime: string;
  endTime: string;
  subject: string;
  teacherId: number;
  classId: number;
  section: string;
}

export interface Teacher {
  id: number;
  name: string;
  subjects: string[];
  email: string;
}

export interface Class {
  id: number;
  name: string;
  section: string;
}