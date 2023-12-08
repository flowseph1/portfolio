import { cx } from "class-variance-authority";
import { ReactNode } from "react";

export default function RoundedItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cx(
        "py-1 px-3 border-[1px] border-neutral-300/70 rounded-full text-xs text-neutral-500 transition-all duration-300",
        className
      )}
    >
      {children}
    </div>
  );
}
