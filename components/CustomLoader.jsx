"use client";

import Image from "next/image";

export default function CustomLoader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[var(--color-dark)] z-50">
      <div className="flex flex-col items-center">
        {/* Logo with animation */}
        <div className="animate-bounce">
          <Image
            src="/mainlogo.png" // 👉 Replace with your brand logo
            alt="Ennamdy Logo"
            width={100}
            height={100}
            className="rounded-full"
          />
        </div>

        {/* Brand name pulse */}
        <h1 className="mt-4 text-2xl font-bold text-[var(--color-accent)] animate-pulse">
          Ennamdy
        </h1>

        {/* Progress dots */}
        <div className="flex gap-2 mt-3">
          <span className="w-2 h-2 bg-[var(--color-accent)] rounded-full animate-bounce [animation-delay:-0.3s]"></span>
          <span className="w-2 h-2 bg-[var(--color-accent)] rounded-full animate-bounce [animation-delay:-0.15s]"></span>
          <span className="w-2 h-2 bg-[var(--color-accent)] rounded-full animate-bounce"></span>
        </div>
      </div>
    </div>
  );
}
