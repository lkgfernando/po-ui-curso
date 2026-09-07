import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { ICliente } from '../interfaces/icliente';
import { api } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  #http = inject(HttpClient);
  private readonly url = `${api.url}${api.getCliente}`;

  public getClientes(): Observable<ICliente[]> {
    return this.#http.get<ICliente[]>(this.url).pipe(
      map((dados) =>
        dados.map((el) => ({
          id: el.id,
          name: {
            firstname: el.name.firstname,
            lastname: el.name.lastname,
          },
          email: el.email,
          address: {
            city: el.address.city,
            street: el.address.street,
            number: el.address.number,
          },
        })),
      ),
    );
  }
}
