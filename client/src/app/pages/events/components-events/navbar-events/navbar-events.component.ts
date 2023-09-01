import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar-events',
  templateUrl: './navbar-events.component.html',
  styleUrls: ['./navbar-events.component.scss']
})
export class NavbarEventsComponent {
  @Output() public addEvent = new EventEmitter();
  emitAddTask(){
    this.addEvent.emit()
  }
}
