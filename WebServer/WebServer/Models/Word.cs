using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebServer.Models
{
    public class Word
    {
        private string original;
        private string translate;
        private Guid? id;

        public Guid? Id { get => id; set => id = value; }
        public string Original { get => original; set => original = value; }
        public string Translate { get => translate; set => translate = value; }
        
        public Word(string or, string tr)
        {
            original = or;
            translate = tr;
        }
    }
}
