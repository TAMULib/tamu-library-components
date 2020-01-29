import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'tl-it-works-element',
  templateUrl: './tl-it-works.component.html',
  styleUrls: ['./tl-it-works.component.scss'],
  encapsulation: ViewEncapsulation.Native
})
export class TamuItWorksComponent {
  title = 'tl-it-works-component';

  @Input() text = "";
}
