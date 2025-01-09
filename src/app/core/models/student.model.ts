export interface Student {
  id: number;
  name: string;
  rollNumber: string;
  class: string;
  section: string;
  attendance: number;
  performance: number;
}

export interface Result {
  id: number;
  studentId: number;
  subject: string;
  marks: number;
  grade: string;
  term: string;
}