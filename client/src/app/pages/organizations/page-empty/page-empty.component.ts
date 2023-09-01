import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-page-empty',
  templateUrl: './page-empty.component.html',
  styleUrls: ['./page-empty.component.scss']
})
export class PageEmptyComponent {
  @Input() title!: string;
  @Output() public addInfo = new EventEmitter();

  constructor() {}
  ngOnInit() {}

  emitAddInfo() {
    this.addInfo.emit();
  }
}
