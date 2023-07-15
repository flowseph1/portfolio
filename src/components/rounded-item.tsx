import { ReactNode } from "react";

export default function RoundedItem({ children }: { children: ReactNode }) {
  return (
    <div className="py-1 px-3 border-[1px] border-neutral-300 rounded-full text-xs text-neutral-600 transition-all duration-300">
      {children}
    </div>
  );
}
