"use client";

import { Button, ButtonProps } from "@/components/ui/button";
import { useEffect, useState } from "react";

interface BookingButtonProps extends ButtonProps {
    children: React.ReactNode;
    url?: string;
}

export function BookingButton({ children, onClick, url, ...props }: BookingButtonProps) {
    const defaultUrl = "https://calendly.com/hassanheba-eg/parenting-1-1-coaching-session?month=2026-02";
    const targetUrl = url || defaultUrl;

    useEffect(() => {
        // Load Calendly CSS
        const head = document.head;
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = "https://assets.calendly.com/assets/external/widget.css";
        head.appendChild(link);

        // Load Calendly JS
        const script = document.createElement("script");
        script.src = "https://assets.calendly.com/assets/external/widget.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            // Cleanup if needed (optional)
        };
    }, []);

    const handleBooking = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (onClick) onClick(e);

        if (typeof window !== "undefined" && (window as any).Calendly) {
            (window as any).Calendly.initPopupWidget({ url: targetUrl });
        } else {
            // Fallback if script hasn't loaded yet
            window.open(targetUrl, "_blank");
        }
    };

    return (
        <Button onClick={handleBooking} {...props}>
            {children}
        </Button>
    );
}
