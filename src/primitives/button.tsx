import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/util"

const commonLinkClasses = "hover:text-primary text-foreground"

const variant = {
  primary: "bg-primary text-primary-foreground hover:bg-primary/90 font-heading not-typography",
  secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 font-heading not-typography",
  outline: "border border-primary hover:bg-accent hover:text-accent-foreground font-heading not-typography",
  destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
  ghost: "hover:bg-accent hover:text-accent-foreground",
  link: commonLinkClasses,
  emlink: commonLinkClasses + " font-heading not-typography",
}

const size = {
  link: '',
  sm: "h-9 px-3 rounded-md",
  default: "h-10 py-2 px-4",
  lg: "h-10 px-8 rounded-lg min-w-[260px]",
  icon: "h-10 w-10",
}


const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 " +
  "disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
  {
    variants: {
      variant,
      size
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
)

type ButtonVariants = keyof typeof variant
type ButtonSizes = keyof typeof size

interface ButtonProps
  extends 
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> 
{
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"



export { 
  Button as default, 
  type ButtonProps,
  type ButtonVariants,
  type ButtonSizes, 
  buttonVariants,
}
