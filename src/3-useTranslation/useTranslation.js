import { useLocalStorage } from "../2-useStorage/useStorage"
import * as translations from "./translations"

export default function useTranslation() {
  const [language, setLanguage] = useLocalStorage("language", "en");

  const translate = key => {
    const keys = key.split(".")

    return (
      getNestedTranslation(language, keys) ?? key)
  }

  return {
    language,
    setLanguage,
    translate,
  }
}

function getNestedTranslation(language, keys) {
  return keys.reduce((obj, key) => {
    return obj?.[key]
  }, translations[language])
}