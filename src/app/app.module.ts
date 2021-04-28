import { CUSTOM_ELEMENTS_SCHEMA, Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Store } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EditorModule, TINYMCE_SCRIPT_SRC } from '@tinymce/tinymce-angular';
import { actions, registerCustomElements, RootState, showHiddentContent, ThemeVariants, WvrCoreModule, WvrSharedModule, wvrTimeout } from '@wvr/elements';
import { TLCoreModule, TLSharedModule, TL_ELEMENTS } from '../../projects/tl-elements/src/public-api';
import * as themes from '../../projects/tl-elements/src/lib/utility/themes';

/** The main module for the TAMU Compnent library. */
@NgModule({
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    EditorModule,
    TLSharedModule,
    TLCoreModule,
    StoreDevtoolsModule.instrument({
      maxAge: 25, // retains last 25 states
      logOnly: true // restrict extension to log-only mode
    })
  ],
  exports: [],
  providers: [
    { provide: TINYMCE_SCRIPT_SRC, useValue: 'assets/tinymce/tinymce.min.js' }
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
