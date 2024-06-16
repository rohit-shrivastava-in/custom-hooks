import useTranslation from "./useTranslation"

export default function TranslationComponent() {
  const { language, setLanguage, translate } = useTranslation()

  return (
    <>
      <div>{language}</div>
      <div>{translate("hi")}</div>
      <div>{translate("bye")}</div>
      <div>{translate("nested.value")}</div>
      <button onClick={() => setLanguage("en")}>Change To English</button>
      <button onClick={() => setLanguage("fr")}>Change To French</button>
    </>
  )
}