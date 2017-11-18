import {Injectable} from '@angular/core';
import {Word} from './word.model';

@Injectable()
export class WordsRepository {
  private words: Word[] = [new Word(1, 'Оригинал', 'Original'),
    new Word(2, 'Оригинал', 'Original'),
    new Word(3, 'Оригинал', 'Original'),
    new Word(4, 'Оригинал', 'Original'),
    new Word(5, 'Оригинал', 'Original')];

  getWords(): Word[] {
    return this.words;
  }

  addWord(word: Word) {
    this.words.push(word);
  }

  updateWord(word: Word) {
    const wordId = word.id;
    const foundWordIndex = this.words.findIndex(x => x.id === wordId);
    if (foundWordIndex === -1) {
      console.log('unexpected behaviour found, word not updated');
    } else {
      this.words[foundWordIndex] = word;
    }
  }

  removeWord(word: Word) {
    const wordId = word.id;
    const foundWordIndex = this.words.findIndex(x => x.id === wordId);
    if (foundWordIndex === -1) {
      console.log('unexpected behaviour found, word not found');
    } else {
      this.words = this.words.splice(foundWordIndex, 1)
    }
  }

}


