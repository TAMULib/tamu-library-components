import { Component, Input, OnInit } from '@angular/core';
import { TamuAbstractBaseComponent } from '../shared/tl-abstract-base.component';
import { actions, ThemeVariants } from '@wvr/elements';
import * as themes from '../shared/themes';

@Component({
  selector: 'tl-themes',
  templateUrl: './tl-themes.component.html',
  styleUrls: ['./tl-themes.component.scss']
})
export class TlThemesComponent extends TamuAbstractBaseComponent implements OnInit {

  private _themeName;
  @Input() set activeTheme(name: string) {
    if (Object.keys(themes)
          .includes(name)) {
      this.store.dispatch(actions.Theme.select({
        name
      }));
      this._themeName = name;
    }
  }

  ngOnInit(): void {
    super.ngOnInit();
    if (!this._themeName) {
      this.store.dispatch(actions.Theme.select({
        name: 'tamu'
      }));
    }
  }

}
