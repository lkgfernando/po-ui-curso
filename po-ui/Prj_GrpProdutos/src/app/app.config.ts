import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

import {
  ApplicationConfig,
  importProvidersFrom,
  inject,
  provideAppInitializer,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

import { PoHttpRequestModule, PoI18nModule } from '@po-ui/ng-components';
import { ProAppConfigService, ProtheusLibCoreModule } from '@totvs/protheus-lib-core';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    importProvidersFrom([
      PoHttpRequestModule,
      PoI18nModule.config({ default: { language: 'pt' }, contexts: {} }),
      ProtheusLibCoreModule,
    ]),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideHttpClient(withInterceptorsFromDi()),
    { provide: 'Windows', useValue: window },

    provideAppInitializer(() => {
      const proAppConfigService = inject(ProAppConfigService);
      if (!proAppConfigService.insideProtheus()) {
        // Fora do Protheus: descarta o appConfig em cache para sempre ler o appConfig.json atualizado
        sessionStorage.removeItem('ERPAPPCONFIG');
        return proAppConfigService.loadAppConfig();
      }
      return;
    }),
  ],
};
