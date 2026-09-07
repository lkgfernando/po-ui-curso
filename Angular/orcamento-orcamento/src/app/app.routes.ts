import { Routes } from '@angular/router';
import { Home } from './paginas/home/home';
import { Clientes } from './paginas/clientes/clientes';
import { Orcamentos } from './paginas/orcamentos/orcamentos';
import { Erro } from './paginas/erro/erro';
import { Produtos } from './paginas/produtos/produtos';
import { Login } from './paginas/login/login';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'login', component: Login },
  { path: 'home', component: Home },
  { path: 'clientes', component: Clientes },
  { path: 'orcamentos', component: Orcamentos },
  { path: 'produtos', component: Produtos },
  { path: '**', component: Erro },
];
