import { cn } from "@/lib/utils"
import React from "react"

const Card = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn(
            "rounded-2xl border bg-card text-card-foreground shadow-sm hover:shadow-md transition-shadow duration-300",
            className
        )}
        {...props}
    />
))
Card.displayName = "Card"

export { Card }
