import { Component, ViewEncapsulation } from '@angular/core';
import { Link } from '../shared/link';

/**
 * A fullwidth footer component which attaches to the bottom of the document body.
 */

@Component({
  selector: 'tl-footer-element',
  templateUrl: './tl-footer.component.html',
  styleUrls: ['./tl-footer.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class TamuFooterComponent {

  /** Used to override the background color. */
  backgroundColor = 'var(--tl-primary)';

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

}
