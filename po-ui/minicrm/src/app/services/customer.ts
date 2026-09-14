import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Customer {
  #http = inject(HttpClient);
  #url = environment.url;

  constructor() {}

  public getCustomers(): Observable<Array<Customer>> {
    let url: string = `${this.#url}/crm/api/tabelas/sa1`;
    let headers = new HttpHeaders({
      Authorization: 'Basic' + btoa('admin:Totvs@99'),
      TenantId: '99,01',
    });

    return this.#http.get<Array<Customer>>(url, { headers });
  }
}
