import { NgModule } from '@angular/core';
import { tuiSvgOptionsProvider, TUI_SANITIZER } from '@taiga-ui/core';
import { NgDompurifySanitizer } from '@tinkoff/ng-dompurify';
import { CommonModule } from '@angular/common';
import { FirstNavbarComponent } from 'src/app/components/first-navbar/first-navbar.component';
import { NavbarUserManagementComponent } from 'src/app/components/navbar-user-management/navbar-user-management.component';
import { KitModule } from '../kit/kit.module';
import { CoreModule } from '../core/core.module';
import { CdkModule } from '../cdk/cdk.module';
import { AddOnModule } from '../add-on/add-on.module';
import { SidebarComponent } from 'src/app/components/sidebar/sidebar.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TuiDataListModule } from '@taiga-ui/core';
import { TuiComboBoxModule, TuiDataListWrapperModule } from '@taiga-ui/kit';
import { SecondNavbarComponent } from 'src/app/components/second-navbar/second-navbar.component';
import { LoadingComponent } from 'src/app/components/loading/loading.component';
import { AppSideBarComponent } from 'src/app/components/app-sidebar/side-bar.component';
//Angular Material
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';

import {HttpClientModule} from '@angular/common/http';
@NgModule({
  declarations: [
    FirstNavbarComponent,
    NavbarUserManagementComponent,
    SidebarComponent,
    SecondNavbarComponent,
    LoadingComponent,
    AppSideBarComponent,

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    KitModule,
    CoreModule,
    CdkModule,
    AddOnModule,
    FormsModule,
    TuiComboBoxModule,
    TuiDataListModule,
    TuiDataListWrapperModule,
    HttpClientModule,

    //Angular Material
    MatProgressSpinnerModule,
    MatProgressBarModule,
  ],
  exports: [
    //modules
    KitModule,
    CoreModule,
    CdkModule,
    AddOnModule,
    ReactiveFormsModule,
    FormsModule,
    ReactiveFormsModule,
    TuiComboBoxModule,
    TuiDataListModule,
    TuiDataListWrapperModule,
    HttpClientModule,

    //components
    FirstNavbarComponent,
    NavbarUserManagementComponent,
    SidebarComponent,
    SecondNavbarComponent,

    LoadingComponent,

    //Angular Material
    MatProgressSpinnerModule,
    MatProgressBarModule,

  ],
  providers: [
    tuiSvgOptionsProvider({
      path: 'https://taiga-ui.dev/assets/taiga-ui/icons',
    }),
    {
      provide: TUI_SANITIZER,
      useClass: NgDompurifySanitizer,
    },
  ],
})
export class SharedModule {}
