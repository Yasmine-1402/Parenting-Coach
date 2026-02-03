"use client";

import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { useLanguage } from "@/components/providers/LanguageContext";



export function Testimonials() {
    const { t } = useLanguage();

    const testimonialItems = [
        {
            content: t.testimonials.t1,
            author: t.testimonials.t1Author,
            role: "Mother"
        },
        {
            content: t.testimonials.t2,
            author: t.testimonials.t2Author,
            role: "Father"
        },
        {
            content: t.testimonials.t3,
            author: t.testimonials.t3Author,
            role: "Mother"
        }
    ];

    return (
        <Section id="testimonials" className="bg-white">
            <Container>
                <div className="text-center mb-16 max-w-2xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-4">
                        {t.testimonials.title}
                    </h2>
                    <p className="text-lg text-gray-600">
                        {t.testimonials.subtitle}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonialItems.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className="p-8 h-full bg-gray-50 border-gray-100 flex flex-col justify-between">
                                <div>
                                    <Quote className="w-8 h-8 text-primary/30 mb-4" />
                                    <p className="text-gray-700 leading-relaxed italic mb-6">
                                        "{testimonial.content}"
                                    </p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold">
                                        {testimonial.author[0]}
                                    </div>
                                    <div>
                                        <p className="font-bold text-gray-900">{testimonial.author}</p>
                                        <p className="text-sm text-gray-500">{testimonial.role}</p>
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </Section>
    );
}
