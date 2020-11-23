import { enableProdMode, isDevMode } from '@angular/core';
import { weaverBootstrap } from '@wvr/elements';
import { TamuLibModule } from './app/tl-lib.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

document.addEventListener('DOMContentLoaded', () => {
  weaverBootstrap(TamuLibModule)(isDevMode() ? '/config.json' : undefined);
});
