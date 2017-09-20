import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsModule } from '@angular/forms';

import { TodoAppComponent } from './todo-app.component';
import { TodosModule } from "../todos.module";
import { TodoService } from "../todo/todo.service";
import { TodoInputComponent } from "../todo-input/todo-input.component";
import { TodoListComponent } from "../todo-list/todo-list.component";
import { By } from "@angular/platform-browser";
import { TodoItemComponent } from "../todo-item/todo-item.component";

describe('TodoAppComponent', () => {
  let component: TodoAppComponent;
  let inputComponent: TodoInputComponent
  let fixture: ComponentFixture<TodoAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ TodoAppComponent, TodoInputComponent, TodoListComponent, TodoItemComponent ],
      providers: [TodoService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoAppComponent);
    component = fixture.componentInstance;
    inputComponent = fixture.debugElement.query(By.directive(TodoInputComponent)).componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should expose an observable of todos', () => {
    expect(component.todos).toBeDefined();
  });

  it('should handle the element created event', () => {

    spyOn(component, 'createTodo');
        
    inputComponent.todoCreated.emit('Event triggered');
    
    expect(component.createTodo).toHaveBeenCalled();
    expect(component.createTodo).toHaveBeenCalledWith('Event triggered');    
  });
});
