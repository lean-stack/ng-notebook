import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoAppComponent } from './todo-app/todo-app.component';
import { TodoService } from "./todo/todo.service";
import { TodoInputComponent } from './todo-input/todo-input.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { FormsModule } from "@angular/forms";
import { TodoItemComponent } from './todo-item/todo-item.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [TodoAppComponent, TodoInputComponent, TodoListComponent, TodoItemComponent],
  exports: [TodoAppComponent],
  providers: [TodoService]
})
export class TodosModule { }
