import { TestBed, async } from '@angular/core/testing';
import { TodosModule } from "./todos.module";
import { TodoAppComponent } from "./todo-app/todo-app.component";
import { Component } from "@angular/core";
import { TodoService } from "./todo/todo.service";
import { FormsModule } from "@angular/forms";

@Component({
    template: `
      <todo-app></todo-app>`
})
class TestHostComponent {
}

describe('TodosModule', () => {

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [TodosModule],
            declarations: [TestHostComponent]
        }).compileComponents();
    });

    it('exports TodoAppComponent', () => {
        expect(TestBed.createComponent(TestHostComponent).componentInstance).toBeTruthy();
    });

    it('provides TodoService', () => {
        expect(TestBed.get(TodoService)).toBeTruthy();
    });

    it('imports FormsModule', () => {
        expect(TestBed.get(FormsModule)).toBeTruthy();
    });
});