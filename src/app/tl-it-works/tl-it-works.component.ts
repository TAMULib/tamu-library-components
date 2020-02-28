import { Component, Input } from '@angular/core';
/**
 * Provides a simple component to prove the basic functionality of the TAMU Components.
 */
@Component({
  selector: 'tl-it-works-element',
  templateUrl: './tl-it-works.component.html',
  styleUrls: ['./tl-it-works.component.scss']
})
export class TamuItWorksComponent {

  /** The text value to be displayed in the page title. */
  title = 'tl-it-works-component';

  /** The text value to be displayed for text. */
  @Input() text = '';

}
