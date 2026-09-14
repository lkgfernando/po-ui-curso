import { Routes } from '@angular/router';
import { Loginpage } from './pages/loginpage/loginpage';
import { Masterpage } from './pages/masterpage/masterpage';
import { Home } from './pages/home/home';
import { Catalogpage } from './pages/catalogpage/catalogpage';
import { Customerpage } from './pages/customerpage/customerpage';
import { Budgetpage } from './pages/budgetpage/budgetpage';
import { Logoffpage } from './pages/logoffpage/logoffpage';
import { Errorpage } from './pages/errorpage/errorpage';

export const routes: Routes = [
  { path: 'login', component: Loginpage },
  {
    path: '',
    component: Masterpage,
    children: [
      { path: 'home', component: Home },
      { path: 'customers', component: Customerpage },
      { path: 'catalog', component: Catalogpage },
      { path: 'budgets', component: Budgetpage },
      { path: 'logoff', component: Logoffpage },
    ],
  },
  { path: '**', component: Errorpage },
];
