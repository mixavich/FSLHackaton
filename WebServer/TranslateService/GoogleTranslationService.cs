using Google.Cloud.Translation.V2;
using System;
using System.Collections.Generic;
using System.Text;

namespace TranslateService
{
    public static class GoogleTranslationService
    {
        public static string GetTranslation(string OriginalWord, string TranslationLanguage)
        {
            Console.OutputEncoding = System.Text.Encoding.Unicode;

            TranslationClient client = TranslationClient.Create();

            var TranslatedWord = client.TranslateText(OriginalWord, TranslationLanguage);

            return TranslatedWord.TranslatedText;
        }

        public static void Main()
        {

        }
    }
}
