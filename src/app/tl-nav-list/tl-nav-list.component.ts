import { Component, Input } from '@angular/core';
import { Alignment } from '@wvr/elements';

@Component({
  selector: 'tl-nav-list-element',
  templateUrl: './tl-nav-list.component.html',
  styleUrls: ['./tl-nav-list.component.scss']
})
export class TamuNavListComponent {

  @Input() aligned: Alignment = Alignment.LEFT;

  @Input() vertical = false;

}
