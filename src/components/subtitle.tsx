import { cx } from "class-variance-authority";
import React from "react";

export function Subtitle({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h3
      className={cx(
        className,
        "font-[400] text-center text-xl text-neutral-500"
      )}
    >
      {children}
    </h3>
  );
}
