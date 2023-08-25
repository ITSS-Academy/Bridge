import { Component, Inject, ChangeDetectionStrategy } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import { TUI_DEFAULT_MATCHER } from '@taiga-ui/cdk';
import {TuiDialogContext, TuiDialogService, TuiDialogSize} from '@taiga-ui/core';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import { Observable, Subject, delay, filter, map, of, startWith, switchMap } from 'rxjs';

class User {
    constructor(
        readonly firstName: string,
        readonly lastName: string,
        readonly avatarUrl: string | null = null,
    ) {}
        
    toString(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}

class Group {
    constructor(
        readonly groupName: string,
    ) {}
 
    toString(): string {
        return `${this.groupName}`;
    }
}

class Role {
    constructor(
        readonly roleName: string,
    ) {}

    toString(): string {
        return `${this.roleName}`
    }
}

const databaseUser: readonly User[] = [
    new User('Dmitriy', 'Demenskiy'),
    new User('Evgeniy', 'Mamaev'),
    new User('Ivan', 'Ishmametiev'),
    new User('Igor', 'Katsuba'),
    new User('Yulia', 'Tsareva'),
];

const databaseGroup: readonly Group[] = [
    new Group('Team Selling'),
    new Group('Marketing Group'),
    new Group('Support Group'),
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
 
    readonly items$: Observable<readonly (User | Group)[] | null> = this.search$.pipe(
        filter(value => value !== null),
        switchMap(search =>
            this.serverRequest(search).pipe(
                startWith<readonly (User | Group)[] | null>(null),
                map(users => [...(users || []), ...databaseGroup])
            )
        ),
        startWith([...databaseUser, ...databaseGroup]),
    );
 
    readonly testValue = new FormControl([databaseUser[0]]);
 
    onSearchChange(searchQuery: string | null): void {
        this.search$.next(searchQuery);
    }
 
    /**
     * Server request emulation
     */
    private serverRequest(searchQuery: string | null): Observable<readonly (User | Group)[]> {
        const result = databaseUser.filter(user =>
            TUI_DEFAULT_MATCHER(user, searchQuery || ''),
        );
 
        return of(result).pipe(delay(Math.random() * 1000 + 500));
    }
}

