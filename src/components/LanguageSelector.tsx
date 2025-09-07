import { useTranslation } from "react-i18next";
import "./LanguageSelector.css";

const languages = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "hu", name: "Magyar", flag: "🇭🇺" },
  { code: "es", name: "Español", flag: "🇪🇸" },
];

function LanguageSelector() {
  const { i18n } = useTranslation();

  const changeLanguage = (languageCode: string) => {
    i18n.changeLanguage(languageCode);
  };

  return (
    <div className="language-selector">
      <select
        value={i18n.language}
        onChange={(e) => {
          changeLanguage(e.target.value);
          (e.target as HTMLSelectElement).blur();
        }}
        className="language-selector__dropdown"
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.flag} {lang.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default LanguageSelector;
