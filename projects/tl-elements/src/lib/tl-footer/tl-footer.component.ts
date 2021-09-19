import { AfterViewInit, ChangeDetectionStrategy, Component, Injector, Input, ViewEncapsulation } from '@angular/core';
import { TamuAbstractBaseComponent } from '../shared/tl-abstract-base.component';
import { Link } from '../shared/link';

/**
 * A fullwidth footer component which attaches to the bottom of the document body.
 */
@Component({
  selector: 'tl-footer-component',
  templateUrl: './tl-footer.component.html',
  styleUrls: ['./tl-footer.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
  changeDetection: ChangeDetectionStrategy.Default
})
export class TamuFooterComponent extends TamuAbstractBaseComponent implements AfterViewInit {

  @Input() loginUrl: string;

  /** Used to iterate the footer navigation list. */
  links: Array<Link> = [
    { href: 'https://howdy.tamu.edu/uPortal/normal/render.uP', value: 'howdy.tamu.edu' },
    { href: 'https://library.tamu.edu/services/tech_troubleshooting.html', value: 'Off-Campus Access' },
    { href: 'http://tamu.edu/', value: 'Texas A& M University' },
    { href: 'http://library.tamu.edu/about/compliance.html', value: 'Site Policies' },
    { href: 'https://library.tamu.edu/services/accessibility.html', value: 'Accessibility' },
    { href: 'http://www.thecb.state.tx.us/apps/txcrews/', value: 'Texas CREWS' },
    { href: 'https://askus.library.tamu.edu/contact/index', value: 'Comments' },
    { href: 'https://library.tamu.edu/status/', value: 'Services Status' }
  ];

  variantTypes = ['button'];

  // tslint:disable-next-line:unnecessary-constructor
  constructor(injector: Injector) {
    super(injector);
  }

  ngAfterViewInit(): void {
    if (!!this.loginUrl) {
      this.links.push({
          href: this.loginUrl,
          value: 'Login'
      });
    }
  }

  index(index: number, link: Link): number {
    return index;
  }

}
