export interface Transaction {
  id: number;
  type: 'income' | 'expense';
  amount: number;
  category: string;
  description: string;
  date: Date;
}

export interface Fee {
  id: number;
  studentId: number;
  amount: number;
  dueDate: Date;
  status: 'paid' | 'pending' | 'overdue';
  category: string;
}