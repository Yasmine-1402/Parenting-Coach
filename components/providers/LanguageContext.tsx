"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { translations, Language } from "@/lib/translations";

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: typeof translations.en;
    dir: "ltr" | "rtl";
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [language, setLanguage] = useState<Language>("en");

    useEffect(() => {
        // Check localStorage or browser preference on mount
        const savedLang = localStorage.getItem("language") as Language;
        if (savedLang) {
            setLanguage(savedLang);
        }
    }, []);

    useEffect(() => {
        // Update document direction and lang attribute
        const dir = language === "ar" ? "rtl" : "ltr";
        document.documentElement.dir = dir;
        document.documentElement.lang = language;
        localStorage.setItem("language", language);
    }, [language]);

    const value = {
        language,
        setLanguage,
        t: translations[language],
        dir: (language === "ar" ? "rtl" : "ltr") as "ltr" | "rtl",
    };

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
}
