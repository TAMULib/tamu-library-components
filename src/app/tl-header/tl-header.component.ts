import { ChangeDetectorRef, Component, Input, ViewEncapsulation } from '@angular/core';
import { Link } from '../shared/link';
import { TamuAbstractBaseComponent } from '../shared/tl-abstract-base.component';

@Component({
  selector: 'tl-header-element',
  templateUrl: './tl-header.component.html',
  styleUrls: ['./tl-header.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class TamuHeaderComponent extends TamuAbstractBaseComponent {

  /** This is a URL pointing to the location of the logo. */
  logoSrc = 'https://labs.library.tamu.edu/tl-components/latest/assets/tamu-logo.svg';

  /** The text value to be displayed beside the TAMU logo. */
  logoText = ' Texas A&M University Libraries';

  /** This defines the height of the TAMU logo. */
  logoImgHeight = 'var(--tl-logo-img-height)';

  /** This defines the width of the TAMU logo. */
  logoImgWidth = 'var(--tl-logo-img-width)';

  /** This defines the margin of the TAMU logo. */
  logoImgMargin = 'var(--tl-logo-img-margin)';

  /** This defines the TAMU css variable: --tl-primary. */
  titleRowBackground = 'var(--tl-primary)';

  /** This defines the css variable: --tl-primary-dark-accent. */
  topNavBackground = 'var(--tl-primary-dark-accent)';

  /** This defines the TAMU css variable: grayColor. */
  bottomNavBackground = 'var(--tl-grey)';

  /** This defines the TAMU page  header title and is displayed as page title. */
  @Input() pageTitle = 'TL Header Component';

  @Input() pageTitleUrl = '/';

  mobileMenuClosed = true;

  /** Used to iterate the header navigation list. */
  topLinks: Array<Link> = [
    { href: 'https://library.tamu.edu/about/hours.html', value: 'Hours' },
    { href: 'https://library.tamu.edu/about/index.html', value: 'Libraries' },
    { href: 'https://library.tamu.edu/#', value: 'Information For' },
    { href: 'https://library.tamu.edu/mylibrary/', value: 'MyLibrary' },
    { href: 'http://askus.library.tamu.edu/', value: 'Help' }
  ];

  constructor(private ref: ChangeDetectorRef) {
    super();
  }

  toggleMobileMenu(): void {
    this.mobileMenuClosed = !this.mobileMenuClosed;
    this.ref.detectChanges();
  }

}
