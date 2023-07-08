"use client";

import { cva } from "class-variance-authority";
import { useRouter } from "next/navigation";
import React from "react";

interface ButtonProps {
  text: string;
  intent?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  rounded?: "sm" | "md" | "lg" | "full";
  onClick?: () => void;
  href?: string;
}

function Button({ text, intent, size, rounded, onClick, href }: ButtonProps) {
  const button = cva("button cursor-pointer transition-all duration-300", {
    variants: {
      intent: {
        primary: "bg-zinc-900 text-white hover:bg-zinc-800",
        secondary: "bg-zinc-200 hover:bg-zinc-400/40 text-neutral-800",
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

  const router = useRouter();

  return (
    <button
      className={button({ intent, size, rounded })}
      onClick={() =>
        onClick ? onClick() : href ? router.push(href) : undefined
      }
    >
      {text}
    </button>
  );
}

export default Button;
