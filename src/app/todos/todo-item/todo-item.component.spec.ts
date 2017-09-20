import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoItemComponent } from './todo-item.component';
import { DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";

describe('TodoItemComponent', () => {
  let component: TodoItemComponent;
  let fixture: ComponentFixture<TodoItemComponent>;
  let compEl: DebugElement;

  let doneItem = { id: 17, txt: 'Input binding', done: true };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoItemComponent);
    component = fixture.componentInstance;
    compEl = fixture.debugElement; // No need to insist on any html
    
    component.todo = doneItem;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display todo text', () => {
    expect(compEl.nativeElement.textContent).toContain(doneItem.txt);
  });
});
