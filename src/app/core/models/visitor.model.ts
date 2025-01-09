export interface Visitor {
  id: number;
  name: string;
  purpose: string;
  contactNumber: string;
  entryTime: Date;
  exitTime?: Date;
  status: 'in' | 'out';
}

export interface Vehicle {
  id: number;
  number: string;
  type: 'car' | 'bike' | 'bus' | 'other';
  ownerType: 'staff' | 'parent' | 'visitor';
  ownerId?: number;
  entryTime: Date;
  exitTime?: Date;
}