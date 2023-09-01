import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-display-no-data-contacts',
  templateUrl: './display-no-data-contacts.component.html',
  styleUrls: ['./display-no-data-contacts.component.scss']
})
export class DisplayNoDataContactsComponent {
  @Input() title!: string;
  @Output() public addInfo = new EventEmitter();

  constructor() {}
  ngOnInit() {}

  emitAddInfo() {
    this.addInfo.emit();
  }
}
