import { Component, Input, OnInit } from '@angular/core';
import { TamuAbstractBaseComponent } from '../utility/tl-abstract-base.component';
import { actions, ThemeVariants, wvrTimeout } from '@wvr/elements';
import { themes } from '../utility/themes';

@Component({
  selector: 'tl-themes-component',
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
    } else {
      console.warn(`'${name}' is not a known theme!`);
    }
  }

  ngOnInit(): void {
    super.ngOnInit();
    if (!this._themeName) {
      this.activeTheme = 'tamu';
    }
  }

}
