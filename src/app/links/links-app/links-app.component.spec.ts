import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinksAppComponent } from './links-app.component';

describe('LinksAppComponent', () => {
  let component: LinksAppComponent;
  let fixture: ComponentFixture<LinksAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinksAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinksAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
