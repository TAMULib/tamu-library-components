import { Component, Input } from '@angular/core';

@Component({
  selector: 'tl-header-element',
  templateUrl: './tl-header.component.html',
  styleUrls: ['./tl-header.component.scss']
})
export class TamuHeaderComponent {

  logoSrc = 'https://php.library.tamu.edu/searcher/_application/resources/css/tamu-logo-with-bar.png';
  logoText = ' Texas A&M University Libraries';

  topNavBackground = 'var(--tl-secondary)';
  topNavPrimaryColor = '#FFC222';
  topNavHeight = '50px';

  titleRowBackground = 'var(--tl-primary)';
  titleRowHeight = '85px';

  bottomNavBackground = '#ededed';
  bottomNavHeight = '65px';
  bottomNavPrimaryColor = '#4D4D4D';

  @Input() pageTitle = 'TL Header Component';

}
