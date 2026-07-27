"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

const ABOUT_WORK_IMAGES = Array.from(
  { length: 13 },
  (_, i) => `/images/about/about-work-${i + 1}.jpg`
);

export default function AboutWorkMarquee() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!trackRef.current) return;

    const ctx = gsap.context(() => {
      // Continuous smooth scroll from right to left
      gsap.to(trackRef.current, {
        xPercent: -50,
        repeat: -1,
        duration: 120,
        ease: "none",
      });
    });

    return () => ctx.revert();
  }, []);

  // Duplicate items array to ensure seamless infinite looping
  const doubledImages = [...ABOUT_WORK_IMAGES, ...ABOUT_WORK_IMAGES];

  return (
    <section className="w-full py-20 mx-auto z-10 overflow-hidden relative">

      {/* Gradient masks for smooth edge fade */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none" />

      <div ref={trackRef} className="flex w-max items-center">
        {doubledImages.map((src, index) => (
          <div
            key={index}
            className="flex-none w-[280px] sm:w-[380px] aspect-[3/4] relative overflow-hidden mx-3 select-none bg-[#0d0d0d]"
          >
            <Image
              src={src}
              alt={`Travail Madame Merlin ${(index % 13) + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 280px, 380px"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
