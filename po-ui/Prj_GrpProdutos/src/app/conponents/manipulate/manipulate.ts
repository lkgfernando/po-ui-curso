import { Component } from '@angular/core';

@Component({
  selector: 'app-manipulate',
  imports: [],
  templateUrl: './manipulate.html',
  styleUrl: './manipulate.css',
})
export class Manipulate {
  private grupoID: string = '';
  private operation: string = '';

  ngOnInit(): void {
    this.grupoID = sessionStorage.getItem('grupoID') || '';
    this.operation = sessionStorage.getItem('operation') || '';

    (document.getElementById('m_obs1') as HTMLInputElement).innerHTML =
      'Código do Grupo: ' + this.grupoID;
    (document.getElementById('m_obs2') as HTMLInputElement).innerHTML =
      'Operação: ' + this.operation;
  }
}
