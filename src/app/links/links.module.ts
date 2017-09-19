import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinksAppComponent } from './links-app/links-app.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LinksAppComponent],
  exports: [LinksAppComponent]
})
export class LinksModule { }
