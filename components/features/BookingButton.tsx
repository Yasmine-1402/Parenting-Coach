"use client";

import { Button, ButtonProps } from "@/components/ui/button";

interface BookingButtonProps extends ButtonProps {
    children: React.ReactNode;
    url?: string;
}

export function BookingButton({ children, onClick, url, ...props }: BookingButtonProps) {
    const defaultUrl = "https://calendar.app.google/RhuKW947BT3fMGtKA";
    const targetUrl = url || defaultUrl;

    const handleBooking = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (onClick) onClick(e);
        window.open(targetUrl, "_blank");
    };

    return (
        <Button onClick={handleBooking} {...props}>
            {children}
        </Button>
    );
}
