import {ChangeDetectionStrategy, Component} from '@angular/core';
import {EMPTY_ARRAY, TuiHandler} from '@taiga-ui/cdk';
import {TUI_TREE_CONTENT} from '@taiga-ui/kit';
import {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';

// TAIGA TREE
// import {FoldersComponent} from './content';

interface TreeNode {
    readonly children?: readonly TreeNode[];
    readonly text: string;
}

@Component({
    selector: 'app-tree-view',
    templateUrl: './tree-view.component.html',
    styleUrls: ["./tree-view.component.scss"],
    // TAIGA TREE
    // providers: [
    //     {
    //         provide: TUI_TREE_CONTENT,
    //         useValue: new PolymorpheusComponent(FoldersComponent),
    //     },
    // ],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TreeViewComponent {



    // TAIGA TREE
    // readonly data: TreeNode = {
    //     text: 'Topmost',
    //     children: [
    //         {
    //             text: 'Top level 1',
    //             children: [
    //                 {
    //                     text: 'Another item',
    //                     children: [
    //                         {text: 'Next level 1'},
    //                         {text: 'Next level 2'},
    //                         {text: 'Next level 3'},
    //                     ],
    //                 },
    //             ],
    //         },
    //         {text: 'Top level 2'},
    //         {
    //             text: 'Top level 3',
    //             children: [{text: 'Test 1'}, {text: 'Test 2'}],
    //         },
    //     ],
    // };

    // readonly handler: TuiHandler<TreeNode, readonly TreeNode[]> = item =>
    //     item.children || EMPTY_ARRAY;
    //
}
