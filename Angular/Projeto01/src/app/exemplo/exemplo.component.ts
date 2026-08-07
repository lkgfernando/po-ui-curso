import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-exemplo',
  standalone: true,
  imports: [],
  templateUrl: './exemplo.component.html',
  styleUrl: './exemplo.component.css',
})
export class ExemploComponent {
  public titulo = signal<string|number>("OK")

  constructor(){

  }

  updateTitulo(){
    this.titulo.update((value) => {
      return `${value} OK`
    })

  }
}
