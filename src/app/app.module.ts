import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{ ModuleModule } from './module/module.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UniversityModule } from './university/university.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModuleModule,
    UniversityModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
