"use client";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/components/providers/LanguageContext";

export function CallToAction() {
    const { t } = useLanguage();

    return (
        <Section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
            {/* Background patterns */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-white blur-3xl" />
                <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-white blur-3xl opacity-50" />
            </div>

            <Container className="relative z-10 text-center max-w-3xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl md:text-5xl font-bold mb-6 text-white"
                >
                    {t.cta.title}
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-xl text-primary-foreground/90 mb-10 leading-relaxed"
                >
                    {t.cta.subtitle}
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                >
                    <Button
                        size="lg"
                        variant="secondary"
                        className="h-16 px-10 text-lg rounded-2xl shadow-lg bg-white text-primary hover:bg-gray-100 font-bold"
                        asChild
                    >
                        <Link href="https://calendly.com/hassanheba-eg/parenting-1-1-coaching-session?month=2026-02" target="_blank">
                            {t.cta.btn} <ArrowRight className="ml-2 w-5 h-5 rtl:mr-2 rtl:ml-0 rtl:rotate-180" />
                        </Link>
                    </Button>
                </motion.div>
            </Container>
        </Section>
    );
}
