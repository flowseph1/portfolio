"use client";

import { useRouter } from "next/navigation";

export function GoBackButton() {
  const router = useRouter();

  return (
    <div
      className="flex gap-2 text-neutral-700 items-center cursor-pointer hover:bg-neutral-200 w-fit py-1 px-3 -ml-3 rounded-md transition-all duration-300"
      onClick={() => router.back()}
    >
      <svg
        width="13"
        height="13"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M32 64L37.64 58.36L15.32 36L64 36L64 28L15.32 28L37.64 5.64L32 -2.79753e-06L2.79753e-06 32L32 64Z"
          fill="currentColor"
        />
      </svg>

      <p>Back</p>
    </div>
  );
}
