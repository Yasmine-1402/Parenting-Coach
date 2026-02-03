import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
// Note: I am not installing radix-ui/react-slot yet, I will use a simple button first to avoid extra dependencies, 
// or I should install it if I want 'asChild' behavior. The user asked for "No unnecessary dependencies".
// I'll stick to a simple clean button for now without Radix unless needed for accessibility polymorphism.
// Actually, simple props are fine.

const buttonVariants = cva(
    "inline-flex items-center justify-center whitespace-nowrap rounded-2xl text-base font-medium ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-95",
    {
        variants: {
            variant: {
                default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm hover:shadow-md",
                destructive: "bg-red-500 text-white hover:bg-red-500/90",
                outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground border-gray-200",
                secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
                ghost: "hover:bg-accent hover:text-accent-foreground",
                link: "text-primary underline-offset-4 hover:underline",
            },
            size: {
                default: "h-12 px-8 py-3",
                sm: "h-10 rounded-xl px-4",
                lg: "h-14 rounded-2xl px-10 text-lg",
                icon: "h-10 w-10",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
)

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        return (
            <button
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        )
    }
)
Button.displayName = "Button"

export { Button, buttonVariants }
