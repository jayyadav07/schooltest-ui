import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MenuItem } from '../../../core/models/menu-item.model';
import { MenuService } from '../../../core/services/menu.service';


@Component({
  selector: 'app-sidebar-menu',
  standalone: true,
  imports: [
      CommonModule,
      RouterModule,
      MatSidenavModule,
      MatListModule,
      MatIconModule,
      MatExpansionModule],
  templateUrl: './sidebar-menu.component.html',
  animations: [
    trigger('slideInOut', [
      state('void', style({
        transform: 'translateX(-100%)'
      })),
      state('*', style({
        transform: 'translateX(0)'
      })),
      transition('void <=> *', animate('200ms ease-in-out'))
    ])
  ],
  styleUrl: './sidebar-menu.component.scss'
})
export class SidebarMenuComponent {

  menuItems: MenuItem[];

  constructor(menuService: MenuService) {
    this.menuItems = menuService.getMenuItems();
  }
}
