import { Component, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'tl-header-element',
  templateUrl: './tl-header.component.html',
  styleUrls: ['./tl-header.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class TamuHeaderComponent {
  logoSrc = "https://library.tamu.edu/assets/bootstrap/images/tam-lg.png";
  logoText = " Texas A&M University Libraries";
  primaryColor = "#500000";
  secondaryColor = "#3c0001";
  grayColor = "#ededed";
  @Input() pageTitle = "TL Header Component";
}
