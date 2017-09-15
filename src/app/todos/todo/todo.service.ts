import { Injectable } from '@angular/core';

import { Todo } from './todo.model';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import 'rxjs/Rx';

interface ITodoOperation extends Function {
  (todos: Todo[]): Todo[]
}

@Injectable()
export class TodoService {

  todos: Observable<Todo[]>;

  private ops = new Subject<ITodoOperation>();

  constructor() { 

    this.todos = this.ops
      .scan( (todos, op) => { return op(todos); } , [] )
      .publishReplay(1)
      .refCount();

    // and starting the engines
    this.ops.next( todos => todos);
    
  }

}
