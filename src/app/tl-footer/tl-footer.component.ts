import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'tl-footer-element',
  templateUrl: './tl-footer.component.html',
  styleUrls: ['./tl-footer.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class TamuFooterComponent {
  backgroundColor = 'var(--tl-secondary)';
}
