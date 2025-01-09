export interface Tenant {
  id: string;
  name: string;
  subdomain: string;
  databaseConfig: {
    host: string;
    name: string;
  };
}

export interface User {
  id: number;
  email: string;
  name: string;
  role: 'admin' | 'teacher' | 'student' | 'parent';
  tenantId: string;
}