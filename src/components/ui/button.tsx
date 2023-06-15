import { cva } from "class-variance-authority";
import React from "react";

interface ButtonProps {
  text: string;
  intent?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  rounded?: "sm" | "md" | "lg" | "full";
}

function Button({ text, intent, size, rounded }: ButtonProps) {
  const button = cva("button cursor-pointer", {
    variants: {
      intent: {
        primary: "bg-zinc-900 text-white hover:bg-zinc-800",
        secondary: "bg-zinc-300 hover:bg-zinc-400/40",
        outline: "border-2 border-zinc-900 text-zinc-900 hover:bg-zinc-200",
      },
      size: {
        sm: "py-2 px-4 text-sm",
        md: "py-3 px-6 text-base",
        lg: "py-4 px-8 text-lg",
      },
      rounded: {
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        full: "rounded-full",
      },
    },

    defaultVariants: {
      intent: "primary",
      size: "md",
      rounded: "md",
    },
  });

  return <div className={button({ intent, size, rounded })}>{text}</div>;
}

export default Button;
