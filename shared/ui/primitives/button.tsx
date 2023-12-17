import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/util"

const variant = {
  primary: "bg-primary text-primary-fg hover:bg-primary-hover font-heading whitespace-nowrap not-typography",
  secondary: "bg-secondary text-secondary-fg hover:bg-secondary/80 font-heading whitespace-nowrap not-typography",
  outline: "text-foreground border border-primary hover:bg-level-1 hover:text-accent font-heading whitespace-nowrap not-typography",
  destructive: "bg-destructive text-destructive-fg font-sans whitespace-nowrap hover:bg-destructive-hover",
  ghost: "text-foreground hover:bg-level-1 hover:text-accent whitespace-nowrap font-sans ",
  link: "text-foreground hover:text-muted-1 font-sans ",
  linkFG: "text-foreground hover:text-muted-1 font-sans ", // marker to style nav as regular link
}

const size = {
  link: '',
  sm: "h-9 px-3 rounded-md text-xs ",
  default: "h-10 py-2 px-4 text-sm lg:min-w-[220px]",
  lg: "h-10 px-8 text-base rounded-lg min-w-[260px] lg:min-w-[300px] lg:h-10 xs:min-w-0 xs:text-sm",
  icon: "h-10 w-10",
}

const buttonVariants = cva(
  "flex items-center justify-center rounded-md font-medium transition-colors " +
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

interface ButtonProps extends
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
