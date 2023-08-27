import { Component } from '@angular/core';
import { OnInit, 
  Input, 
  Output, 
  EventEmitter} from '@angular/core';

@Component({
  selector: 'app-third-navbar',
  templateUrl: './third-navbar.component.html',
  styleUrls: ['./third-navbar.component.scss']
})
export class ThirdNavbarComponent implements OnInit{
  // @Input() pageEmpty:any = null;
  @Output() public addCase = new EventEmitter();

  constructor(){}
  ngOnInit(){}

  emitAddCase(){
    this.addCase.emit()
  }
}
