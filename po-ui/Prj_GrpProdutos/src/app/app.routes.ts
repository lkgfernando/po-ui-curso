import { Routes } from '@angular/router';
import { Browse } from './pages/browse/browse';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Manipulate } from './conponents/manipulate/manipulate';

export const routes: Routes = [
  { path: 'home', title: 'Home do projeto', component: Home },
  { path: 'browse', title: 'Browse de Cadastro', component: Browse },
  { path: 'about', title: 'Sobre o Projeto', component: About },
  { path: 'manipulate', title: 'Manipulação de Dados', component: Manipulate },
];
