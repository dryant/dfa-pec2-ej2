import { createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.model';
import { completeTodo, createTodo } from './todo.actions';

export const initialState: Todo[] = ([] = [new Todo('Terminar practica 2')]);

const _todoReducer = createReducer(
  initialState,
  on(createTodo, (state, { title }) => [...state, new Todo(title)]),
  on(completeTodo, (state, { id }) => {
    return state.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          done: true,
        };
      } else {
        return todo;
      }
    });
  })
);

export function todoReducer(state: any, action: any) {
  return _todoReducer(state, action);
}
