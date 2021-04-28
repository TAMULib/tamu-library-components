import { CUSTOM_ELEMENTS_SCHEMA, Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Store } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { TINYMCE_SCRIPT_SRC } from '@tinymce/tinymce-angular';
import { actions, AppConfig, APP_CONFIG, registerCustomElements, RootState, showHiddentContent, ThemeVariants, WvrCoreModule, WvrSharedModule, wvrTimeout } from '@wvr/elements';
import * as themes from '../../projects/tl-elements/src/lib/utility/themes';
import { TLCoreModule, TLSharedModule, TL_ELEMENTS } from '../../projects/tl-elements/src/public-api';

const getTinyMCEScript = (appConfig: AppConfig): string => `${appConfig.assetsUrl}/tinymce/tinymce.min.js`;

/** The main module for the TAMU Compnent library. */
@NgModule({
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    StoreDevtoolsModule.instrument({
      maxAge: 25, // retains last 25 states
      logOnly: true // restrict extension to log-only mode
    }),
    WvrSharedModule,
    TLSharedModule,
    WvrCoreModule,
    TLCoreModule
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
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TamuLibModule {

  constructor(private readonly injector: Injector) {

  }

  ngDoBootstrap(): void {
    registerCustomElements(this.injector, TL_ELEMENTS);
    showHiddentContent(this.injector);

    const store = this.injector.get<Store<RootState>>(Store);

    Object.keys(themes)
      .forEach(name => {
        const theme: ThemeVariants = themes[name].theme;
        store.dispatch(actions.Theme.add({
          name,
          theme
        }));
      });

    wvrTimeout(() => {
      document.querySelector('body').style.display = 'block';
    });
  }

}
