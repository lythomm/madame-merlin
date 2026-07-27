"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface GalleryItem {
  id: number;
  src: string;
  depth: "fg" | "mid" | "bg";
  aspect: string;
  sizeClass: string;
  offsetClass: string;
}

const ITEMS: GalleryItem[] = [
  {
    id: 1,
    src: "/images/galerie/3617035372260771681_3616962877189256485.jpg",
    depth: "bg",
    aspect: "aspect-[3/4]",
    sizeClass: "col-span-1 md:col-span-4",
    offsetClass: "z-10",
  },
  {
    id: 2,
    src: "/images/galerie/3646915362951454325_3646915342600687415.jpg",
    depth: "fg",
    aspect: "aspect-square",
    sizeClass: "col-span-1 md:col-span-5",
    offsetClass: "z-30 md:-mt-12 md:-ml-8 shadow-2xl md:scale-105 border-[#fa9764]/30",
  },
  {
    id: 3,
    src: "/images/galerie/3680073694520194588_3680073682440524551.jpg",
    depth: "mid",
    aspect: "aspect-[2/3]",
    sizeClass: "col-span-1 md:col-span-3",
    offsetClass: "z-20 md:mt-8",
  },
  {
    id: 4,
    src: "/images/galerie/3686776730702755968_3686776713036390855.jpg",
    depth: "fg",
    aspect: "aspect-[4/3]",
    sizeClass: "col-span-1 md:col-span-6",
    offsetClass: "z-30 md:mt-16 md:-mr-10 shadow-2xl md:scale-110 border-[#fa9764]/40",
  },
  {
    id: 5,
    src: "/images/galerie/3696246013157430720_3696246000935183983.jpg",
    depth: "bg",
    aspect: "aspect-[3/4]",
    sizeClass: "col-span-1 md:col-span-3",
    offsetClass: "z-10 md:-mt-10",
  },
  {
    id: 6,
    src: "/images/galerie/3696246013157430720_3696246001044102650.jpg",
    depth: "mid",
    aspect: "aspect-square",
    sizeClass: "col-span-1 md:col-span-3",
    offsetClass: "z-20 md:mt-6",
  },
  {
    id: 7,
    src: "/images/galerie/3704174421064462706_3704087335074289067.jpg",
    depth: "fg",
    aspect: "aspect-[2/3]",
    sizeClass: "col-span-1 md:col-span-4",
    offsetClass: "z-30 md:-mt-16 md:-ml-6 shadow-2xl md:scale-105 border-[#fa9764]/30",
  },
  {
    id: 8,
    src: "/images/galerie/3725917542289316017_3725695068830278939.jpg",
    depth: "bg",
    aspect: "aspect-[4/5]",
    sizeClass: "col-span-1 md:col-span-4",
    offsetClass: "z-10 md:mt-14",
  },
  {
    id: 9,
    src: "/images/galerie/3735351995897750071_3735351974422967123.jpg",
    depth: "mid",
    aspect: "aspect-[3/4]",
    sizeClass: "col-span-1 md:col-span-4",
    offsetClass: "z-20 md:-mt-8",
  },
  {
    id: 10,
    src: "/images/galerie/3737514260633418054_3737514235283040184.jpg",
    depth: "fg",
    aspect: "aspect-square",
    sizeClass: "col-span-1 md:col-span-5",
    offsetClass: "z-30 md:mt-8 md:-mr-6 shadow-2xl md:scale-110 border-[#fa9764]/40",
  },
  {
    id: 11,
    src: "/images/galerie/3760737241573169498_3760598823493025737.jpg",
    depth: "bg",
    aspect: "aspect-[2/3]",
    sizeClass: "col-span-1 md:col-span-3",
    offsetClass: "z-10 md:-mt-12",
  },
  {
    id: 12,
    src: "/images/galerie/3762224379477139821_3762224364729975417.jpg",
    depth: "mid",
    aspect: "aspect-[4/3]",
    sizeClass: "col-span-1 md:col-span-4",
    offsetClass: "z-20 md:mt-12",
  },
  {
    id: 13,
    src: "/images/galerie/3768049555657787378_3768049548292626927.jpg",
    depth: "fg",
    aspect: "aspect-[3/4]",
    sizeClass: "col-span-1 md:col-span-5",
    offsetClass: "z-30 md:-mt-14 md:-ml-8 shadow-2xl md:scale-105 border-[#fa9764]/30",
  },
  {
    id: 14,
    src: "/images/galerie/3796975767557891623_3796803125206942519.jpg",
    depth: "mid",
    aspect: "aspect-square",
    sizeClass: "col-span-1 md:col-span-3",
    offsetClass: "z-20 md:mt-4",
  },
  {
    id: 15,
    src: "/images/galerie/3846858404870112301_3846856561725890248.jpg",
    depth: "bg",
    aspect: "aspect-[2/3]",
    sizeClass: "col-span-1 md:col-span-4",
    offsetClass: "z-10 md:-mt-6",
  },
];

export default function HomeGalleryParallax() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      if (!sectionRef.current) return;

      const items = sectionRef.current.querySelectorAll<HTMLElement>("[data-parallax]");

      items.forEach((item) => {
        const depth = item.getAttribute("data-depth");
        let yMove = 60;

        if (depth === "fg") {
          yMove = 120; // Foreground
        } else if (depth === "mid") {
          yMove = 60; // Midground
        } else {
          yMove = 20; // Background
        }

        gsap.fromTo(
          item,
          { y: yMove },
          {
            y: -yMove,
            ease: "none",
            scrollTrigger: {
              trigger: item,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
              invalidateOnRefresh: true,
            },
          }
        );
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-32 px-6 sm:px-16 mx-auto z-10 overflow-hidden">
      <div className="flex flex-col items-center mb-24 text-center">
        <span className="font-serif italic text-sm tracking-widest text-[#fa9764] mb-2 lowercase">
          portfolio
        </span>
        <h2 className="text-3xl sm:text-5xl font-normal uppercase tracking-wider text-[#f0e4d1]">
          Galerie de Créations
        </h2>
      </div>

      {/* Overlapping Asymmetric Parallax Layout Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center mx-auto py-10">
        {ITEMS.map((item, index) => (
          <div
            key={item.id}
            data-parallax
            data-depth={item.depth}
            className={`${item.sizeClass} ${item.offsetClass} ${index >= 5 ? "hidden md:block" : ""} will-change-transform transform-gpu`}
          >
            <div className={`relative w-full ${item.aspect} overflow-hidden rounded-sm bg-[#0d0d0d]`}>
              <Image
                src={item.src}
                alt={`Création Madame Merlin ${item.id}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Explorer Button */}
      <div className="flex justify-center mt-28 z-40 relative">
        <Link
          href="/galerie"
          className="px-10 py-4 border border-[#fa9764] text-[#fa9764] hover:bg-[#fa9764] hover:text-black transition-all duration-300 text-sm uppercase tracking-widest rounded-full font-medium"
        >
          Explorer la galerie
        </Link>
      </div>
    </section>
  );
}
