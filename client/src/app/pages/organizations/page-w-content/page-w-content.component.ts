import {
  Component,
  Output,
  EventEmitter,
  OnInit,
  ChangeDetectionStrategy,
  Inject,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-page-w-content',
  templateUrl: './page-w-content.component.html',
  styleUrls: ['./page-w-content.component.scss']
})
export class PageWContentComponent {
  @Output() public addOrg = new EventEmitter();
  emitAddOrg() {
    this.addOrg.emit();
  }
}
