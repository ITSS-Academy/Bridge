import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TuiDay, TuiTime } from '@taiga-ui/cdk';
import { TuiDialogContext, TuiDialogService, TuiDialogSize } from '@taiga-ui/core';
import {TuiCountryIsoCode} from '@taiga-ui/i18n';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

@Component({
  selector: 'app-display-no-data-events',
  templateUrl: './display-no-data-events.component.html',
  styleUrls: ['./display-no-data-events.component.scss']
})
export class DisplayNoDataEventsComponent {
  constructor(@Inject(TuiDialogService) private readonly dialogs: TuiDialogService) {}
 
  onClick(
      content: PolymorpheusContent<TuiDialogContext>,
      size: TuiDialogSize,
  ): void {
      this.dialogs
          .open(content, {
              size,
          })
          .subscribe();
  }

    readonly eventForm = new FormGroup({
      firstName: new FormControl(''),
      startTime: new FormControl([new TuiDay(2017, 2, 15), new TuiTime(12, 30)]),
      endTime: new FormControl([new TuiDay(2017, 2, 15), new TuiTime(12, 30)]),
      actType: new FormControl(),
      agenda: new FormControl(''),
      part: new FormControl(),
    });
 
    // seclect actType

    readonly allActType = [
        {name: 'Call'},
        {name: 'Meeting'},
        {name: 'Mobile Call'},
        {name: 'Onisite Meeting'},
        {name: 'Onisite Service'},
        {name: 'Group Event'},
        {name: 'Google Meet'},
        {name: 'Zoom Meet'},
        {name: 'Teams Meeting'},
        {name: 'Webex Meeting'},
        {name: 'Jio Meet'},
    ];
 
    readonly stringify = (actType: {name: string;}): string =>
        `${actType.name} `;

    // select part


    // select part
    readonly allPart = [
        ['TriNguyen', 'KhoaBui', 'DuongLe', 'VietVo', 'QuanTran'],
        ['Team Selling', 'Marketing Group', 'Support Group'],
    ];
 
    labels = ['User', 'Group'];
}
