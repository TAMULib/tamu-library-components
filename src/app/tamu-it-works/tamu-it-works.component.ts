import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'tamu-it-works-element',
  templateUrl: './tamu-it-works.component.html',
  styleUrls: ['./tamu-it-works.component.scss'],
  encapsulation: ViewEncapsulation.Native
})
export class TamuItWorksComponent {
  title = 'tamu-it-works-component';
}
