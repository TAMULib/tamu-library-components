import { Component, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'tl-header-element',
  templateUrl: './tl-header.component.html',
  styleUrls: ['./tl-header.component.scss']
})
export class TamuHeaderComponent {

  public logoSrc = 'https://php.library.tamu.edu/searcher/_application/resources/css/tamu-logo-with-bar.png';
  public logoText = ' Texas A&M University Libraries';
  public primaryColor = 'var(--tl-primary)';
  public secondaryColor = '#3c0001';
  public grayColor = '#ededed';
  public topNavPrimaryColor = '#FFC222';
  public bottomNavPrimaryColor = '#4D4D4D';

  @Input()
  public pageTitle = 'TL Header Component';

}
