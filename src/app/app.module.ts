import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodosModule } from "./todos/todos.module";
import { LinksModule } from "./links/links.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TodosModule,
    LinksModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
