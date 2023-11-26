import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { createTodo } from '../todo.actions';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss'],
})
export class TodoAddComponent implements OnInit {
  public titleInput: FormControl;

  constructor(private store: Store<AppState>) {
    this.titleInput = new FormControl('', Validators.required);
  }

  ngOnInit(): void {}

  addTodoTask() {
    if (this.titleInput.valid) {
      this.store.dispatch(createTodo({ title: this.titleInput.value }));
      this.titleInput.reset();
    }
  }
}
