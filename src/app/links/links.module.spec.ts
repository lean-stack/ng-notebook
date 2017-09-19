import { TestBed, async } from '@angular/core/testing';
import { LinksModule } from "./links.module";
import { LinksAppComponent } from "./links-app/links-app.component";
import { Component } from "@angular/core";

@Component({
    template: `
      <links-app></links-app>`
})
class TestHostComponent {
}
  
describe('LinksModule', () => {

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [LinksModule],
            declarations: [TestHostComponent]
        }).compileComponents();
    })

    it('exports LinksAppComponent', () => {
        expect(TestBed.createComponent(TestHostComponent).componentInstance).toBeTruthy();
    })
});