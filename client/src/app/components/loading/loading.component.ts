import { Component, Inject, Input } from '@angular/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { TUI_IS_CYPRESS } from '@taiga-ui/cdk';
import { of, timer, map, startWith, takeWhile } from 'rxjs';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent {
  @Input()
  color = "red";
  @Input()
  mode: ProgressSpinnerMode = 'indeterminate';
}
