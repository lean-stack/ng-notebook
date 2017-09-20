import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoItemComponent } from './todo-item.component';
import { DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { TodoService } from "../todo/todo.service";

describe('TodoItemComponent', () => {
  let component: TodoItemComponent;
  let fixture: ComponentFixture<TodoItemComponent>;
  let compEl: DebugElement;
  let checkboxEl: DebugElement;
  let deleteEl: DebugElement;
  let service: TodoService;

  let doneItem = { id: 17, txt: 'Input binding', done: true };
  let undoneItem = { id: 17, txt: 'Input binding', done: false };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ TodoItemComponent ],
      providers: [TodoService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    service = TestBed.get(TodoService);
    
    fixture = TestBed.createComponent(TodoItemComponent);
    component = fixture.componentInstance;

    compEl = fixture.debugElement.children[0]; // No need to insist on any html
    checkboxEl = fixture.debugElement.query(By.css('input[type=checkbox]'));
    deleteEl = fixture.debugElement.query(By.css('button'));

    component.todo = doneItem;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display todo text', () => {
    expect(compEl.nativeElement.textContent).toContain(doneItem.txt);
  });

  it('should have a checkbox with done state set', async(() => {
    fixture.whenStable().then(() => {
      expect(checkboxEl.nativeElement.checked).toBeTruthy();

      component.todo = undoneItem;
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        expect(checkboxEl.nativeElement.checked).toBeFalsy();
      });
    });
  }));

  it('should set css class completed according to done state', async(() => {
    fixture.whenStable().then(() => {
      expect(compEl.nativeElement.classList).toContain('completed');

      component.todo = undoneItem;
      fixture.detectChanges();
      fixture.whenStable().then(() => {
      expect(compEl.nativeElement.classList).not.toContain('completed');
      });
    });
  }));

  it('should delete todo item', () => {
    spyOn(service, 'remove');

    component.deleteTodo();

    expect(service.remove).toHaveBeenCalled();
    expect(service.remove).toHaveBeenCalledWith(doneItem);
  });

  it('should delete todo item on button click', () => {
    spyOn(service, 'remove');
    
    deleteEl.triggerEventHandler('click', null);
    
    expect(service.remove).toHaveBeenCalled();
    expect(service.remove).toHaveBeenCalledWith(doneItem);
  });

  // See comment on deleteTodo in the component

  // it('should emit deleted event (isolated test)', () => {
  //   const subscription = jasmine.createSpy('subscription');
  //   component.todoDeleted.subscribe(subscription);

  //   component.deleteTodo();
    
  //   expect(subscription).toHaveBeenCalled();
  //   expect(subscription.calls.mostRecent().args[0]).toBe(doneItem);
  // });

  // it('should emit deleted event on delete button click', () => {
  //   const subscription = jasmine.createSpy('subscription');
  //   component.todoDeleted.subscribe(subscription);

  //   deleteEl.triggerEventHandler('click', null);
    
  //   expect(subscription).toHaveBeenCalled();
  //   expect(subscription.calls.mostRecent().args[0]).toBe(doneItem);
  // });
});
