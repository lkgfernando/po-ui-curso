import { Component, signal, effect } from '@angular/core';

@Component({
  selector: 'app-exemplo',
  standalone: true,
  imports: [],
  templateUrl: './exemplo.component.html',
  styleUrl: './exemplo.component.css',
})
export class ExemploComponent {
  public titulo = signal<string | number>('OK');

  constructor() {
    effect(() => {
      console.log(`Alteração do titulo: ${this.titulo()}`);
    });
  }

  updateTitulo() {
    this.titulo.update((value) => {
      return `${value} OK`;
    });
  }
}
