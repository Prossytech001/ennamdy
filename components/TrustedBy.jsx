"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const companies = [
  { name: "Sun", logo: "/Group12.png" },
  { name: "Vanguard", logo: "/Group11.png" },
 { name: "Globexs", logo: "/Group14.png" },
  { name: "Globex", logo: "/Group13.png" },
  { name: "Initech", logo: "/Group15.png" },
];

export default function TrustedBy() {
  const scrollRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const startScroll = () => {
      intervalRef.current = setInterval(() => {
        container.scrollLeft += 1; // speed
        if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
          container.scrollLeft = 0; // reset for infinite loop
        }
      }, 20);
    };

    const stopScroll = () => clearInterval(intervalRef.current);

    startScroll();

    container.addEventListener("mouseenter", stopScroll);
    container.addEventListener("mouseleave", startScroll);

    return () => {
      stopScroll();
      container.removeEventListener("mouseenter", stopScroll);
      container.removeEventListener("mouseleave", startScroll);
    };
  }, []);

  return (
    <section className="bg-[var(--color-gray)] py-12 w-full overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-center text-2xl font-semibold text-[var(--color-light)] mb-8">
          Trusted by professionals across Nigeria and beyond to <span className="text-[var(--color-accent)]"> transition into remote work that pays in dollars.</span>
        </h2>

        <div
          ref={scrollRef}
          className="flex gap-12 overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing"
        >
          {[...companies, ...companies].map((c, i) => (
            <div key={i} className="flex-shrink-0 min-w-[150px] flex items-center justify-center">
              <Image
                src={c.logo}
                alt={c.name}
                width={120}
                height={60}
                className="object-contain grayscale hover:grayscale-0 transition"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
