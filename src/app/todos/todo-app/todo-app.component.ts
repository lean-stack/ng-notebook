import { Component, OnInit } from '@angular/core';
import { TodoService } from "../todo/todo.service";
import { Observable } from "rxjs/Observable";
import { Todo } from "../todo/todo.model";

@Component({
  selector: 'todo-app',
  templateUrl: './todo-app.component.html',
  styleUrls: ['./todo-app.component.scss']
})
export class TodoAppComponent implements OnInit {

  public todos: Observable<Todo[]>;

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todos = this.todoService.todos;
  }

  createTodo(txt: string) {
    const todo = new Todo(-1, txt, false);
    this.todoService.add(todo);
  }
}
