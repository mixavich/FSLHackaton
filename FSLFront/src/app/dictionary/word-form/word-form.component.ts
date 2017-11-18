import {Component, Input, OnInit} from '@angular/core';
import {WordsRepository} from "../../model-module/words-repository.model";

@Component({
  selector: 'app-word-form',
  templateUrl: './word-form.component.html',
  styleUrls: ['./word-form.component.css']
})
export class WordFormComponent implements OnInit {


  constructor(private wordsRepository: WordsRepository) {
  }

  addWord(original, translation) {
    console.log("adding word to base", original, translation);

    this.wordsRepository.addWord(original, translation);
  }

  ngOnInit() {
  }

}
