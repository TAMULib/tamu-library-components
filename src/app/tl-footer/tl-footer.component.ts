import { Component, ViewEncapsulation } from '@angular/core';

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
  backgroundColor = 'var(--tl-secondary)';


}
