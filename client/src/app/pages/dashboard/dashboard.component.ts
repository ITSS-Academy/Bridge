import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  TuiContextWithImplicit,
  TuiIdentityMatcher,
  TuiStringHandler,
} from '@taiga-ui/cdk';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent {
  title = 'Dashboard';
  constructor(public route: Router) {}

  navTo(path: any) {
    this.route.navigate([`/${path}`]);
  }
}
