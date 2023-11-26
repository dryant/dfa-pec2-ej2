import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import {
  completeAllTodoTasks,
  deleteCompletedTodos,
} from '../actions/todo.actions';

@Component({
  selector: 'app-todo-complete',
  templateUrl: './todo-complete.component.html',
  styleUrls: ['./todo-complete.component.scss'],
})
export class TodoCompleteComponent {
  constructor(private store: Store<AppState>) {}

  completeAllTodoTasks(): void {
    this.store.dispatch(completeAllTodoTasks());
  }
  deleteCompletedTodos(): void {
    this.store.dispatch(deleteCompletedTodos());
  }
}
