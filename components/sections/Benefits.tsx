"use client";

import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";
import { Compass, Lightbulb, ShieldCheck, Zap } from "lucide-react";

const benefits = [
    {
        title: "Personalized Roadmap",
        description: "No generic advice. We build a strategy tailored specifically to your family's unique dynamics and challenges.",
        icon: Compass,
    },
    {
        title: "Expert Guidance",
        description: "Leverage years of experience to navigate complex parenting situations with confidence and clarity.",
        icon: Lightbulb,
    },
    {
        title: "Accountability",
        description: "Stay on track with your goals. Regular check-ins ensure you're making consistent progress toward harmony.",
        icon: ShieldCheck,
    },
    {
        title: "Faster Results",
        description: "Skip the trial and error. Get straight to what works and see positive changes in your home sooner.",
        icon: Zap,
    },
];

export function Benefits() {
    return (
        <Section id="benefits" className="bg-secondary/30">
            <Container>
                <div className="text-center mb-16 max-w-2xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-4">
                        Why Coaching Works
                    </h2>
                    <p className="text-lg text-gray-600">
                        Transform your parenting journey from stressful to joyful with dedicated support.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={benefit.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className="p-6 h-full border-none shadow-sm hover:shadow-md bg-white">
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                                    <benefit.icon className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">
                                    {benefit.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {benefit.description}
                                </p>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </Section>
    );
}
