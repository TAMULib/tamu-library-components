import { ChangeDetectionStrategy, Component, Injector, Input, ViewEncapsulation } from '@angular/core';
import { TamuAbstractBaseComponent } from '../shared/tl-abstract-base.component';

@Component({
  selector: 'tl-header-component',
  templateUrl: './tl-header.component.html',
  styleUrls: ['./tl-header.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
  changeDetection: ChangeDetectionStrategy.Default
})
export class TlHeaderComponent extends TamuAbstractBaseComponent {

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

  /** This defines the TAMU css variable: --tl-primary. */
  titleRowBackground = 'var(--tl-primary)';

  /** This defines the css variable: --tl-primary-dark-accent. */
  topNavBackground = 'var(--tl-primary-dark-accent)';

  /** This defines the TAMU css variable: grayColor. */
  bottomNavBackground = 'var(--tl-grey)';

  /** This defines the TAMU page  header title and is displayed as page title. */
  @Input() pageTitle = 'TL Header Component';

  @Input() pageTitleUrl = '/';

  /** This boolean attribute is used to supress display of "Give to the Libraries" button. */
  @Input() suppressCallToAction: 'true' | 'false' = 'false';

  /** This defines an array containing each top navigation to be suppressed or contains 'all' to suppress all top navigation. */
  suppressTopNavList: Array<string> = [];

  mobileMenuClosed = true;

  // tslint:disable-next-line:unnecessary-constructor
  constructor(injector: Injector) {
    super(injector);
  }

  /**
   * Toggles Mobile Menu from open to closed.
   */
  toggleMobileMenu(): void {
    this.mobileMenuClosed = !this.mobileMenuClosed;
  }

  /**
   * Designates top navigation to suppress.
   *
   * @param {string} value
   *   - A CSV string of supported top navigation names.
   *   - May specify 'all' to designate suppression of all top navigation.
   *   - Each CSV will be trimmed.
   *   - Each CSV will be treated in a case insensitive manner.
   *
   * @returns {void}
   */
  @Input() set suppressTopNav(value: string) {
    this.suppressTopNavList.length = 0;

    if (value.trim().toLowerCase() == 'all') {
      this.suppressTopNavList.push('all');
    }
    else {
      let values = value.split(',');

      for (let key in values) {
        this.suppressTopNavList.push(values[key].trim().toLowerCase());
      }
    }
  }

  /**
   * Method for checking whether or not a given top navigation is to be suppressed.
   *
   * @param {string} value
   *   - The name of the top navigation.
   *   - This will be trimmed.
   *   - This is treated in a case insensitive manner.
   *
   * @returns {boolean}
   *   - TRUE when the top navigation is not to be suppressed.
   *   - FALSE when the top navigation is to be suppressed.
   */
  showTopNav(value: string): boolean {
    return this.suppressTopNavList.indexOf('all') == -1
      && this.suppressTopNavList.indexOf(value.trim().toLowerCase()) == -1;
  }

}
