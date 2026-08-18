'use client'

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react'

export type Lang = 'en' | 'si' | 'ta'

type Dict = Record<string, { en: string; si: string; ta: string }>

// Core UI strings. Extend this dictionary as translations are verified.
const dictionary: Dict = {
  heroLabel: {
    en: 'A Proud Tradition of Excellence',
    si: 'විශිෂ්ටත්වයේ අභිමානවත් සම්ප්‍රදායක්',
    ta: 'சிறப்பின் பெருமைமிகு பாரம்பரியம்',
  },
  heroTagline: {
    en: 'Empowering Minds. Building Character. Shaping the Future.',
    si: 'මනස සවිබල ගැන්වීම. චරිතය ගොඩනැගීම. අනාගතය හැඩගැස්වීම.',
    ta: 'மனங்களை வலுப்படுத்துதல். பண்பை உருவாக்குதல். எதிர்காலத்தை வடிவமைத்தல்.',
  },
  explore: {
    en: 'Explore Our School',
    si: 'අපගේ පාසල ගවේෂණය කරන්න',
    ta: 'எங்கள் பள்ளியை ஆராயுங்கள்',
  },
  latestNews: {
    en: 'Latest News',
    si: 'නවතම පුවත්',
    ta: 'சமீபத்திய செய்திகள்',
  },
  scroll: {
    en: 'Scroll to Explore',
    si: 'ගවේෂණය කිරීමට අනුචලනය කරන්න',
    ta: 'ஆராய உருட்டவும்',
  },
  studentPortal: {
    en: 'Student Portal',
    si: 'ශිෂ්‍ය ද්වාරය',
    ta: 'மாணவர் வலைவாசல்',
  },
}

type LanguageContextValue = {
  lang: Lang
  setLang: (l: Lang) => void
  t: (key: keyof typeof dictionary) => string
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('en')

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const t = (key: keyof typeof dictionary) => dictionary[key]?.[lang] ?? key

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}

export const langLabels: { code: Lang; label: string }[] = [
  { code: 'en', label: 'EN' },
  { code: 'si', label: 'සිං' },
  { code: 'ta', label: 'தமிழ்' },
]
