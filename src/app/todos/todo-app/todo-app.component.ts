import { Component, OnInit } from '@angular/core';
import { TodoService } from "../todo/todo.service";

@Component({
  selector: 'todo-app',
  templateUrl: './todo-app.component.html',
  styleUrls: ['./todo-app.component.css']
})
export class TodoAppComponent implements OnInit {

  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

}
