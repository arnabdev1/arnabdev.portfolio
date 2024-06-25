import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority";

import { cn } from "../../lib/utils";

const buttonVariants = cva(
  "inline-flex items-center bg-[#cbacf9] justify-center whitespace-nowrap rounded-full text-sm font-medium ",
  {
    variants: {
      variant: {
        default:
          "bg-[#cbacf9] text-black border-primary border-2 hover:bg-primary hover:text-[#cbacf9] hover:border-[#cbacf9] focus:bg-primary focus:text-[#cbacf9] focus:border-[#cbacf9]",
        primary: "bg-primary text-white",
        outline:
          "border border-[#cbacf9] bg-transparent text-[#cbacf9] hover:bg-[#cbacf9] hover:text-primary",
      },
      size: {
        default: "h-[44px] px-6",
        sm: "h-[48px] px-6",
        lg: "h-[56px] px-8 text-sm uppercase tracking-[2px]"
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"
  return (
    (<Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props} />)
  );
})
Button.displayName = "Button"

export { Button, buttonVariants }
