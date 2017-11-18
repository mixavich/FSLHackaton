using Google.Cloud.Translation.V2;
using System;


namespace GoogleTranslationService
{    public static class GoogleTranslationService
    {
        public static string GetTranslation(string OriginalWord, string TranslationLanguage)
        {
            Console.OutputEncoding = System.Text.Encoding.Unicode;

            TranslationClient client = TranslationClient.Create();

            var TranslatedWord = client.TranslateText(OriginalWord, TranslationLanguage);

            return TranslatedWord.TranslatedText;
        }
    }
}
