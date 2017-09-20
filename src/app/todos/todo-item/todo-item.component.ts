import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Todo } from "../todo/todo.model";
import { TodoService } from "../todo/todo.service";

@Component({
  selector: 'todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input()
  public todo: Todo;

  // see below
  // @Output()
  // public todoDeleted = new EventEmitter<Todo>();

  constructor(private service: TodoService) { }

  ngOnInit() {
  }
  
  deleteTodo() {
    // Possibility to dispatch an event - but either that event needs to bubble up
    // to the todo-app or we need to inject the service in todo-list. So we can do here.
    // this.todoDeleted.emit(this.todo);

    this.service.remove(this.todo);
  }
}
