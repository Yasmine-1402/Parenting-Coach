"use client";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/components/providers/LanguageContext";

export function About() {
    const { t } = useLanguage();

    return (
        <Section id="about" className="bg-secondary/30">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <div className="aspect-[4/5] rounded-3xl bg-gray-200 overflow-hidden relative shadow-xl">
                            <Image
                                src="/coach-heba.jpg"
                                alt="Heba Hassan - Parenting Coach"
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Floating decoration card */}
                        <div className="absolute -bottom-6 -right-6 rtl:right-auto rtl:-left-6 bg-white p-6 rounded-2xl shadow-lg max-w-xs hidden sm:block">
                            <p className="font-bold text-lg text-primary mb-1">{t.about.experience}</p>
                            <p className="text-gray-600 text-sm">{t.about.experienceText}</p>
                        </div>
                    </motion.div>

                    {/* Content Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-6">
                            {t.about.title}
                        </h2>
                        <h3 className="text-xl text-primary font-medium mb-6">
                            {t.about.subtitle}
                        </h3>

                        <div className="space-y-4 text-lg text-gray-600 mb-8 leading-relaxed">
                            <p>
                                {t.about.description1}
                            </p>
                            <p>
                                {t.about.description2}
                            </p>
                        </div>

                        <ul className="space-y-3 mb-10">
                            {t.about.credentials.map((item) => (
                                <li key={item} className="flex items-center gap-3 text-gray-700">
                                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>

                        <Button size="lg" asChild>
                            <Link href="https://calendly.com/hassanheba-eg/parenting-1-1-coaching-session?month=2026-02" target="_blank">
                                {t.about.cta}
                            </Link>
                        </Button>
                    </motion.div>
                </div>
            </Container>
        </Section>
    );
}
