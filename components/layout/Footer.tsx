"use client";

import { Container } from "@/components/ui/container";
import { Facebook, Instagram, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/components/providers/LanguageContext";

export function Footer() {
    const { t } = useLanguage();

    return (
        <footer className="bg-gray-900 text-gray-300 py-12 border-t border-gray-800">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="text-2xl font-bold tracking-tight text-white mb-4 block">
                            Heba Hassan<span className="text-primary">.</span>
                        </Link>
                        <p className="max-w-xs text-gray-400">
                            {t.about.description1.split('.')[0]}.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white mb-4">Quick Links</h4>
                        <nav className="flex flex-col gap-3">
                            <Link href="#benefits" className="hover:text-primary transition-colors">{t.nav.benefits}</Link>
                            <Link href="#how-it-works" className="hover:text-primary transition-colors">{t.nav.howItWorks}</Link>
                            <Link href="#about" className="hover:text-primary transition-colors">{t.nav.about}</Link>
                            <Link href="#testimonials" className="hover:text-primary transition-colors">{t.nav.testimonials}</Link>
                        </nav>
                    </div>

                    <div>
                        <h4 className="font-bold text-white mb-4">Connect</h4>
                        <div className="flex gap-4 mb-4">
                            <Link href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                                <Instagram className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                                <Facebook className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                                <Linkedin className="w-5 h-5" />
                            </Link>
                        </div>
                        <a href="mailto:contact@hebahassan.com" className="flex items-center gap-2 hover:text-primary transition-colors">
                            <Mail className="w-4 h-4 ml-0 mr-2 rtl:ml-2 rtl:mr-0" />
                            contact@hebahassan.com
                        </a>
                    </div>
                </div>

                <div className="pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
                    <p>© {new Date().getFullYear()} Heba Hassan Coaching. {t.footer.rights}</p>
                </div>
            </Container>
        </footer>
    );
}
