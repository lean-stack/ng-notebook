import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { TodoInputComponent } from './todo-input.component';
import { DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";

describe('TodoInputComponent', () => {
  let component: TodoInputComponent;
  let fixture: ComponentFixture<TodoInputComponent>;
  let inputEl: DebugElement;

  const expectedText = 'Output';

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ TodoInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoInputComponent);
    component = fixture.componentInstance;
    inputEl  = fixture.debugElement.query(By.css('input'));

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit created event on committing (isolated test)', () => {
    const subscription = jasmine.createSpy('subscription');
    component.todoCreated.subscribe(subscription);

    component.txt = expectedText;
    component.committingTodo();
    
    expect(subscription).toHaveBeenCalled();
    expect(subscription.calls.mostRecent().args[0]).toBe(expectedText);
  });

  it('should empty text property after committing (isolated test)', () => {

    component.txt = expectedText;
    component.committingTodo();
    
    expect(component.txt).toBe('');
  });

  it('should emit created event on committing (template test)', () => {
    const subscription = jasmine.createSpy('subscription');
    component.todoCreated.subscribe(subscription);

    inputEl.nativeElement.value = expectedText;
    fixture.detectChanges();
    
    const event = new KeyboardEvent("keyup",{
      "key": "Enter"
    });
    inputEl.nativeElement.dispatchEvent(event);
    //inputEl.triggerEventHandler('keyup', { key: 'Enter' });
    fixture.detectChanges();

    expect(subscription).toHaveBeenCalled();
    expect(subscription.calls.mostRecent().args[0]).toBe(expectedText);
  });
});
