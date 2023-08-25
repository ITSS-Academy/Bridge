import { ChangeDetectionStrategy, Component } from '@angular/core';
import { EMPTY_ARRAY, TuiHandler } from '@taiga-ui/cdk';
import { TUI_TREE_CONTENT } from '@taiga-ui/kit';
import { PolymorpheusComponent } from '@tinkoff/ng-polymorpheus';

import {FormControl} from '@angular/forms';
import {TUI_DEFAULT_MATCHER, TuiBooleanHandler, tuiPure} from '@taiga-ui/cdk';

interface TreeNode {
  readonly text: string;
  readonly children?: readonly TreeNode[];
}

const ITEMS: readonly string[] = [
  'Luke Skywalker',
  'Leia Organa Solo',
  'Darth Vader',
  'Han Solo',
  'Obi-Wan Kenobi',
  'Yoda',
];

@Component({
  selector: 'tui-tree-example-5',
  templateUrl: './role-view1.component.html',
  styleUrls: ['role-view1.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoleView1Component {
  
  readonly data: TreeNode = {
    text: 'Viet',
    children: [
      {
        text: 'CEO',
        children: [
          {
            text: 'VP of Sales',
            children: [
              { text: 'Marketing Manager' },
              { text: 'Sales Manager',
            children:[
              {text: 'Sales Representative'}
            ] },
            ],
          },
          {
            text: 'VP of Customer Services',
            children: [
              { text: 'Support Manager',
                children:[
                {text: 'Support Representative'}
            ] },
            ],
          },{
            text: 'IT Consultant',
          }
        ],
      },
    ],
  };

  readonly handler: TuiHandler<TreeNode, readonly TreeNode[]> = (item) =>
    item.children || EMPTY_ARRAY;

    search: string | null = '';
 
    readonly control = new FormControl([ITEMS[0]]);
 
    @tuiPure
    filter(search: string | null): readonly string[] {
        return ITEMS.filter(item => TUI_DEFAULT_MATCHER(item, search || ''));
    }
 
    // tagValidator: TuiBooleanHandler<string> = tag => !tag.startsWith('Han');
}
