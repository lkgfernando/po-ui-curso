import { Component, signal, effect, Input } from '@angular/core';

@Component({
  selector: 'app-exemplo',
  standalone: true,
  imports: [],
  templateUrl: './exemplo.component.html',
  styleUrl: './exemplo.component.css',
})
export class ExemploComponent {
  public titulo = signal<string | number>('OK');

  @Input() txtTitulo: string = '';
  @Input('sub') subtitulo: string = '';
  @Input({
    alias: 'texto',
    required: true,
  })
  texto: string = '';

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
