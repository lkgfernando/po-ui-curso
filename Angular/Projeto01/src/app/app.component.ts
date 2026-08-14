import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ExemploComponent } from './exemplo/exemplo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ExemploComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  public paragrafo =
    'Paragrafo de exemplo para teste do input obrigatório do componente ExemploComponent';
}
