import { Component } from '@angular/core';
import {  EventEmitter, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbar, MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { Router } from '@angular/router';
import { trigger, transition, style, animate, state } from '@angular/animations';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule,MatToolbar,
     CommonModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatDividerModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  animations: [
    trigger('fadeSlide', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-10px)' }),
        animate('200ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ]),
      transition(':leave', [
        animate('200ms ease-out', style({ opacity: 0, transform: 'translateY(-10px)' }))
      ])
    ]),
    trigger('rotateIcon', [
      state('default', style({ transform: 'rotate(0)' })),
      state('rotated', style({ transform: 'rotate(180deg)' })),
      transition('default <=> rotated', animate('200ms ease-out'))
    ]),
    trigger('pulse', [
      state('pulse', style({ transform: 'scale(1.1)' })),
      state('default', style({ transform: 'scale(1)' })),
      transition('default <=> pulse', animate('300ms ease-in-out'))
    ]),
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms ease-out', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class HeaderComponent {
  @Output() toggleSidenav = new EventEmitter<void>(); // Event emitter to toggle sidenav
  
  isLoggedIn = true;
  menuState = 'default';
  dropdownState = 'default';
  pulseState = 'default';

  constructor(private router: Router) {}

  toggleMenu() {
    this.menuState = this.menuState === 'default' ? 'rotated' : 'default';
  }

  login() {
    this.isLoggedIn = true;
  }

  logout() {
    this.isLoggedIn = false;
  }

  viewProfile() {
    this.pulseState = 'pulse';
    this.router.navigate(['/profile']);
  }

  viewSettings() {
    this.router.navigate(['/settings']);
  }

  onPulseComplete() {
    this.pulseState = 'default';
  }
}
