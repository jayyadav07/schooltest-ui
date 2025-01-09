import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Tenant } from '../models/tenant.model';

@Injectable({
  providedIn: 'root'
})
export class TenantService {
  private currentTenant = new BehaviorSubject<Tenant | null>(null);
  currentTenant$ = this.currentTenant.asObservable();

  constructor() {
    this.initializeTenant();
  }

  private initializeTenant() {
    const hostname = window.location.hostname;
    const subdomain = this.getSubdomain(hostname);
    
    // Mock tenant data - in real app, this would come from an API
    if (subdomain) {
      const tenant: Tenant = {
        id: '1',
        name: 'Shive Public School',
        subdomain: subdomain,
        databaseConfig: {
          host: 'db.shivepublicschool.com',
          name: 'shive_db'
        }
      };
      this.currentTenant.next(tenant);
    }
  }

  private getSubdomain(hostname: string): string | null {
    const parts = hostname.split('.');
    return parts.length > 2 ? parts[0] : null;
  }
}