"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useEffect } from "react";

export function Modal({
  children,
  title,
}: {
  children: React.ReactNode;
  title?: string;
}) {
  const route = useRouter();

  const handleClickOutside = () => {
    route.back();
  };

  useEffect(() => {
    const body = document.getElementById("body");
    body?.classList.add("overflow-hidden");

    return () => {
      body?.classList.remove("overflow-hidden");
    };
  }, []);

  return (
    <motion.div
      className="fixed inset-0 bg-black/30 backdrop-blur flex items-center justify-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="absolute inset-0 z-0" onClick={handleClickOutside}></div>

      <motion.div
        className="bg-neutral-100/70 rounded-xl z-10 max-w-5xl bg-project border border-white/70 my-10"
        initial={{ y: 5 }}
        animate={{ y: 0 }}
        exit={{ y: 5 }}
      >
        {/* Header */}

        {title && (
          <div className="flex items-center justify-between border-b-[1px] border-neutral-200 p-5">
            <h1 className="text-xl font-bold">{title}</h1>
            <button
              className="text-2xl text-neutral-600"
              onClick={handleClickOutside}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        )}
        <div className="py-8 px-7">{children}</div>
      </motion.div>
    </motion.div>
  );
}
