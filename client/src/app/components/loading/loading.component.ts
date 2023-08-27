import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  Input,
} from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { of, timer, map, startWith, takeWhile } from 'rxjs';
import { TUI_IS_CYPRESS } from '@taiga-ui/cdk';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoadingComponent {
  constructor(@Inject(TUI_IS_CYPRESS) private readonly isCypress: boolean) {}

  @Input()
  loading!: boolean;
  @Input()
  mode: ProgressSpinnerMode = 'indeterminate';
  readonly max = 100;
  readonly value$ = this.isCypress
    ? of(30)
    : timer(300, 200).pipe(
        map((i) => i + 30),
        startWith(30),
        // takeWhile(30),
      );
}
