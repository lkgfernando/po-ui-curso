import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PoMenuPanelItem, PoMenuPanelModule, PoPageModule } from '@po-ui/ng-components';

@Component({
  selector: 'app-masterpage',
  imports: [PoMenuPanelModule, PoPageModule, RouterModule],
  templateUrl: './masterpage.html',
  styleUrl: './masterpage.css',
})
export class Masterpage {
  title: string = 'Home';
  readonly menus: Array<PoMenuPanelItem> = [
    {
      label: 'Home',
      link: 'home',
      action: this.clickItemMenu.bind(this),
      icon: 'an-fill an-house-line',
    },
    {
      label: 'Customers',
      link: 'customers',
      action: this.clickItemMenu.bind(this),
      icon: 'an an-user',
    },
    {
      label: 'Products',
      link: 'catalog',
      action: this.clickItemMenu.bind(this),
      icon: 'an an-grid-four',
    },
    {
      label: 'Budgets',
      link: 'budgets',
      action: this.clickItemMenu.bind(this),
      icon: 'an an-shopping-cart',
    },
    {
      label: 'Exit',
      link: 'logoff',
      action: this.clickItemMenu.bind(this),
      icon: 'an an-door',
    },
  ];

  clickItemMenu(menu: PoMenuPanelItem): void {}
}
