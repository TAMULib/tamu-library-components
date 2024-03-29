import { Component, Input, OnInit } from '@angular/core';
import { actions } from '@wvr/elements';
import { TamuAbstractBaseComponent } from '../shared/tl-abstract-base.component';
import { themes } from '../shared/themes';

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
