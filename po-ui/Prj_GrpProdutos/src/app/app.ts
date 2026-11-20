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
        '{ "access_token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InBKd3RQdWJsaWNLZXlGb3IyNTYifQ.eyJpc3MiOiJUT1RWUy1BRFZQTC1GV0pXVCIsInN1YiI6IkFkbWluaXN0cmFkb3IiLCJpYXQiOjE3OTUxMzI2MzMsInVzZXJpZCI6IjAwMDAwMCIsImV4cCI6MTc5NTEzNjIzMywiZW52SWQiOiJwcm90aGV1cyJ9.hn5jweU_PG_ysfOqhjLl3h-uI_BvKDrvjMnVoeYc7ZJ1JXOVZ_3KYHzDYcYU-MdxSvAZG3jDKVb0c7kbTfJiSpIS-mwKfWV_HVeDqF8YIWXM5BkFHuhzrTxGJglu6__sDfqj4XuRhVnxPv0z8ntG7F8SrMJvPdDZ1djHxJPzIhzeuvKDRtrcHCinWtDP8Jx07fIOp6p7tIzIKLrqMMXl2iRNkN2N6Yf9p970td70YXCLhqQLbleuyOASDtZOvONMCiUPgzGf_6BoRvaNTWe2igplDyG7u4AbOqX9sEChGSvLXl-Qp3WFDjUHbK3NHytV0pPvoBMi9_ntcL7KmNZIdA", "refresh_token": "JJqkEB8uuALlHS6podqbBfla.OJmVUTAtxArJej2qtfr0TsZzk-10lCSVqcieiEuJEXNGQeaLNb3eFhr5KpA9MXhglg1Yb2mVdd7wcWAidcuo_uoCX-YeOlAJehfGBTmtBc_c6ypDEom2eKlJM_bR0eBhee2_0jAMrUv2QiQckbZIovfGkpbDiKSu4LWfzutMbnLCmgmyUu7Y0JbWbeI3sk8OTUWNijqLXcWWCMUVp7B2N9g8.TYnuAI9c7sUDDimdLD-72MbThisVrf3EfL4AkMT9lcEnLX_V6XRkPXbfA0ysiSuhN1scJmwDQ21Agt13IPNLhuEJ55Kp0Mk-V6C4I_pIc8CdR7gIM23KJC9VwhVtdQP3C2e7agePTN8PHKQvparks5R7vw2gbazHMLIPJhQFEEKBzJvYDY6g8KNzDBSlADd1pkY_BCjfi2jdbVVJ_6JRlS6CjkK557QetucFLGaYXjOvEBf3jUqkM7AC_IFrzGbuJEycxvWMKBotyKd0D5DiT1flEMVEOs1BPQuyoOzcE016cALl9_f9sG_L_HJ7yb1HBKP-w9jg4aCT2Vs9QLYNfw", "scope": "default", "token_type": "Bearer", "expires_in": 3600, "hasMFA": false }',
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
