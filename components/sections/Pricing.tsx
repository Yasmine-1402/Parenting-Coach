"use client";

import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Copy, CreditCard, AlertCircle, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/components/providers/LanguageContext";

export function Pricing() {
    const { t } = useLanguage();
    const [copied, setCopied] = useState(false);
    const instapayId = "heba.hassan14@instapay";

    const copyToClipboard = () => {
        navigator.clipboard.writeText(instapayId);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <Section id="pricing" className="bg-gradient-to-b from-white to-secondary/30">
            <Container>
                <div className="text-center mb-12 max-w-2xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-4">
                        {t.pricing.title}
                    </h2>
                    <p className="text-lg text-gray-600">
                        {t.pricing.subtitle}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {/* Price Card */}
                    <Card className="p-8 border-primary/20 shadow-lg relative overflow-hidden flex flex-col">
                        <div className="absolute top-0 right-0 p-4 bg-primary/10 text-primary font-bold rounded-bl-2xl rtl:right-auto rtl:left-0 rtl:rounded-bl-none rtl:rounded-br-2xl">
                            {t.pricing.mostPopular}
                        </div>

                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{t.pricing.sessionType}</h3>
                        <p className="text-gray-500 mb-6">{t.pricing.sessionDesc}</p>

                        <div className="mb-8">
                            <span className="text-5xl font-bold text-gray-900">{t.pricing.price}</span>
                            <span className="text-xl text-gray-500 font-medium ml-2 rtl:mr-2 rtl:ml-0">{t.pricing.currency}</span>
                        </div>

                        <div className="space-y-4 mb-8 flex-1">
                            <div className="flex items-start gap-3">
                                <CreditCard className="w-5 h-5 text-primary mt-1" />
                                <div>
                                    <p className="font-bold text-gray-900">{t.pricing.paymentTitle}</p>
                                    <div className="flex items-center gap-2 mt-1 bg-gray-50 p-2 rounded-lg border border-gray-100">
                                        <code className="text-sm font-mono text-primary">{instapayId}</code>
                                        <button
                                            onClick={copyToClipboard}
                                            className="p-1.5 hover:bg-gray-200 rounded-md transition-colors"
                                            title="Copy ID"
                                        >
                                            <Copy className={cn("w-4 h-4", copied ? "text-green-500" : "text-gray-500")} />
                                        </button>
                                    </div>
                                    <Button
                                        variant="link"
                                        className="p-0 h-auto mt-2 text-primary text-sm font-medium hover:underline"
                                        asChild
                                    >
                                        <Link href="https://ipn.eg/S/heba.hassan14/instapay/7UPu45" target="_blank">
                                            {t.pricing.payDirect} <ArrowRight className="w-3 h-3 ml-1 rtl:mr-1 rtl:ml-0 rtl:rotate-180" />
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </div>

                        <div className="bg-amber-50 rounded-xl p-4 border border-amber-100 text-sm text-amber-900">
                            <p className="font-bold mb-1 flex items-center gap-2">
                                <AlertCircle className="w-4 h-4 text-amber-600" />
                                {t.pricing.confirmationTitle}
                            </p>
                            <p>
                                {t.pricing.confirmationText}
                                <a href="https://wa.me/201070488401" className="font-bold underline ml-1 hover:text-amber-700 dir-ltr inline-block">01070488401</a>
                            </p>
                        </div>
                    </Card>

                    {/* Policy Card */}
                    <div className="flex flex-col gap-8">
                        {/* Free Intro Card */}
                        <Card className="p-8 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20 shadow-sm relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-3 bg-primary text-white text-xs font-bold rounded-bl-xl rtl:right-auto rtl:left-0 rtl:rounded-bl-none rtl:rounded-br-xl">
                                {t.pricing.introNew}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{t.pricing.introTitle}</h3>
                            <p className="text-gray-600 mb-6 text-sm">
                                {t.pricing.introDesc}
                            </p>
                            <Button className="w-full bg-white text-primary border-primary/20 hover:bg-white/80" variant="outline" asChild>
                                <Link href="http://calendly.com/hassanheba-eg/15-minute-intro-session" target="_blank">
                                    {t.pricing.introBtn}
                                </Link>
                            </Button>
                        </Card>

                        <Card className="p-8 bg-gray-50 border-gray-100 flex flex-col justify-center flex-1">
                            <h3 className="text-xl font-bold text-gray-900 mb-6">{t.pricing.policyTitle}</h3>

                            <ul className="space-y-6">
                                <li className="flex gap-4">
                                    <div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-bold flex-shrink-0">
                                        <span className="text-sm">48+</span>
                                    </div>
                                    <div>
                                        <p className="font-bold text-gray-900">{t.pricing.policy1.title}</p>
                                        <p className="text-sm text-gray-600">{t.pricing.policy1.desc}</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-8 h-8 rounded-full bg-yellow-100 text-yellow-600 flex items-center justify-center font-bold flex-shrink-0">
                                        <span className="text-sm">48h</span>
                                    </div>
                                    <div>
                                        <p className="font-bold text-gray-900">{t.pricing.policy2.title}</p>
                                        <p className="text-sm text-gray-600">{t.pricing.policy2.desc}</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold flex-shrink-0">
                                        <span className="text-sm">0h</span>
                                    </div>
                                    <div>
                                        <p className="font-bold text-gray-900">{t.pricing.policy3.title}</p>
                                        <p className="text-sm text-gray-600">{t.pricing.policy3.desc}</p>
                                    </div>
                                </li>
                            </ul>
                        </Card>
                    </div>
                </div>
            </Container>
        </Section>
    );
}
