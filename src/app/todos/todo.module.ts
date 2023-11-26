import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoListItemComponent } from './todo-list-item/todo-list-item.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TodoAddComponent } from './todo-add/todo-add.component';
import { HttpClientModule } from '@angular/common/http';
import { TodoCompleteComponent } from './todo-complete/todo-complete.component';

@NgModule({
  declarations: [
    TodoListComponent,
    TodoListItemComponent,
    TodoAddComponent,
    TodoCompleteComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  exports: [
    TodoListItemComponent,
    TodoListComponent,
    TodoAddComponent,
    TodoCompleteComponent,
  ],
})
export class TodoModule {}
