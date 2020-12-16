import { ChangeDetectionStrategy, Component, Injector, Input, ViewEncapsulation } from '@angular/core';
import { TamuAbstractBaseComponent } from '../shared/tl-abstract-base.component';

@Component({
  selector: 'tl-header-component',
  templateUrl: './tl-header.component.html',
  styleUrls: ['./tl-header.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
  changeDetection: ChangeDetectionStrategy.Default
})
export class TamuHeaderComponent extends TamuAbstractBaseComponent {

  /** Used to define theme in the header component. */
  themeVariant = 'success';

  /** Used to define the background property for top navigation section in the header component. */
  topNavThemeVariant = 'secondary';

  /** Used to define the background property for title row section in the header component. */
  titleRowThemeVariant = 'success';

  /** Used to define the background property for bottom navigation section in the header component. */
  bottomNavThemeVariant = 'light';

  /** This is a URL pointing to the location of the logo. */
  logoSrc = `${this.appConfig.assetsUrl}/icons/tl/tamu-logo.svg`;

  askUsSrc = `${this.appConfig.assetsUrl}/images/askus.png`;

  /** The text value to be displayed beside the TAMU logo. */
  logoText = ' Texas A&M University Libraries';

  /** This defines the height of the TAMU logo. */
  logoImgHeight = 'var(--tl-logo-img-height)';

  /** This defines the width of the TAMU logo. */
  logoImgWidth = 'var(--tl-logo-img-width)';

  /** This defines the margin of the TAMU logo. */
  logoImgMargin = 'var(--tl-logo-img-margin)';

  /** This is the href for the logo */
  logoHref = 'https://library.tamu.edu';

  /** This defines the TAMU page  header title and is displayed as page title. */
  @Input() pageTitle = 'TL Header Component';

  @Input() pageTitleUrl = '/';

  mobileMenuClosed = true;

  toggleMobileMenu(): void {
    this.mobileMenuClosed = !this.mobileMenuClosed;
  }

  // tslint:disable-next-line:unnecessary-constructor
  constructor(injector: Injector) {
    super(injector);
  }

}
