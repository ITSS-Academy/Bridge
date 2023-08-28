import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-display-no-data-contacts',
  templateUrl: './display-no-data-contacts.component.html',
  styleUrls: ['./display-no-data-contacts.component.scss']
})
export class DisplayNoDataContactsComponent {
  @Output() public addTask = new EventEmitter();

  constructor(){}

  emitAddTask(){
    this.addTask.emit()
  }
}
