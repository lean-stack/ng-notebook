import { TestBed, async } from '@angular/core/testing';
import { TodosModule } from "./todos/todos.module";
import { AppModule } from "./app.module";
import { LinksModule } from "./links/links.module";

describe('AppModule', () => {

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [AppModule]
        });
    })

    it('imports TodosModule', () => {
        expect(TestBed.get(TodosModule)).toBeDefined();
    })

    it('imports LinksModule', () => {
        expect(TestBed.get(LinksModule)).toBeDefined();
    })
});