import { Component } from '@angular/core';
import { INavLink } from '@models/interfaces/nav-link.interface';
import { navItems } from '@layouts/main/main-header/nav-items';

@Component({
  selector: 'main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent {
  navigationItems: INavLink[] = navItems;

  getDecorativeText(title: string): string {
    return (title ?? '').split(' ')[0];
  }
}
