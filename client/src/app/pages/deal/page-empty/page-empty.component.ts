import { Component, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-empty',
  templateUrl: './page-empty.component.html',
  styleUrls: ['./page-empty.component.scss']
})
export class PageEmptyComponent implements OnInit{
  @Output() public addDeal = new EventEmitter();

  constructor(){}
  ngOnInit(){}

  emitAddDeal(){
    this.addDeal.emit()
  }
}
