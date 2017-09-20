import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListComponent } from './todo-list.component';
import { DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";
import { TodoItemComponent } from "../todo-item/todo-item.component";

describe('TodoListComponent', () => {
  let component: TodoListComponent;
  let fixture: ComponentFixture<TodoListComponent>;
  let listEl: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoListComponent, TodoItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListComponent);
    component = fixture.componentInstance;

    listEl = fixture.debugElement.query(By.css('ul'));

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have zero list items for an empty todos array', () => {
    component.todos = [];
    expect(listEl.children.length).toBe(0);
  });

  it('should have list items for every todo', () => {
    component.todos = [
      { id: 1, txt: 'Component inputs', done: true},
      { id: 2, txt: 'External template tests', done: false}
    ];
    fixture.detectChanges();

    expect(listEl.children.length).toBe(2);
  });
});
