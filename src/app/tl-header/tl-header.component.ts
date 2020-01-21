import { Component, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'tl-header-element',
  templateUrl: './tl-header.component.html',
  styleUrls: ['./tl-header.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class TamuHeaderComponent {
  private logoSrc = "https://yt3.ggpht.com/-e2gGcJKR-rM/AAAAAAAAAAI/AAAAAAAAAAA/WXCERh8f31k/s68-c-k-no-mo-rj-c0xffffff/photo.jpg";
  private logoText = " | A&M Libraries";
  @Input() pageTitle = "TL Header Component";
}
