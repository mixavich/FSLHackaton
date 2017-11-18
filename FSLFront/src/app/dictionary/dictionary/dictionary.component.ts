import { Component, OnInit } from '@angular/core';
import {WordsRepository} from "../../model-module/words-repository.model";

@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.css']
})
export class DictionaryComponent implements OnInit {

  words = this.wordsRepository.getWords();

  constructor(private wordsRepository: WordsRepository) {
  }
  ngOnInit() {
  }

}
