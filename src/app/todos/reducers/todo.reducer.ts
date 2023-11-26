import { createReducer, on } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import {
  completeTodo,
  createTodo,
  deleteTodo,
  editTodo,
  getAllTodos,
  getAllTodosError,
  getAllTodosSuccess,
} from '../actions';
import { Todo } from '../models/todo.model';

// export const initialState: Todo[] = ([] = [new Todo('Terminar practica 2')]);

export interface TodoState {
  todos: Todo[];
  loading: boolean;
  loaded: boolean;
  error: any;
}

export const initialState: TodoState = {
  todos: [new Todo('Terminar práctica 2')],
  loading: false,
  loaded: false,
  error: null,
};

const _todoReducer = createReducer(
  initialState,
  // on(createTodo, (state, { title }) => [...state, new Todo(title)]),

  on(createTodo, (state, { title }) => ({
    ...state,
    loading: false,
    loaded: false,
    todos: [...state.todos, new Todo(title)],
  })),

  on(completeTodo, (state, { id }) => ({
    ...state,
    loading: false,
    loaded: false,
    todos: [
      ...state.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            done: true,
          };
        } else {
          return todo;
        }
      }),
    ],
  })),

  on(editTodo, (state, { id, title }) => ({
    ...state,
    loading: false,
    loaded: false,
    todos: [
      ...state.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            title,
          };
        } else {
          return todo;
        }
      }),
    ],
  })),

  on(deleteTodo, (state, { id }) => ({
    ...state,
    loading: false,
    loaded: false,
    todos: [...state.todos.filter((todo) => todo.id !== id)],
  })),

  on(getAllTodos, (state) => ({ ...state, loading: true })),

  on(getAllTodosSuccess, (state, { todos }) => ({
    ...state,
    loading: false,
    loaded: true,
    todos: [...todos],
  })),

  on(getAllTodosError, (state, { payload }) => ({
    ...state,
    loading: false,
    loaded: false,
    error: {
      url: payload.url,
      status: payload.status,
      message: payload.message,
    },
  }))
);
export function todoReducer(state: any, action: any) {
  return _todoReducer(state, action);
}
