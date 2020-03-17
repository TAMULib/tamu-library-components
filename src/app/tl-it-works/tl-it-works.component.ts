import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'tl-it-works-element',
  templateUrl: './tl-it-works.component.html',
  styleUrls: ['./tl-it-works.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class TamuItWorksComponent {

  /** The text value to be displayed in the page title. */
  title = 'tl-it-works-component';

  /** The text value to be displayed for text. */
  @Input() text = '';

}
