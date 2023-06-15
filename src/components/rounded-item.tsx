import { ReactNode } from "react";

export default function RoundedItem({ children }: { children: ReactNode }) {
  return (
    <div className="py-1 px-3 border-[1px] border-gray-300 rounded-full text-xs">
      {children}
    </div>
  );
}
