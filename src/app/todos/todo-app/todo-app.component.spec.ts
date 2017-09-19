import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoAppComponent } from './todo-app.component';
import { TodosModule } from "../todos.module";
import { TodoService } from "../todo/todo.service";
import { TodoInputComponent } from "../todo-input/todo-input.component";
import { TodoListComponent } from "../todo-list/todo-list.component";

describe('TodoAppComponent', () => {
  let component: TodoAppComponent;
  let fixture: ComponentFixture<TodoAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoAppComponent, TodoInputComponent, TodoListComponent ],
      providers: [TodoService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
