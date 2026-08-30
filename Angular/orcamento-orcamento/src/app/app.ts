import { Component, signal } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { Home } from './paginas/home/home';
import { Clientes } from './paginas/clientes/clientes';
import { Orcamentos } from './paginas/orcamentos/orcamentos';

@Component({
  selector: 'app-root',
  imports: [Navbar, Home, Clientes, Orcamentos],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('orcamento-orcamento');
}
