import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoleView1RoutingModule } from './role-view1-routing.module';
import { RoleView1Component } from './role-view1.component';

import { SharedModule } from 'src/app/shared/shared/shared.module';
import { TreeViewComponent } from './tree-view/tree-view.component';
import { ListViewComponent } from './list-view/list-view.component';

import {tuiSvgOptionsProvider, TUI_SANITIZER} from '@taiga-ui/core';
import {NgDompurifySanitizer} from '@tinkoff/ng-dompurify';

@NgModule({
  declarations: [
    RoleView1Component,
    TreeViewComponent,
    ListViewComponent,
  ],
  imports: [
    CommonModule,
    RoleView1RoutingModule,
    SharedModule,
    
  ],
  providers: [
    // A workaround because StackBlitz does not support assets
    tuiSvgOptionsProvider({
      path: 'https://taiga-ui.dev/assets/taiga-ui/icons',
    }),
    /**
     * If you use unsafe icons or TuiEditor in your app
     *
     * Take a look at: https://github.com/taiga-family/ng-dompurify
     *
     * This library implements DOMPurify as Angular Sanitizer or Pipe.
     * It delegates sanitizing to DOMPurify and supports the same configuration.
     */
    {
      provide: TUI_SANITIZER,
      useClass: NgDompurifySanitizer,
    },
  ],
})
export class RoleView1Module { }
