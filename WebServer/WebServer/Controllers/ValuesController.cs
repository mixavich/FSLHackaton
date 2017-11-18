using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WebServer.Models;

namespace WebServer.Controllers
{
    [Route("api/[controller]")]
    public class ValuesController : Controller
    {
        private WordStorage storage = Singleton<WordStorage>.UniqueInstance;


        // GET api/values
        [HttpGet]
        public IEnumerable<Word> Get()
        {
            return storage.GetAll();
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public Word Get(Guid id)
        {
            return storage.GetById(id);
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]Word word)
        {
            storage.AddWord(word);
        }

        // PUT api/values
        [HttpPut]
        public void Put([FromBody]Word word)
        {
            storage.UpdateWord(word);
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(Guid id)
        {
            storage.DeleteWord(id);
        }
    }
}
