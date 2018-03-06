import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TestModuleModule } from './test-module/test-module.module';
import { SampleComponent } from './test-module/sample/sample.component';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, TestModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
