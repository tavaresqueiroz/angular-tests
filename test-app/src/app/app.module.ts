import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyTestComponent } from './my-test/my-test.component';
import { MyTest2Component } from './my-test2/my-test2.component'
import { HuezaoModule } from './huezao/huezao.module'

@NgModule({
  declarations: [
    AppComponent,
    MyTestComponent,
    MyTest2Component,
  ],
  imports: [
    BrowserModule,
    HuezaoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
