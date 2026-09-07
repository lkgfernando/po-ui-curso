import { Component, inject, OnInit, signal } from '@angular/core';
import { ICliente } from '../../interfaces/icliente';
import { ClienteService } from '../../servicos/cliente';

@Component({
  imports: [],
  selector: 'app-clientes',
  styleUrl: './clientes.css',
  templateUrl: './clientes.html',
})
export class Clientes implements OnInit {
  public clientes = signal<ICliente[]>([]);
  #clienteService = inject(ClienteService);

  ngOnInit(): void {
    this.#clienteService.getClientes().subscribe({
      next: (dados) => {
        console.log('Dados recebidos da API:', dados);
        this.clientes.set(dados);
      },
      error: (err) => {
        console.error('Erro ao buscar clientes:', err);
      },
    });
  }
}
