import { Component, Inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {
  TuiDialogContext,
  TuiDialogService,
  TuiDialogSize,
} from '@taiga-ui/core';
import { PolymorpheusContent } from '@tinkoff/ng-polymorpheus';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.scss'],
})
export class AdminUsersComponent {
  constructor(
    @Inject(TuiDialogService) private readonly dialogs: TuiDialogService
  ) {}
  exampleForm = new FormGroup({
    groupName: new FormControl(''),
    groupEmail: new FormControl(''),
    description: new FormControl(''),
    groupMember: new FormControl(''),
  });

  //control preferred currency selection
  readonly controlUserTypes = new FormControl();

  readonly UserTypes = [
    { type: 'Admin' },
    { type: 'User' },
  ];

  readonly stringifyUserType = (item: { type: string }): string =>
    `${item.type}`;
  //

  onClick(
    content: PolymorpheusContent<TuiDialogContext>,
    size: TuiDialogSize
  ): void {
    this.dialogs
      .open(content, {
        size,
      })
      .subscribe();
  }
}
