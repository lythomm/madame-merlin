"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "./components/Navbar";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (imageRef.current && containerRef.current) {
        gsap.fromTo(
          imageRef.current,
          { yPercent: -12, scale: 1.15 },
          {
            yPercent: 12,
            ease: "none",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative min-h-screen w-full bg-[#0a0a0a] text-[#f0e4d1] flex flex-col justify-between overflow-x-hidden selection:bg-[#fa9764] selection:text-black">
      {/* Header Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section className="min-h-[85vh] flex flex-col items-center justify-center text-center px-4 z-10">
        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[14rem] font-normal tracking-wider text-primary uppercase leading-[0.9] select-none">
          MADAME <br />MERLIN
        </h1>

        <p className="font-italianno text-3xl sm:text-4xl md:text-5xl text-[#f0e4d1]/90 mt-12">
          Maquilleuse, Coiffeuse et Styliste artistique sur Toulouse et ses alentours
        </p>
      </section>

      {/* Presentation Section */}
      <section className="w-full min-h-screen flex items-center justify-center px-8 sm:px-16 py-20 z-10 mx-auto">
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 items-start">
          {/* Left: Synthesized Presentation Text */}
          <div className="text-sm sm:text-lg leading-relaxed text-foreground font-sans">
            Maquilleuse et coiffeuse professionnelle diplômée en lettres & arts,
            Madame Merlin conçoit chaque prestation comme une expérience artistique unique.
            Du maquillage naturel aux métamorphoses extravagantes, elle met sa créativité
            au service de la scène, du cinéma, de l’événementiel et du quotidien.
          </div>

          {/* Center: Image with Parallax Container */}
          <div className="flex justify-center items-center">
            <div
              ref={containerRef}
              className="relative w-full max-w-lg aspect-[3/4] overflow-hidden rounded-sm border border-[#f0e4d1]/10"
            >
              <div ref={imageRef} className="relative w-full h-full">
                <Image
                  src="/images/madame-merlin.png"
                  alt="Madame Merlin - Maquilleuse et Coiffeuse"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 512px"
                />
              </div>
            </div>
          </div>

          {/* Right: Social Icon */}
          <div className="flex md:justify-end justify-start items-start">
            <a
              href="https://www.instagram.com/madame.merlin/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-[#f0e4d1]/20 hover:border-[#fa9764] text-[#f0e4d1]/80 hover:text-[#fa9764] transition-colors"
              aria-label="Instagram de Madame Merlin"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
