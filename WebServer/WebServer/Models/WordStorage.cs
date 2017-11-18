using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebServer.Models
{
    public class WordStorage
    {
        private List<Word> listOfWords;

        public List<Word> ListOfWords { get => listOfWords; set => listOfWords = value; }

        public WordStorage()
        {
            listOfWords = new List<Word>();
            AddWord(new Word("giraf", "жираф"));
            AddWord(new Word("elefant", "слон"));
            AddWord(new Word("kat", "кошка"));
            AddWord(new Word("hund", "собака"));
            AddWord(new Word("vaskebjørn", "енот"));
            AddWord(new Word("løve", "лев"));
            AddWord(new Word("pindsvin", "ёж"));
            AddWord(new Word("edderkop", "паук"));
            AddWord(new Word("ræv", "лиса"));
            AddWord(new Word("panda", "панда"));
        }

        public List<Word> GetAll()
        {
            return ListOfWords;
        }

        public void AddWord(Word word)
        {
            word.Id = Guid.NewGuid();
            listOfWords.Add(word);
        }

        public Word GetById(Guid id)
        {
            return ListOfWords.First(x => x.Id == id);
        }

        public void UpdateWord(Word word)
        {
            Guid? idOfWord = word.Id;

            Word foundWord = listOfWords.First(x => x.Id == word.Id);

            foundWord.Original = word.Original;
            foundWord.Translate = word.Translate;
        }

        public void DeleteWord(Guid id)
        {
            listOfWords.Remove(listOfWords.First(x => x.Id == id));
        }
    }
}
