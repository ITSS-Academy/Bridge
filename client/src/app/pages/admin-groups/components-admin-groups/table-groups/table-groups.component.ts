import { Component, Inject } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import { TUI_DEFAULT_MATCHER } from '@taiga-ui/cdk';
import {TuiDialogContext, TuiDialogService, TuiDialogSize} from '@taiga-ui/core';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import { Observable, Subject, delay, filter, map, of, startWith, switchMap } from 'rxjs';

class User {
    constructor(
        readonly firstName: string,
        readonly lastName: string,
        readonly type: string,
    ) {}
        
    toString(): string {
        return `${this.firstName} ${this.lastName} ${this.type}(U)`;
    }
}

class Group {
    constructor(
        readonly groupName: string,
        readonly type: string,
    ) {}
 
    toString(): string {
        return `${this.groupName} ${this.type}(G)`;
    }
}

class Role {
    constructor(
        readonly roleName: string,
        readonly type: string,
    ) {}

    toString(): string {
        return `${this.roleName} ${this.type}(R)`
    }
}

class roleSub {
    constructor(
        readonly roleSubName: string,
        readonly type: string,
    ) {}

    toString(): string {
        return `${this.roleSubName} ${this.type}(R&S)`
    }
}

const databaseUser: readonly User[] = [
    new User('Tri', 'Nguyen',''),
    new User('Khoa', 'Bui',''),
    new User('Quan', 'Tran',''),
    new User('Viet', 'Khoa',''),
    new User('Duong', 'Le',''),
];

const databaseGroup: readonly Group[] = [
    new Group('Team Selling',''),
    new Group('Marketing Group',''),
    new Group('Support Group',''),
]

const databaseRole: readonly Role[] = [
    new Role('CEO',''),
    new Role('VP of Sales',''),
    new Role('Marketing Manager',''),
    new Role('Sales Manager',''),
    new Role('Sales Representative',''),
    new Role('VP of Customer Services',''),
    new Role('Support Manager',''),
    new Role('Support Representative',''),
    new Role('IT Consultant',''),
]


const databaseRoleSub: readonly roleSub[] = [
    new roleSub('CEO',''),
    new roleSub('VP of Sales',''),
    new roleSub('Marketing Manager',''),
    new roleSub('Sales Manager',''),
    new roleSub('Sales Representative',''),
    new roleSub('VP of Customer Services',''),
    new roleSub('Support Manager',''),
    new roleSub('Support Representative',''),
    new roleSub('IT Consultant',''),
]


@Component({
  selector: 'app-table-groups',
  templateUrl: './table-groups.component.html',
  styleUrls: ['./table-groups.component.scss'],
})
export class TableGroupsComponent {
  constructor(@Inject(TuiDialogService) private readonly dialogs: TuiDialogService) {}
  exampleForm = new FormGroup({
    groupName: new FormControl(''),
    groupEmail: new FormControl(''),
    description: new FormControl(''),
});

    onClick(
        content: PolymorpheusContent<TuiDialogContext>,
        size: TuiDialogSize,
    ): void {
        this.dialogs
            .open(content, {
                // label: 'What a cool library set',
                size,
            })
            .subscribe();
    }

    readonly search$ = new Subject<string | null>();
 
    readonly items$: Observable<readonly (User | Group | Role | roleSub)[] | null> = this.search$.pipe(
        filter(value => value !== null),
        switchMap(search =>
            this.serverRequest(search).pipe(
                startWith<readonly (User | Group | Role | roleSub)[] | null>(null),
                map(users => [...(users || []), ...databaseGroup, ...databaseRole, ...databaseRoleSub])
            )
        ),
        startWith([...databaseUser, ...databaseGroup, ...databaseRole, ...databaseRoleSub]),
    );
 
    readonly testValue = new FormControl([databaseUser[0]]);
 
    onSearchChange(searchQuery: string | null): void {
        this.search$.next(searchQuery);
    }
 
    /**
     * Server request emulation
     */
    private serverRequest(searchQuery: string | null): Observable<readonly (User | Group | Role | roleSub)[]> {
        const result = databaseUser.filter(user =>
            TUI_DEFAULT_MATCHER(user, searchQuery || ''),
        );
 
        return of(result).pipe(delay(Math.random() * 1000 + 500));
    }
}

