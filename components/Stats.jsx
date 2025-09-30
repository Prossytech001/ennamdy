"use client";

import { useEffect, useRef, useState } from "react";

function useCountUp(target, duration = 2000) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    let observer;
    let started = false;

    if (ref.current) {
      observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting && !started) {
            started = true;
            let start = 0;
            const end = target;
            const stepTime = Math.abs(Math.floor(duration / end));

            const timer = setInterval(() => {
              start += 1;
              setCount(start);
              if (start === end) clearInterval(timer);
            }, stepTime);
          }
        },
        { threshold: 0.3 }
      );
      observer.observe(ref.current);
    }

    return () => observer && observer.disconnect();
  }, [target, duration]);

  return { count, ref };
}

export default function Stats() {
  const tiktok = useCountUp(500); // 50k
  const xPlatform = useCountUp(30); // 30x
  const youtube = useCountUp(100); // 100x

  return (
    <section className="bg-[var(--color-dark)] text-[var(--color-light)] w-full py-10">
      <div className="max-w-7xl mx-auto px-6 flex gap-4 text-center">
        
        {/* TikTok */}
        <div ref={tiktok.ref}>
          <h2 className="text-[28px] font-bold text-[var(--color-accent)]">
            {tiktok.count.toLocaleString()}K+
          </h2>
          <p className="mt-2 text-[var(--color-muted)]">Reach on TikTok</p>
        </div>

        {/* X (Twitter) */}
        <div ref={xPlatform.ref}>
          <h2 className="text-[28px] font-bold text-[var(--color-accent)]">
            {xPlatform.count}K+
          </h2>
          <p className="mt-2 text-[var(--color-muted)]">Growth on Facebook</p>
        </div>

        {/* YouTube */}
        <div ref={youtube.ref}>
          <h2 className="text-[28px]  font-bold text-[var(--color-accent)]">
            {youtube.count}K+
          </h2>
          <p className="mt-2 text-[var(--color-muted)]">Reach on YouTube</p>
        </div>
      </div>
    </section>
  );
}
