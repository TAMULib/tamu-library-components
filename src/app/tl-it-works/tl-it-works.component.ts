import { Component, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'tl-it-works-element',
  templateUrl: './tl-it-works.component.html',
  styleUrls: ['./tl-it-works.component.scss']
})
export class TamuItWorksComponent {

  title = 'tl-it-works-component';

  @Input() text = '';

}
