import { Observable, map } from 'rxjs';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { LeadsService } from '../leads.service';
import { LeadState } from '../ngrx/state/lead.state';
import { Store } from '@ngrx/store';
import { LeadAction } from '../ngrx/action/lead.action';
import { FormControl, FormGroup } from '@angular/forms';
import { TuiCountryIsoCode } from '@taiga-ui/i18n';
import {TuiDialogContext, TuiDialogService, TuiDialogSize} from '@taiga-ui/core';
import { TuiDialogFormService } from '@taiga-ui/kit';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import { Lead } from 'src/app/models/lead.model';
@Component({
  selector: 'app-page-w-content',
  templateUrl: './page-w-content.component.html',
  styleUrls: ['./page-w-content.component.scss'],
  providers: [TuiDialogFormService],
})
export class PageWContentComponent{
  @Input()
  leads!: Observable<any>;

  lead$!: Observable<LeadState>;

  currentUser!: any;

  constructor(
    public leadService: LeadsService,private store: Store<{ lead: LeadState }>, 
    @Inject(TuiDialogService) private readonly dialogs: TuiDialogService,
    @Inject(TuiDialogFormService) private readonly dialogForm: TuiDialogFormService,
    ) {
    this.lead$ = store.select('lead');
    this.currentUser = JSON.parse(localStorage.getItem('currentUser')!);
    this.exampleForm.addControl('firstName', this.firstName);
    this.exampleForm.addControl('lastName2', this.lastName2);
    this.exampleForm.addControl('company2', this.company2);
    this.exampleForm.addControl('email2', this.email2);
    this.exampleForm.addControl('phone2', this.phone2);
    this.exampleForm.addControl('assignedTo', this.controlAssignments);
  }
  
  deleteLead(id: string) {
    this.store.dispatch(LeadAction.deleteLead({ id: id}));
  }

  updateLead(lead: any) {

      (lead.attributes.first_name =
        this.exampleForm.controls['firstName'].value),
      (lead.attributes.last_name =
        this.exampleForm.controls['lastName2'].value),
      (lead.attributes.department =
        this.exampleForm.controls['company2'].value),
      (lead.attributes.email1 = this.exampleForm.controls['email2'].value),
      (lead.attributes.phone_mobile =
        this.exampleForm.controls['phone2'].value),
      (lead.attributes.assigned_user_name = this.stringifyAssignment(
        this.controlAssignments.value
      )),
      (lead.attributes.assigned_user_id = this.currentUser.data.id);
      lead.attributes.modified_user_id = this.currentUser.data.id;
      lead.attributes.modified_by_name = this.currentUser.data.attributes.full_name;
      // lead.data.attributes.created_by_name = this.currentUser.data.attributes.full_name;
    console.log(lead);
    this.store.dispatch(LeadAction.updateLead({lead: {...lead}}));
    this.lead$.subscribe((data) => {
      console.log(data);
    });
    console.log(lead);
  }

  exampleForm: FormGroup = new FormGroup({});
  firstName: FormControl = new FormControl('');
  lastName2: FormControl = new FormControl('');
  company2: FormControl = new FormControl('');
  email2: FormControl = new FormControl('');
  phone2: FormControl = new FormControl('');

  //control assignment selection
  controlAssignments = new FormControl();

  readonly assignments = [
    { assign: 'Khoa Bùi' },
    { assign: 'Dương Thùy' },
    { assign: 'Trí Nguyễn' },
  ];

  readonly stringifyAssignment = (item: { assign: string }): string =>
    `${item.assign}`;
  //

  //control phone selection
  readonly phones = Object.values(TuiCountryIsoCode);

  countryIsoCode = TuiCountryIsoCode.US;

  name = '';
  lastName = '';
  company = '';
  email = '';
  reportTo = '';
  phone = '';

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
          this.name = '';
          this.lastName = '';
          this.company = '';
          this.email = '';
          this.reportTo = '';
          this.phone = '';
          this.dialogForm.markAsPristine();
        },
      });
  }

}
