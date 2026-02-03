"use client";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { BookingButton } from "@/components/features/BookingButton";
import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/components/providers/LanguageContext";

export function Hero() {
    const { t } = useLanguage();

    return (
        <div className="relative pt-32 pb-16 md:pt-48 md:pb-32 overflow-hidden bg-gradient-to-b from-blue-50/50 to-white">
            {/* Background decoration */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
                <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-50" />
                <div className="absolute bottom-0 left-10 w-72 h-72 bg-purple-100 rounded-full blur-3xl opacity-50" />
            </div>

            <Container className="relative">
                <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
                    >
                        <Star className="w-4 h-4 fill-primary" />
                        <span>Premium 1-on-1 Parenting Coaching</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 mb-6"
                    >
                        {t.hero.title}
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl leading-relaxed"
                    >
                        {t.hero.subtitle}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto flex-wrap justify-center"
                    >
                        <BookingButton size="lg" className="h-14 px-8 text-lg w-full sm:w-auto" url="https://calendly.com/hassanheba-eg/parenting-1-1-coaching-session?month=2026-02">
                            {t.hero.ctaPrimary} <ArrowRight className="ml-2 w-5 h-5 rtl:mr-2 rtl:ml-0 rtl:rotate-180" />
                        </BookingButton>

                        <BookingButton size="lg" variant="secondary" className="h-14 px-8 text-lg w-full sm:w-auto bg-purple-100 text-purple-700 hover:bg-purple-200" url="http://calendly.com/hassanheba-eg/15-minute-intro-session">
                            {t.hero.ctaFree}
                        </BookingButton>

                        <Button size="lg" variant="outline" className="h-14 px-8 text-lg w-full sm:w-auto" asChild>
                            <Link href="#how-it-works">
                                {t.hero.ctaSecondary}
                            </Link>
                        </Button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="mt-12 flex items-center justify-center gap-8 text-gray-500 grayscale opacity-70"
                    >
                        {/* Minimal trust indicators or logos could go here */}
                        {/* For now, just a placeholder text or small visual */}
                        <p className="text-sm font-medium">Trusted by 100+ parents</p>
                    </motion.div>
                </div>
            </Container>
        </div>
    );
}
