import { Component, inject, OnInit, signal } from '@angular/core';
import { IProdutos } from '../../interfaces/iprodutos';
import { ProdutoService } from '../../servicos/produto';
import { CurrencyPipe } from '@angular/common';

@Component({
  imports: [CurrencyPipe],
  selector: 'app-produtos',
  styleUrl: './produtos.css',
  templateUrl: './produtos.html',
})
export class Produtos implements OnInit {
  public produtos = signal<IProdutos[]>([]);
  #produtoService = inject(ProdutoService);

  ngOnInit(): void {
    this.#produtoService.getProdutcts().subscribe({
      next: (dados) => {
        console.log('Dados recebido da API ', dados);
        this.produtos.set(dados);
      },
      error: (err) => {
        console.error('Erro ao buscar produtos', err);
      },
      complete: () => {
        console.log('Busca efetuada com sucesso');
      },
    });
  }
}
