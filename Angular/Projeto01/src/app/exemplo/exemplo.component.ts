import { Component } from '@angular/core';

@Component({
  selector: 'app-exemplo',
  standalone: true,
  imports: [],
  templateUrl: './exemplo.component.html',
  styleUrl: './exemplo.component.css',
})
export class ExemploComponent {
  private titulo: string = 'Titulo do componente Exemplo';

  public getTitulo(): string {
    return this.titulo;
  }
}
