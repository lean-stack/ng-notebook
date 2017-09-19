import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})
export class TodoInputComponent implements OnInit {

  public txt: string;

  constructor() { }

  ngOnInit() {
  }

}
