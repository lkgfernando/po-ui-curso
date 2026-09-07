import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  let router = inject(Router);
  let url = state.url;
  if (
    url === '/' ||
    url === '/home' ||
    url === '/orcamentos' ||
    url === '/clientes' ||
    url === '/produtos'
  ) {
    if (!sessionStorage.getItem('login')) {
      sessionStorage.setItem('url', url);
      router.navigate(['/login']);
      return false;
    }
  }

  return true;
};
