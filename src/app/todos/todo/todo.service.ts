import { Injectable } from '@angular/core';

import { Todo } from './todo.model';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import 'rxjs/Rx';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

interface ITodoOperation extends Function {
  (todos: Todo[]): Todo[]
}

@Injectable()
export class TodoService {

  todos: Observable<Todo[]>;
  todosSource$ = new BehaviorSubject<Todo[]>([]);
  
  constructor() { 
    this.todos = this.todosSource$.asObservable();
  }
}
