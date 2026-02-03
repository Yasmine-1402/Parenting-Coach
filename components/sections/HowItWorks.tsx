"use client";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";
import { CalendarCheck, CreditCard, ClipboardList } from "lucide-react";
import { useLanguage } from "@/components/providers/LanguageContext";

const steps = [
    {
        number: "01",
        title: "Book Your Slot",
        description: "Choose a time that works for you using the calendar below.",
        icon: CalendarCheck,
    },
    {
        number: "02",
        title: "Confirm Payment",
        description: "Send 750 EGP via InstaPay to secure your spot and WhatsApp the receipt.",
        icon: CreditCard,
    },
    {
        number: "03",
        title: "Meet Online",
        description: "Join the private video call and get your personalized action plan.",
        icon: ClipboardList,
    },
];

export function HowItWorks() {
    const { t } = useLanguage();

    return (
        <Section id="how-it-works" className="bg-white">
            <Container>
                <div className="text-center mb-16 max-w-2xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-4">
                        {t.howItWorks.title}
                    </h2>
                    <p className="text-lg text-gray-600">
                        {t.howItWorks.subtitle}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                    {/* Connecting line for desktop */}
                    <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-gray-200 via-primary/20 to-gray-200 z-0" />

                    {t.howItWorks.steps.map((step, index) => {
                        const icons = [CalendarCheck, CreditCard, ClipboardList];
                        const Icon = icons[index];
                        const number = "0" + (index + 1);

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className="relative z-10 flex flex-col items-center text-center"
                            >
                                <div className="w-24 h-24 rounded-2xl bg-white border border-gray-100 shadow-sm flex items-center justify-center mb-6 relative group">
                                    <div className="absolute inset-0 bg-primary/5 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300" />
                                    <Icon className="w-10 h-10 text-primary relative z-10" />
                                    <span className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm border-2 border-white">
                                        {number}
                                    </span>
                                </div>

                                <h3 className="text-xl font-bold text-gray-900 mb-3">
                                    {step.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed max-w-xs">
                                    {step.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </Container>
        </Section>
    );
}
