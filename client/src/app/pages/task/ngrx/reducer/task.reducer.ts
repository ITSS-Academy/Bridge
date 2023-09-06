import { createReducer, on } from '@ngrx/store';
import { TaskState } from '../state/task.state';
import { TaskAction } from '../action/task.action';

const initialState: TaskState = {
  task: null,
  tasks: [],
  loading: false,
  status: null,
  error: '',
};

export const taskReducer = createReducer(
  initialState,
  // Add Lead
  on(TaskAction.addTask, (state, action) => {
    return {
      ...state,
      task: action.task,
      loading: true,
      status: 'Adding lead...',
      error: '',
    };
  }),
  on(TaskAction.addTaskSuccess, (state, action) => {
    return {
      ...state,
      loading: false,
      lead: action.task,
      status: 'Add lead success',
      error: '',
    };
  }),
  on(TaskAction.addTaskFailure, (state, action) => {
    return {
      ...state,
      loading: false,
      status: 'Add lead failure',
      error: action.error,
    };
  }),

  // Get Leads
  on(TaskAction.getTasks, (state) => {
    return {
      ...state,
      loading: true,
      status: 'Getting leads...',
      error: '',
    };
  }),
  on(TaskAction.getTasksSuccess, (state, action) => {
    return {
      ...state,
      tasks: action.tasks,
      loading: false,
      status: 'Get leads success',
      error: '',
    };
  }),
  on(TaskAction.getTasksFailure, (state, action) => {
    return {
      ...state,
      loading: false,
      status: 'Get leads failure',
      error: action.error,
    };
  }),

  // Update Lead
  on(TaskAction.updateTask, (state, action) => {
    return {
      ...state,
      task: action.task,
      loading: true,
      status: 'Updating lead...',
      error: '',
    };
  }),
  on(TaskAction.updateTaskSuccess, (state) => {
    return {
      ...state,
      loading: false,
      status: 'Update lead success',
      error: '',
    };
  }),
  on(TaskAction.updateTaskFailure, (state, action) => {
    return {
      ...state,
      loading: false,
      status: 'Update lead failure',
      error: action.error,
    };
  }),

  // Delete Lead
  on(TaskAction.deleteTask, (state, action) => {
    return {
      ...state,
      loading: true,
      status: 'Deleting lead...',
      error: '',
    };
  }),
  on(TaskAction.deleteTaskSuccess, (state) => {
    return {
      ...state,
      loading: false,
      status: 'Delete lead success',
      error: '',
    };
  }),
  on(TaskAction.deleteTaskFailure, (state, action) => {
    return {
      ...state,
      loading: false,
      status: 'Delete lead failure',
      error: action.error,
    };
  }),

  // Get Lead
  on(TaskAction.getTask, (state, action) => {
    return {
      ...state,
      loading: true,
      status: 'Getting lead...',
      error: '',
    };
  }),
  on(TaskAction.getTaskSuccess, (state, action) => {
    return {
      ...state,
      task: action.task,
      loading: false,
      status: 'Get lead success',
      error: '',
    };
  }),
  on(TaskAction.getTaskFailure, (state, action) => {
    return {
      ...state,
      loading: false,
      status: 'Get lead failure',
      error: action.error,
    };
  })
);
