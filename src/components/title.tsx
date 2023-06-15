import React from "react";

export function Title({ children }: { children: React.ReactNode }) {
  return <h1 className="font-bold text-6xl text-center">{children}</h1>;
}
