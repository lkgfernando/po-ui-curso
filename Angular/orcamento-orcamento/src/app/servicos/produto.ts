import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { IProdutos } from '../interfaces/iprodutos';
import { api } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProdutoService {
  #http = inject(HttpClient);
  private readonly url = `${api.url}${api.getProdutos}`;

  public getProdutcts(): Observable<IProdutos[]> {
    return this.#http.get<IProdutos[]>(this.url).pipe(
      map((dados) =>
        dados.map((el) => ({
          id: el.id,
          title: el.title,
          price: el.price,
          description: el.description,
          category: el.category,
          image: el.image,
          rating: {
            rate: el.rating.rate,
            count: el.rating.count,
          },
        })),
      ),
    );
  }
}
