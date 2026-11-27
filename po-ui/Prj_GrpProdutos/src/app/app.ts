import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PoMenuItem, PoMenuModule, PoPageModule, PoToolbarModule } from '@po-ui/ng-components';
import { Router, RouterModule } from '@angular/router';

import { ProtheusLibCoreModule } from '@totvs/protheus-lib-core';
import { ProAppConfigService } from '@totvs/protheus-lib-core';

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
    if (!this.proAppConfigService.insideProtheus()) {
      // this.proAppConfigService.loadAppConfig();
      sessionStorage.setItem('insideProtheus', '0');
      sessionStorage.setItem(
        'ERPTOKEN',
        '{ "access_token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InBKd3RQdWJsaWNLZXlGb3IyNTYifQ.eyJpc3MiOiJUT1RWUy1BRFZQTC1GV0pXVCIsInN1YiI6IkFkbWluaXN0cmFkb3IiLCJpYXQiOjE3OTU3Mzg5NjAsInVzZXJpZCI6IjAwMDAwMCIsImV4cCI6MTc5NTc0MjU2MCwiZW52SWQiOiJwcm90aGV1cyJ9.aMJ3r3MKdQLO0WlE8JYDGMXngzuuRi1F5r7sctrw57z8zRvR-y5DPWw4C9qB9jO4-72lwBwsRoptYw7GJJz3amfCQ_MnZDb5Bh8cBo5z0DlCYcevLqhrMA977y9OofO-pNmto0V_ugomEoPGk22fZfSCCvnIVRpwZOUEaAst52crJL8WRxPf_ClYj3ZPqEwZMobN2wkXs4dakc6HYoGaitrBrsR5NxzoVwFVl3oHvAMSUX1Pin3yNzDmLkoqFnHy_IHloiJCGK0MIcVDxadNpy9NnaJs67d2snK8Uy2NcZtZHtFr8KNPu14JTkTJuxKSHhbxJD0wNHRBEaDi0Ox2Bw", "refresh_token": "JJqkEB8ulgPkHSLhoeybBfla.OJmVUTAtxArJej2qtfr0TsZzk-10lCSVqcieiEuJEXNGQeaLNb3eKCj5KpA9MWhO2A5IY2mVZez5cWAidcuo_uoCX-YeBGIJehfGBTmXT8zM5ypDAru_eKlJM_bR0eBhee2_0jAMrUv2QiQckbZIovfGkpbDiKSu4LWfzutMbnLCmgmyUu7Y0JbWbeI3sk8OTUWNijqLXcWWCMUVp7B2N9g8.lWrTuc1-Y9eVpZvzWDNWKlxzzyJm6SF7mZjIUlgUgWFX8xwfFthIlWSpKxzlMjgZ0EG5Ru9-sUZ5akiKH4sHMk94ISQaICSWrEiKZVWvJJi5D44Cvnklu_fp-o1wuLfhfsf-NYFiAhq6YC-Cqre0vS6Cf7fGBxOTdHnUunQs4F-_ayQjA8qpU0BDIqJj2nNq0IB45xw_xif7U4m6vl50aJrVJpxX3MkVQt64rk0WJVCbGesTUyyAU4Aass_kFXOdsTF8MARmQxEupu-H1bu6-aFapXEcEsimrUeIp5Whc3mIaQLVBhY0XrCzZa4cioJCP-qY2NnI1mVHeThIVPmmTA", "scope": "default", "token_type": "Bearer", "expires_in": 3600, "hasMFA": false }',
      );
    } else {
      sessionStorage.setItem('insideProtheus', '1');
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
