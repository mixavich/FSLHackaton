import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {DictionaryModule} from "./dictionary/dictionary.module";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DictionaryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
