import { cx } from "class-variance-authority";
import React from "react";

export function Title({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h1
      className={cx(
        "font-bold px-2 sm:px-0 text-4xl md:text-6xl text-center bg-hero-title bg-clip-text text-transparent pb-2 -mb-2 max-w-2xl",
        className
      )}
    >
      {children}
    </h1>
  );
}
