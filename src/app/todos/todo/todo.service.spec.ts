import { TodoService } from './todo.service';
import { Todo } from './todo.model';

describe('TodoService', () => {
  let service: TodoService;

  beforeEach(() => {
    service = new TodoService();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have initially zero todos', (done) => {
    service.todos.subscribe( todos => {
      expect(todos.length).toBe(0);
      done();
    });
  });
  
  it('should cache this inital zero todos', () => {
    const subscription = jasmine.createSpy('subscription');

    service.todos.subscribe( subscription );
    service.todos.subscribe( subscription );

    expect(subscription.calls.count()).toEqual(2);
    expect(subscription.calls.first().args[0].length).toBe(0);  
    expect(subscription.calls.mostRecent().args[0].length).toBe(0);  
  });

  it('can add a new todo', (done) => {
    const subscription = jasmine.createSpy('subscription');
    
    service.todos.subscribe( subscription );
    const todo = new Todo(17, 'Data flow', false);
    service.add(todo);

    expect(subscription).toHaveBeenCalled();
    expect(subscription.calls.count()).toEqual(2);
    expect(subscription.calls.first().args[0].length).toBe(0);  
    expect(subscription.calls.mostRecent().args[0].length).toBe(1);  
    done();
  });

  it('caches its last value after adding two todos', (done) => {
    const subscription = jasmine.createSpy('subscription');
    
    service.todos.subscribe( subscription );
    const todo = new Todo(17, 'Data flow', false);
    service.add(todo);
    service.todos.subscribe( subscription );

    expect(subscription).toHaveBeenCalled();
    expect(subscription.calls.count()).toEqual(3);
    expect(subscription.calls.first().args[0].length).toBe(0);  
    expect(subscription.calls.mostRecent().args[0].length).toBe(1);  
    done();
  });

  it('can remove todo', (done) => {
    const subscription = jasmine.createSpy('subscription');
    
    service.todos.subscribe( subscription );
    const todo = new Todo(17, 'Data flow', false);
    service.add(todo);
    service.remove(todo);

    expect(subscription).toHaveBeenCalled();
    expect(subscription.calls.count()).toEqual(3);
    expect(subscription.calls.first().args[0].length).toBe(0);  
    expect(subscription.calls.mostRecent().args[0].length).toBe(0);  
    done();
  });
});
