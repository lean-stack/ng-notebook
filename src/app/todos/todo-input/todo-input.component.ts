import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})
export class TodoInputComponent implements OnInit {

  public txt: string;

  @Output()
  public todoCreated = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  committingTodo() {
    this.todoCreated.emit(this.txt);
    this.txt = '';
  }
}
