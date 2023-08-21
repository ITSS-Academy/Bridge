import { Component, Inject } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import { TuiDialogService, TuiDialogContext } from '@taiga-ui/core';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent {

  money = 1000;
 
  constructor(@Inject(TuiDialogService) private readonly dialogs: TuiDialogService) {}

  showDialog(content: PolymorpheusContent<TuiDialogContext>): void {
      this.dialogs.open(content).subscribe();
  }

  withdraw(): void {
      this.money -= 100;
  }

  //test checkbox input true or false
  testForm = new FormGroup({
    testValue: new FormControl(), //input value true or false into the form control
  });
}
