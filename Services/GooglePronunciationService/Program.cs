using System.Net;

namespace GooglePronunciationService
{
    public static class GooglePronunciationService
    {
        public static string UrlPartOne = "https://translate.google.com.vn/translate_tts?ie=UTF-8&q=";
        public static string UrlPartTwo = "&client=tw-ob";

        public static string GetPronunciation(string PronunciationWord, string PronunciationLanguage)
        {
            WebClient PronunciationWebClient = new WebClient();

            return null;
        }
    }
}
