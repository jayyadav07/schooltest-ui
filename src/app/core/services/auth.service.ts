import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/tenant.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUser = new BehaviorSubject<User | null>(null);
  currentUser$ = this.currentUser.asObservable();

  login(email: string, password: string) {
    // Mock login - in real app, this would make an API call
    const mockUser: User = {
      id: 1,
      email,
      name: 'Admin User',
      role: 'admin',
      tenantId: '1'
    };
    this.currentUser.next(mockUser);
    localStorage.setItem('token', 'mock-jwt-token');
    return Promise.resolve(mockUser);
  }

  logout() {
    this.currentUser.next(null);
    localStorage.removeItem('token');
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }
}