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
        '{"access_token":"eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InBKd3RQdWJsaWNLZXlGb3IyNTYifQ.eyJpc3MiOiJUT1RWUy1BRFZQTC1GV0pXVCIsInN1YiI6IkFkbWluaXN0cmFkb3IiLCJpYXQiOjE3OTQ4NzM2MDIsInVzZXJpZCI6IjAwMDAwMCIsImV4cCI6MTc5NDg3NzIwMiwiZW52SWQiOiJwcm90aGV1cyJ9.URFxgW34Pmza61y37ihfLdh6Llu_R8ob1segoTi2tqwVG-lhuojaGk9QZ9vkLGp0D7r2k7qfJvJae6sDQ7H9KwErA6PmPWpHaZSeqMVOk6CNCDelrHvcqiPt5NdEdm5bnjptQ6nh0Jwi91sCc2j0MI3WC8qFMLQPRFXipdnTud1PC8hjCCeLMZtt9mX5ssMu0ghDS_-IXlmwmAAwLixDhc2a6zXVNI97GyCMHQr5FJ4Oz5-e-Ez80bSeetnoyvOsMXD3Gl_CxOTDP9e45mqjNPxpT02MRm2RlOnasMcLCA64VZ1fBrySbguso_30WE4TSavXVWKaTng7e0kPxJEb7Q","refresh_token":"JJqkEB8-mkjnDS6kocqbBfla.OJmVUTAtxArJej2qtfr0TsZzk-10lCSVqcieiEuJEXNGQeaLNb3eFij5KpA9MWhK1Q1ma2mWddLxcWAidcuo_uoCX-YeOmIJehfGBTmtTM_i7ypAEoW3eKlJM_bR0eBhee2_0jAMrUv2QiQckbZIovfGkpbDiKSu4LWfzutMbnLCmgmyUu7Y0JbWbeI3sk8OTUWNijqLXcWWCMUVp7B2N9g8.SYXDf6YW-tp8tYzXxjTv6StbTsLmI8IYdVSY3OxCO-jPs3xnDzhcOJsWdp-23-ycEEC_AS8u01_TQwFqHRzBN6j8HFMu7BOVnhEvL0TOsYfhrziymwVIEZTlmzQ10-M2cZFK4kOByWVk6o2--w57JmyN92bCmxiBMYdVKJ9NW8qcwxb_YnSl1opOg92hZPIZ1vEfGOm9HcBrMb5v4Sddx7atMRJdJ2PxCVkq61Dz-Szqu7GNFuEesHabCF05zK8d8E8WPaXbVKH0IobdkcjugmWyg5qt5QSLq632PzlnPh8k6uEspq-rl_kNXQt9i3X9o-cyhz8E-M98lvSXTAeUig","scope":"default","token_type":"Bearer","expires_in":3600,"hasMFA":false,"api_base_url":"https://orcl:2200/rest","url":"https://orcl:2200/rest"}',
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
