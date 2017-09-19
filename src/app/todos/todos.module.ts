import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoAppComponent } from './todo-app/todo-app.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TodoAppComponent],
  exports: [TodoAppComponent]
})
export class TodosModule { }
