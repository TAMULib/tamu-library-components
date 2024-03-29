import { Injector, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Store } from '@ngrx/store';
import { storeDevtoolsInstrument } from '../environments/environment';
import { TINYMCE_SCRIPT_SRC } from '@tinymce/tinymce-angular';
import { actions, AppConfig, APP_CONFIG, registerWeaverElements, RootState, ThemeVariants } from '@wvr/elements';
import { themes } from '../../projects/tl-elements/src/lib/shared/themes';
import { TLCoreModule, TLSharedModule, TL_ELEMENTS } from '../../projects/tl-elements/src/public-api';

const getTinyMCEScript = (appConfig: AppConfig): string => `${appConfig.assetsUrl}/tinymce/tinymce.min.js`;

/** The main module for the TAMU Compnent library. */
@NgModule({
  imports: [
    BrowserAnimationsModule,
    ...storeDevtoolsInstrument,
    TLCoreModule,
    TLSharedModule
  ],
  exports: [],
  providers: [
    {
      provide: TINYMCE_SCRIPT_SRC,
      useFactory: getTinyMCEScript,
      deps: [APP_CONFIG]
    }
  ],
  declarations: [],
  bootstrap: [],
  entryComponents: [],
  schemas: []
})
export class TamuLibModule {

  constructor(private readonly injector: Injector) {
    registerWeaverElements(injector, TL_ELEMENTS);
  }

  ngDoBootstrap(): void {
    const store = this.injector.get<Store<RootState>>(Store);
    Object.keys(themes)
      .forEach(name => {
        const theme: ThemeVariants = themes[name].theme;
        store.dispatch(actions.Theme.add({
          name,
          theme
        }));
      });
  }

}
