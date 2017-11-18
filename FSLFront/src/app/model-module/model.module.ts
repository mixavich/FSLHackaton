import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {WordsRepository} from "./words-repository.model";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    WordsRepository
  ]
})
export class ModelModule { }
