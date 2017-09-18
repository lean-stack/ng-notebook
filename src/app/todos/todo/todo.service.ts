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
  private todosSource$ = new BehaviorSubject<Todo[]>([]);
  
  constructor() { 
    this.todos = this.todosSource$.asObservable();
  }

  add(todo: Todo) {
    const current = this.todosSource$.getValue();
    this.todosSource$.next( current.concat(todo) );
  }

  remove(todo: Todo) {
    const current = this.todosSource$.getValue();
    const ix = current.indexOf(todo);
    this.todosSource$.next( current.slice(0, ix).concat(current.slice(ix+1)));
  }
}
