import { createAction, props } from '@ngrx/store';

export const TaskAction = {
  addTask: createAction('[Task] Add Task', props<{ task: any }>()),
  addTaskSuccess: createAction(
    '[Task] Add Task Success',
    props<{ task: any }>()
  ),
  addTaskFailure: createAction(
    '[Task] Add Task Failure',
    props<{ error: any }>()
  ),

  getTasks: createAction('[Task] Get Tasks'),
  getTasksSuccess: createAction(
    '[Task] Get Tasks Success',
    props<{ tasks: any[] }>()
  ),
  getTasksFailure: createAction(
    '[Task] Get Tasks Failure',
    props<{ error: any }>()
  ),

  updateTask: createAction('[] Update task', props<{ task: any }>()),
  updateTaskSuccess: createAction('[Task] Update Task Success'),
  updateTaskFailure: createAction(
    '[Task] Update Task Failure',
    props<{ error: any }>()
  ),

  deleteTask: createAction('[Task] Delete Task', props<{ id: string }>()),
  deleteTaskSuccess: createAction('[Task] Delete Task Success'),
  deleteTaskFailure: createAction(
    '[Task] Delete Task Failure',
    props<{ error: any }>()
  ),

  getTask: createAction('[Task] Get Task', props<{ id: string }>()),
  getTaskSuccess: createAction(
    '[Task] Get Task Success',
    props<{ task: any }>()
  ),
  getTaskFailure: createAction(
    '[Task] Get Task Failure',
    props<{ error: any }>()
  ),
};
