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
  public links: Array<Link>
    = [
      new Link('https://howdy.tamu.edu/uPortal/normal/render.uP', 'howdy.tamu.edu'),
      new Link('https://library.tamu.edu/services/tech_troubleshooting.html', 'Off-Campus Access'),
      new Link('http://tamu.edu/', 'Texas A& M University'),
      new Link('http://library.tamu.edu/about/compliance.html', 'Site Policies'),
      new Link('https://library.tamu.edu/services/accessibility.html', 'Accessibility'),
      new Link('http://www.thecb.state.tx.us/apps/txcrews/', 'Texas CREWS'),
      new Link('https://askus.library.tamu.edu/contact/index', 'Comments'),
      new Link('https://library.tamu.edu/status/', 'Services Status')
    ];

}
