import { Component, OnInit, Input } from '@angular/core';
import { Todo } from "../todo/todo.model";

@Component({
  selector: 'todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input()
  public todo: Todo;

  constructor() { }

  ngOnInit() {
  }

}
