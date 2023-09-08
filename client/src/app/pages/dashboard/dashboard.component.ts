import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  TuiContextWithImplicit,
  TuiIdentityMatcher,
  TuiStringHandler,
} from '@taiga-ui/cdk';
import { Router } from '@angular/router';

interface style{
  name: string;
  color: string;
}






@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent {

  currentUser: any;
  title = 'Dashboard';
  constructor(public route: Router) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser')!);
  }

  navTo(path: any) {
    this.route.navigate([`/${path}`]);
  }

  priority:style={name:"Urgent",color:"darkRed"}
  progress:style={name:"Near Finish",color:"blueDiv"}
  saleStage:style={name:"Ready To Close",color:"greenDiv"}
  status:style={name:"New",color:"yellowDiv"}

  // CÁC SALE STAGE, STATUS, GROGRESS DIV CÓ 4 MÀU: ĐỎ VÀNG LỤC LAM, TÊN: redDiv yellowDiv blueDiv greenDiv (HỘP CÓ MÀU CHỮ TRẮNG)
  // CÁC PRIORITY CÓ 4 MÀU: ĐÔ ĐỎ VÀNG LAM, TÊN: darkRed red yellow blue (CHỮ CÓ MÀU KO CÓ HỘP)
}
