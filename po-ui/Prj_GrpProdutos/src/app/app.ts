import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { PoMenuItem, PoMenuModule, PoPageModule, PoToolbarModule } from '@po-ui/ng-components';
import { ProtheusLibCoreModule } from '@totvs/protheus-lib-core';
import { ProAppConfigService } from '@totvs/protheus-lib-core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    PoToolbarModule,
    PoMenuModule,
    PoPageModule,
    ProtheusLibCoreModule,
    RouterModule,
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class App {
  constructor(
    private proAppConfigService: ProAppConfigService,
    private router: Router,
  ) {
    if (this.proAppConfigService.insideProtheus()) {
      this.proAppConfigService.loadAppConfig();
    }
  }

  menus: Array<PoMenuItem> = [
    {
      label: 'Home',
      action: this.homeClick.bind(this),
      icon: 'an an-an-fill an-house-line',
      shortLabel: 'Home',
    },
    {
      label: 'Cadastro do Grupo',
      action: this.browseClick.bind(this),
      icon: 'an-fill an-grid-four',
      shortLabel: 'Cadastro',
    },
    {
      label: 'Ajuda',
      action: this.aboutClick.bind(this),
      icon: 'an an-hand-palm',
      shortLabel: 'Ajuda',
    },
    {
      label: 'Sair',
      action: this.closeApp.bind(this),
      icon: 'an an-door',
      shortLabel: 'Sair',
    },
  ];

  private homeClick() {
    this.router.navigate(['/', 'home']);
  }

  private browseClick() {
    this.router.navigate(['/', 'browse']);
  }

  private aboutClick() {
    this.router.navigate(['/', 'about']);
  }

  private closeApp() {
    if (this.proAppConfigService.insideProtheus()) {
      this.proAppConfigService.callAppClose();
    } else {
      alert('Clique não veio do Protheus');
    }
  }
}
