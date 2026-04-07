import { createContext, useContext, useEffect, useState } from 'react';

const LanguageContext = createContext(null);
const STORAGE_KEY = 'hl-language';

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => localStorage.getItem(STORAGE_KEY) || 'ko');

  useEffect(() => {
    document.documentElement.lang = language;
    localStorage.setItem(STORAGE_KEY, language);
  }, [language]);

  const t = (value) => {
    if (typeof value === 'string') return value;
    return value?.[language] ?? value?.ko ?? value?.en ?? '';
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
