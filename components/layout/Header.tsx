"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { BookingButton } from "@/components/features/BookingButton";
import { LanguageSwitcher } from "@/components/features/LanguageSwitcher";
import { useLanguage } from "@/components/providers/LanguageContext";

export function Header() {
    const { t } = useLanguage();

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
            <Container>
                <div className="flex items-center justify-between h-20">
                    <Link href="/" className="text-2xl font-bold tracking-tight text-gray-900">
                        Heba Hassan<span className="text-primary">.</span>
                    </Link>

                    <nav className="hidden md:flex items-center gap-8">
                        <Link href="#benefits" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">
                            {t.nav.benefits}
                        </Link>
                        <Link href="#how-it-works" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">
                            {t.nav.howItWorks}
                        </Link>
                        <Link href="#about" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">
                            {t.nav.about}
                        </Link>
                        <Link href="#testimonials" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">
                            {t.nav.testimonials}
                        </Link>
                    </nav>

                    <div className="flex items-center gap-4">
                        <LanguageSwitcher />
                        <BookingButton size="sm">
                            {t.nav.bookNow}
                        </BookingButton>
                    </div>
                </div>
            </Container>
        </header>
    );
}
