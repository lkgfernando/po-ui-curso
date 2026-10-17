import { Component, inject } from '@angular/core';
import { PoComponentsModule } from '@po-ui/ng-components';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-browse',
  imports: [PoComponentsModule],
  templateUrl: './browse.html',
  styleUrl: './browse.css',
})
export class Browse {
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    const erpToken = sessionStorage.getItem('ERPTOKEN');

    if (sessionStorage.getItem('insideProtheus') === '1') {
      (document.getElementById('obs1') as HTMLInputElement).innerHTML =
        'Você está dentro do Protheus';
    } else {
      (document.getElementById('obs1') as HTMLInputElement).innerHTML =
        'Você está fora do Protheus';
    }

    (document.getElementById('obs2') as HTMLInputElement).innerHTML = erpToken
      ? `Token: ${erpToken}`
      : 'Token não encontrado';
  }
}
