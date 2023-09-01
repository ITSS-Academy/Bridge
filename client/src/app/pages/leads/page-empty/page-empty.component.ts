import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-page-empty',
  templateUrl: './page-empty.component.html',
  styleUrls: ['./page-empty.component.scss']
})
export class PageEmptyComponent implements OnInit{
  @Input() title!: string;
  @Output() public addInfo = new EventEmitter();

  constructor() {}
  ngOnInit() {}

  emitAddInfo() {
    this.addInfo.emit();
  }
}