import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DictionaryComponent } from './dictionary/dictionary.component';
import { WordFormComponent } from './word-form/word-form.component';
import { WordTableComponent } from './word-table/word-table.component';
import {ModelModule} from "../model-module/model.module";

@NgModule({
  imports: [
    CommonModule,
    ModelModule
  ],
  declarations: [DictionaryComponent, WordFormComponent, WordTableComponent],
  exports: [DictionaryComponent]
})
export class DictionaryModule {}
