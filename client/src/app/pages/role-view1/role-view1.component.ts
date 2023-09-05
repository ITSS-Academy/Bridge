import { ChangeDetectionStrategy, Component } from '@angular/core';
import { EMPTY_ARRAY, TuiHandler } from '@taiga-ui/cdk';
import { TUI_TREE_CONTENT } from '@taiga-ui/kit';
import { PolymorpheusComponent } from '@tinkoff/ng-polymorpheus';

import {FormControl} from '@angular/forms';
import {TUI_DEFAULT_MATCHER, TuiBooleanHandler, tuiPure} from '@taiga-ui/cdk';

@Component({
  selector: 'tui-tree-example-5',
  templateUrl: './role-view1.component.html',
  styleUrls: ['role-view1.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoleView1Component {
  viewTree = true;

  changeView(view:string){
    if(view == "tree"){
      this.viewTree = true;
    }else{
      this.viewTree = false;
    }
  }

}
