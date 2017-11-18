import {Injectable} from '@angular/core';
import {Word} from './word.model';

@Injectable()
export class WordsRepository {
  private words: Word[] = [new Word(1, 'Оригинал', 'Original'),
    new Word(2, 'Cобака', 'Dog'),
    new Word(3, 'Fultepoductor', 'Фултеподюктор'),
    new Word(4, 'Ежевика ?', 'Cranberries'),
    new Word(5, 'Паридигма', 'Paradigm')];

  getWords(): Word[] {
    return this.words;
  }

  addWord(original: string, translation: string) {
    //capitalize first letter
    let word = new Word(1, original,translation);
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


