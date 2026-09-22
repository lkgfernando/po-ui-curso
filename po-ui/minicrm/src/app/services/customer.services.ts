import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { Customers } from '../classes/customers';

@Injectable({
  providedIn: 'root',
})
export class CustomerServices {
  #http = inject(HttpClient);
  #url = environment.url;

  constructor() {}

  public getCustomers(): Observable<Array<Customers>> {
    let url: string = `${this.#url}/crm/api/clientes`;
    let headers = new HttpHeaders({
      Authorization: 'Basic ' + btoa('admin:Totvs@99'),
      TenantId: '99,01',
    });

    return this.#http.get<Array<Customers>>(url, { headers });
  }
}
