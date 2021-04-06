import { AfterViewInit, Component, Injector } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TamuAbstractBaseComponent } from '../shared/tl-abstract-base.component';

@Component({
  selector: 'tl-modal-component',
  templateUrl: './tl-modal.component.html',
  styleUrls: ['./tl-modal.component.scss']
})
export class TlModalComponent extends TamuAbstractBaseComponent implements AfterViewInit{

  btnText = 'Launch Tl Button Modal';

  btnThemeVariant = 'warning';

  title = 'Test Title';

  constructor(injector: Injector, private modalService: NgbModal) {
    super(injector);
  }

  ngAfterViewInit(): void {
    console.log('HERE');
  }

}
