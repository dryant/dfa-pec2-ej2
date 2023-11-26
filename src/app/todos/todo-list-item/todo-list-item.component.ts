import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../models/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { completeTodo } from '../todo.actions';
import { AppState } from 'src/app/app.reducer';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.scss'],
})
export class TodoListItemComponent implements OnInit {
  @Input() todo!: Todo;

  public titleInput!: FormControl;
  public isEditing!: boolean;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.isEditing = false;
    this.titleInput = new FormControl(this.todo.title, Validators.required);
  }

  completeTask(): void {
    this.store.dispatch(completeTodo({ id: this.todo.id }));
  }

  editTask(): void {
    this.isEditing = true;
  }

  deleteTask(): void {}

  submitTask() {
    this.isEditing = false;
  }
}
