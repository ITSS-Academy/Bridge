import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoleAddNewRoutingModule } from './role-add-new-routing.module';
import { RoleAddNewComponent } from './role-add-new.component';
import {TuiExpandModule} from '@taiga-ui/core'
import {TuiAccordionModule} from '@taiga-ui/kit'
import {TuiDataListWrapperModule, TuiComboBoxModule} from '@taiga-ui/kit';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { TuiDataListModule } from '@taiga-ui/core';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TuiCheckboxModule} from '@taiga-ui/kit';

import {TUI_CHECKBOX_OPTIONS, TUI_CHECKBOX_DEFAULT_OPTIONS} from '@taiga-ui/core';

@NgModule({
  providers: [
    {
      provide: TUI_CHECKBOX_OPTIONS,
      useValue: {
        ...TUI_CHECKBOX_DEFAULT_OPTIONS,
        size: 'l',
      },
    },
],
  declarations: [
    RoleAddNewComponent
  ],
  imports: [
    TuiDataListModule,
    CommonModule,
    RoleAddNewRoutingModule,
    TuiExpandModule,
    TuiAccordionModule,
    TuiDataListWrapperModule,
    TuiComboBoxModule,
    SharedModule,
    TuiCheckboxModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class RoleAddNewModule { }
