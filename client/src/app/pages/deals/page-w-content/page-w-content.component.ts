import { Component, Inject, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { DealState } from '../ngrx/state/deal.state';
import { Store } from '@ngrx/store';
import {
  TuiDialogContext,
  TuiDialogService,
  TuiDialogSize,
} from '@taiga-ui/core';
import { TuiDialogFormService } from '@taiga-ui/kit';
import { AuthService } from 'src/app/services/auth.service';
import { DealsService } from '../deals.service';
import { FormControl, FormGroup } from '@angular/forms';
import { TuiCountryIsoCode } from '@taiga-ui/i18n';
import { PolymorpheusContent } from '@tinkoff/ng-polymorpheus';
import { DealAction } from '../ngrx/action/deal.action';

@Component({
  selector: 'app-page-w-content',
  templateUrl: './page-w-content.component.html',
  styleUrls: ['./page-w-content.component.scss'],
  providers: [TuiDialogFormService],
})
export class PageWContentComponent {
  @Input()
  deals!: Observable<any>;

  deal$!: Observable<DealState>;

  currentUser!: any;

  constructor(
    @Inject(TuiDialogFormService)
    private readonly dialogForm: TuiDialogFormService,
    @Inject(TuiDialogService) private readonly dialogs: TuiDialogService,
    private dealService: DealsService,
    public authService: AuthService,
    private store: Store<{ deal: DealState }>
  ) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser')!);
    this.deal$ = store.select('deal');
    this.exampleForm.addControl('dealName', this.dealName);
    this.exampleForm.addControl('amount2', this.amount2);
    this.exampleForm.addControl('probability ', this.probability2);

    console.log(this.currentUser);
  }

  exampleForm: FormGroup = new FormGroup({});
  dealName: FormControl = new FormControl('');
  amount2: FormControl = new FormControl('');
  probability2: FormControl = new FormControl('');

  exampleFormSub = new FormGroup({});

  deleteDeal(id: string) {
    this.store.dispatch(DealAction.deleteDeal({ id: id }));
  }

   //Open Dialog
   showDialog(content: PolymorpheusContent, size: TuiDialogSize): void {
    const closeable = this.dialogForm.withPrompt({
      label: 'Are you sure?',
      data: {
        content: 'Your data will be <strong>lost</strong>',
      },
    });

    this.dialogs
      .open(content, { closeable, dismissible: closeable, size })
      .subscribe({
        complete: () => {
          this.dialogForm.markAsPristine();
        },
      });
  }
}
