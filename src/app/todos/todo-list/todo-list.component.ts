import { Component, OnInit, Input } from '@angular/core';
import { Todo } from "../todo/todo.model";

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  @Input()
  public todos: Todo[];

  constructor() { }

  ngOnInit() {
  }

}
