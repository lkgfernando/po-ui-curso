import { Component, inject, OnInit } from '@angular/core';
import { PoInfoModule, PoListViewModule, PoPageModule } from '@po-ui/ng-components';
import { Customers } from '../../classes/customers';
import { CustomerServices } from '../../services/customer.services';

@Component({
  selector: 'app-customerpage',
  imports: [PoListViewModule, PoPageModule, PoInfoModule],
  templateUrl: './customerpage.html',
  styleUrl: './customerpage.css',
})
export class Customerpage implements OnInit {
  public custormerList: Customers[] = [];
  #customerService = inject(CustomerServices);

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    let req = this.#customerService.getCustomers();
    let itens: Array<Customers> = [];

    req.subscribe({
      next(value: any) {
        console.log(value);
        value.SA1.forEach((el: Customers) => {
          itens.push(el);
        });
      },
      error(err) {
        console.log(`error req customer list`, err);
      },
      complete() {
        console.log(`complete customer list`);
      },
    });

    this.custormerList = itens;
  }
}
