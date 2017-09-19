import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoAppComponent } from './todo-app/todo-app.component';
import { TodoService } from "./todo/todo.service";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TodoAppComponent],
  exports: [TodoAppComponent],
  providers: [TodoService]
})
export class TodosModule { }
