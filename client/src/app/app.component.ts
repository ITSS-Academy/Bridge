import { NgDompurifySanitizer } from "@tinkoff/ng-dompurify";
import { TuiRootModule, TuiDialogModule, TuiAlertModule, TUI_SANITIZER } from "@taiga-ui/core";
import { HttpClient } from '@angular/common/http';
import { Component, ViewEncapsulation } from '@angular/core';
import { tuiSum } from '@taiga-ui/cdk';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  
  styleUrls: ['./app.component.scss'],
        // imports: [TuiRootModule, TuiDialogModule, TuiAlertModule],
        providers: [{provide: TUI_SANITIZER, useClass: NgDompurifySanitizer}]
    })
export class AppComponent {
  title = 'client';
  constructor(private http: HttpClient){
  }

}