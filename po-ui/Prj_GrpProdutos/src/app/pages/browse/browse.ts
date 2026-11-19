import { Component, inject } from '@angular/core';
import { PoComponentsModule } from '@po-ui/ng-components';

import { HttpClient } from '@angular/common/http';

import {
  PoInfoModule,
  PoTableModule,
  PoSearchModule,
  PoTableColumn,
  PoTagType,
} from '@po-ui/ng-components';

@Component({
  selector: 'app-browse',
  imports: [PoComponentsModule, PoInfoModule, PoTableModule, PoSearchModule],
  templateUrl: './browse.html',
  styleUrl: './browse.css',
})
export class Browse {
  public columns: Array<PoTableColumn> = [];
  public items: Array<any> = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    //   const erpToken = sessionStorage.getItem('ERPTOKEN');
    //   if (sessionStorage.getItem('insideProtheus') === '0') {
    //     (document.getElementById('obs1') as HTMLInputElement).innerHTML =
    //       'Você está dentro do Protheus';
    //   } else {
    //     (document.getElementById('obs1') as HTMLInputElement).innerHTML =
    //       'Você está fora do Protheus';
    //   }
    //   (document.getElementById('obs2') as HTMLInputElement).innerHTML = erpToken
    //     ? `Token: ${erpToken}`
    //     : 'Token não encontrado';

    this.columns = this.getColumns();
    this.items = this.getItems();
  }

  getColumns(): Array<PoTableColumn> {
    return [
      { property: 'grupo', width: '8%' },
      { property: 'descricao' },
      { property: 'procedencia' },
      {
        property: 'status',
        type: 'label',
        width: '8%',
        labels: [
          { value: '', color: '#745678', label: 'Não Cadastrado', icon: 'po-icon-exclamation' },
          { value: '1', color: 'blue', label: 'Novo', icon: 'po-icon-star-filled' },
          { value: '2', type: PoTagType.Success, label: 'Remanufaturado', icon: 'po-icon-stock' },
          { value: '3', color: '#d8a20e', label: 'Reciclado', icon: 'po-icon-handshake' },
          { value: '4', color: 'rgba(201, 53, 125)', label: 'Usado', icon: 'po-icon-target' },
        ],
      },
    ];
  }

  getItems(): Array<any> {
    let itemsRequest: Array<any> = [];
    let procedencia: string = '';

    this.http.get<any>('/wsGprProd/get/all?limit=100', {}).subscribe({
      next: (v) => {
        for (let index in v.objects) {
          if (v.objects[index].proori == '1') {
            procedencia = '1=Original';
          } else if (v.objects[index].proori == '0') {
            procedencia = '0=Não Original';
          } else {
            procedencia = '';
          }

          itemsRequest.push({
            grupo: v.objects[index].grupo,
            descricao: v.objects[index].desc,
            procedencia: procedencia,
            status: v.objects[index].status,
          });
        }
      },
      error: (e) => {
        itemsRequest = [];
        console.error('Erro ao buscar os dados do browse: ', e);
      },
      complete: () => {
        console.log('Busca de dados do browse concluída.');
      },
    });

    return itemsRequest;
  }
}
