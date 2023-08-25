import { Component, Inject, ChangeDetectionStrategy } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {TuiDialogContext, TuiDialogService, TuiDialogSize} from '@taiga-ui/core';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
@Component({
  selector: 'app-form-information',
  templateUrl: './form-information.component.html',
  styleUrls: ['./form-information.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class FormInformationComponent {
  constructor(@Inject(TuiDialogService) private readonly dialogs: TuiDialogService) {}
  exampleForm = new FormGroup({
    groupName: new FormControl(''),
    groupEmail: new FormControl(''),
    description: new FormControl(''),
    groupMember: new FormControl(''),
});
    onClick(
        content: PolymorpheusContent<TuiDialogContext>,
        size: TuiDialogSize,
    ): void {
        this.dialogs
            .open(content, {
                // label: 'What a cool library set',
                size,
            })
            .subscribe();
    }

}
