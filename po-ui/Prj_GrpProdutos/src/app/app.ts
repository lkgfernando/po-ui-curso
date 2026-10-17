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
    if (this.proAppConfigService.insideProtheus()) {
      this.proAppConfigService.loadAppConfig();
      sessionStorage.setItem('insideProtheus', '0');
      sessionStorage.setItem(
        'ERPTOKEN',
        '{"access_token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InBKd3RQdWJsaWNLZXlGb3IyNTYifQ.eyJpc3MiOiJUT1RWUy1BRFZQTC1GV0pXVCIsInN1YiI6IkFkbWluaXN0cmFkb3IiLCJpYXQiOjE3OTIxOTkxMTMsInVzZXJpZCI6IjAwMDAwMCIsImV4cCI6MTc5MjIwMjcxMywiZW52SWQiOiJwcm90aGV1cyJ9.EMaxScr_SD7IklrZteFtcno1QToc1Agk5Tgfe1PL_QJDSZlMFz8cGqz848_cebNkH6E2suRJsyQpzt0u4fgnBg0_DDiFtxZv1LreCuMiUnyE65jqM0YWeySub-g_OgELI1Nb_kltQ65SQAePaXey6VlyruBQJvlNNk3jhfhrRwp0xnTQUJ4ztuDRqiH-5KNezVgTUyv5DYFMUSw_buinxkYXkLXNXTwHMQv6leCLjYx6zC0p7jzN3LkUWsiXsxOFEv7uFS7yKnXAZ4ek6xG9k2xyyai6Kwi9DMjzsa5KeSDln4g22NZ8iEbecmiLuffSh60Nx3AiJKMiwgyX28_wqw", "refresh_token": "JJqkEBwQuE7kHTqrodqbBfla.OJmVUTAtxArJej2qtfr0TsZzk-10lCSVqcieiEuJEXNGQeaLNbLeFij5KpA9MWhGlw12b2mWS9LxcWAidcuo_uoCX-keOmIJehfGBSm1Bs_y6ypALIW3eKlJM_bR0eBhee2_0jAMrUv2QiQckbZIovfGkpbDiKSu4LWfzutMbnLCmgmyUu7Y0JbWbeI3sk8OTUWNijqLXcWWCMUVp7B2N9g8.f2f2EIZOnxTypG9JgtrTWizxmFK4Hk832D-cxBmOaBk6jwRvEiFhJt81Xz9QIDx5HWzc10gazPetfKzFtNCXP-wBi56f2B0z5oqzcTubX2R4ZbdHrbcfip8_wve0YCScE2m0X-xTxWx5EfaR_3_a0X3ReLOyi0GHAhbcEovbb0jZdg6Zjsd9Ovge3oR8fbaj6GGY0Fu5aNLSVZ2nsCGrkvNJ4CZpbmN4bj529dUYI5uBl6S92gIpakbgJpC4xdzSyY-UVRwBMaKM59uqIY6T0z85H6mRfpduBoZc5zExEzQy469oIxIgL1tDUe29ow4wvlG6ry8sAhDA_5-mUKivpw", "scope": "default", "token_type": "Bearer", "expires_in": 3600, "hasMFA": false }',
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
