using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace WebServer.Controllers
{
    [Produces("application/json")]
    [Route("api/Translate")]
    public class TranslateController : Controller
    {
        // GET api/values/5
        [HttpGet("{word}")]
        public string Get(string word)
        {
            return TranslateService.GoogleTranslationService.GetTranslation(word, "ru");
        }
    }
}