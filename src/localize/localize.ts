import en from './en.json';
import ru from './ru.json';

const languages: { [key: string]: typeof en } = {
  en,
  ru,
};

export function localize(
  key: string,
  language: string = 'en'
): string {
  const lang = languages[language] || languages['en'];
  const keys = key.split('.');

  let result: unknown = lang;
  for (const k of keys) {
    if (result && typeof result === 'object' && k in result) {
      result = (result as Record<string, unknown>)[k];
    } else {
      // Fallback to English
      result = languages['en'];
      for (const fallbackKey of keys) {
        if (result && typeof result === 'object' && fallbackKey in result) {
          result = (result as Record<string, unknown>)[fallbackKey];
        } else {
          return key; // Return key if not found
        }
      }
      break;
    }
  }

  return typeof result === 'string' ? result : key;
}

export function getLanguage(hass?: { language?: string }): string {
  if (hass?.language) {
    // Map HA language codes to our supported languages
    const langCode = hass.language.split('-')[0].toLowerCase();
    if (langCode in languages) {
      return langCode;
    }
  }
  return 'en';
}
