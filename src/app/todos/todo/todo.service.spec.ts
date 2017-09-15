import { TestBed, inject, async } from '@angular/core/testing';

import { TodoService } from './todo.service';

describe('TodoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodoService]
    });
  });

  it('should be created', inject([TodoService], (service: TodoService) => {
    expect(service).toBeTruthy();
  }));

  it('should have initially zero todos', async(
    inject([TodoService], (service: TodoService) => {
      service.todos.subscribe( todos => {
        expect(todos.length).toBe(0);
      });
    }))
  );
  
});
