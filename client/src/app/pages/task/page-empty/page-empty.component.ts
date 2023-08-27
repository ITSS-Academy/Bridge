import { Component, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-empty',
  templateUrl: './page-empty.component.html',
  styleUrls: ['./page-empty.component.scss']
})
export class PageEmptyComponent implements OnInit{
  @Output() public addTask = new EventEmitter();

  constructor(){}
  ngOnInit(){}

  emitAddTask(){
    this.addTask.emit()
  }
}
