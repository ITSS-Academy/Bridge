import { Component, Input } from '@angular/core';
import { TaskState } from 'firebase/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-page-w-content',
  templateUrl: './page-w-content.component.html',
  styleUrls: ['./page-w-content.component.scss'],
})
export class PageWContentComponent {
  @Input()
  tasks!: Observable<any>;


  currentUser!: any;
  
}
