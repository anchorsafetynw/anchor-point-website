'use client';

import { useLang } from '@/lib/LanguageContext';

export default function LanguageGate() {
  const { t, setLang, setLangSelected, langSelected } = useLang();

  if (langSelected) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-950">
      <div className="text-center px-8 max-w-md">
        <div className="mb-8">
          <div className="text-[#C2410C] font-bold text-2xl tracking-wide mb-1">ANCHOR POINT</div>
          <div className="text-white text-sm tracking-widest uppercase">Safety Training</div>
        </div>
        <h1 className="text-white text-3xl font-bold mb-2">{t.langSelect.heading}</h1>
        <p className="text-gray-400 mb-10">{t.langSelect.sub}</p>
        <div className="flex flex-col gap-4">
          <button
            onClick={() => { setLang('en'); setLangSelected(true); }}
            className="w-full bg-[#C2410C] hover:bg-[#a33509] text-white font-semibold py-4 px-8 rounded-lg transition-colors text-lg"
          >
            {t.langSelect.en}
          </button>
          <button
            onClick={() => { setLang('es'); setLangSelected(true); }}
            className="w-full border-2 border-[#C2410C] hover:bg-[#C2410C]/10 text-white font-semibold py-4 px-8 rounded-lg transition-colors text-lg"
          >
            {t.langSelect.es}
          </button>
        </div>
      </div>
    </div>
  );
}
