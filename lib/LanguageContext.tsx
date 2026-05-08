'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { translations, Lang } from './translations';

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: typeof translations['en'];
  langSelected: boolean;
  setLangSelected: (v: boolean) => void;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('en');
  const [langSelected, setLangSelectedState] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem('ap-lang') as Lang | null;
    const selected = localStorage.getItem('ap-lang-selected');
    if (stored) setLangState(stored);
    if (selected !== 'true') setLangSelectedState(false);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem('ap-lang', l);
  };

  const setLangSelected = (v: boolean) => {
    setLangSelectedState(v);
    localStorage.setItem('ap-lang-selected', String(v));
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang], langSelected, setLangSelected }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLang must be used within LanguageProvider');
  return ctx;
}
