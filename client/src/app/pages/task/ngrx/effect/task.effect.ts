import { Actions, createEffect, ofType } from "@ngrx/effects";
import { TaskAction } from "../action/task.action";
import { Injectable } from "@angular/core";
import { switchMap, map, catchError, of } from "rxjs";
import { TaskService } from "../../task.service";

@Injectable()
export class TaskEffect {
    constructor(private action$: Actions, private taskService: TaskService){}


    addTask$ = createEffect(() => 
        this.action$.pipe(
            ofType(TaskAction.addTask),
            switchMap((task: any) => this.taskService.addTask(task.task)),
            map((task:any ) => {
                return TaskAction.addTaskSuccess({task: task});
            }),
            catchError((error) => {
                return of(TaskAction.addTaskFailure({ error: error }));
            })
        ));

    deleteTask$ = createEffect(() =>
        this.action$.pipe(
            ofType(TaskAction.deleteTask),
            switchMap((id: any) => this.taskService.deleteTask(id.id)),
            map(( ) => {
                return TaskAction.deleteTaskSuccess();
            }),
            catchError((error) => {
                return of(TaskAction.deleteTaskFailure({ error: error }));
            })
        )
    )

    getAllTask$ = createEffect(() =>
        this.action$.pipe(
            ofType(TaskAction.getTasks),
            switchMap(() => this.taskService.getAllTasksNgRx()),
            map((tasks: any) => {
                return TaskAction.getTasksSuccess({ tasks: tasks });
            }),
            catchError((error) => {
                return of(TaskAction.getTasksFailure({ error: error }));
            })
        ))


    updateTask$ = createEffect(() => 
        this.action$.pipe(
            ofType(TaskAction.updateTask),
            switchMap((task: any) => this.taskService.updateTask(task.task)),
            map((task:any ) => {
                return TaskAction.updateTaskSuccess();
            }),
            catchError((error) => {
                return of(TaskAction.updateTaskFailure({ error: error }));
            })
        ));
    

}