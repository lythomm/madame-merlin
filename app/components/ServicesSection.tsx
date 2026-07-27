"use client";

import { useState, useRef, useEffect, TouchEvent, MouseEvent } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ServiceImage {
  id: number;
  src: string;
  alt: string;
}

const SERVICE_IMAGES: ServiceImage[] = [
  {
    id: 0,
    src: "/images/services/0.jpg",
    alt: "Service Maquillage Cinéma & Clip"
  },
  {
    id: 1,
    src: "/images/services/1.jpg",
    alt: "Service Effets Spéciaux SFX"
  },
  {
    id: 2,
    src: "/images/services/2.jpg",
    alt: "Service Maquillage Artistique"
  },
  {
    id: 3,
    src: "/images/services/3.jpg",
    alt: "Service Maquillage Mode & Beauté"
  },
  {
    id: 4,
    src: "/images/services/4.jpg",
    alt: "Service Coiffure & Stylisme"
  },
];

export default function ServicesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const isDragging = useRef(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % SERVICE_IMAGES.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + SERVICE_IMAGES.length) % SERVICE_IMAGES.length);
  };

  // Touch & Swipe handlers
  const onTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const onTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 40;

    if (distance > minSwipeDistance) {
      handleNext();
    } else if (distance < -minSwipeDistance) {
      handlePrev();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  // Mouse Drag handlers for Desktop
  const onMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    isDragging.current = true;
    touchStartX.current = e.clientX;
  };

  const onMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!isDragging.current) return;
    touchEndX.current = e.clientX;
  };

  const onMouseUp = () => {
    if (!isDragging.current) return;
    isDragging.current = false;
    if (touchStartX.current && touchEndX.current) {
      const distance = touchStartX.current - touchEndX.current;
      const minSwipeDistance = 40;
      if (distance > minSwipeDistance) {
        handleNext();
      } else if (distance < -minSwipeDistance) {
        handlePrev();
      }
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  // Calculate fan style position for image relative to active index
  const getFanStyle = (index: number) => {
    const total = SERVICE_IMAGES.length;
    let diff = index - currentIndex;

    // Wrap diff to range around current index for infinite carousel effect
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;

    const absDiff = Math.abs(diff);

    // Responsive fan spacing and angles
    const rotateDeg = isMobile ? diff * 9 : diff * 12; // 12 deg fan spread
    const spacingX = isMobile ? diff * 90 : diff * 210; // Spaced out images
    const spacingY = Math.pow(absDiff, 1.3) * (isMobile ? 14 : 24); // Curved arch
    const scale = diff === 0 ? 1.05 : Math.max(0.78, 1 - absDiff * 0.08);
    const zIndex = 50 - absDiff * 10;

    return {
      transform: `translate3d(calc(-50% + ${spacingX}px), ${spacingY}px, 0) rotate(${rotateDeg}deg) scale(${scale})`,
      zIndex: zIndex,
      opacity: 1, // 100% full opacity on all images
    };
  };

  return (
    <section id="services" className="relative w-full py-20 bg-black text-[#f0e4d1] overflow-hidden z-20 select-none">
      {/* Section Header */}
      <div className="max-w-6xl mx-auto px-6 sm:px-16 flex flex-col items-center text-center mb-8 sm:mb-12">
        <span className="font-serif italic text-sm tracking-widest text-[#f0e4d1] mb-2 lowercase">
          savoir-faire & univers
        </span>
        <h2 className="text-3xl sm:text-5xl font-normal uppercase tracking-wider text-[#fa9764] ">
          Mes services
        </h2>
      </div>

      {/* Fan Carousel Container */}
      <div
        className="relative w-full h-[400px] sm:h-[480px] md:h-[680px] flex items-center justify-center cursor-grab active:cursor-grabbing"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
      >
        {SERVICE_IMAGES.map((item, index) => {
          return (
            <div
              key={item.id}
              onClick={() => setCurrentIndex(index)}
              style={getFanStyle(index)}
              className="absolute left-1/2 top-10 md:top-12 w-[210px] sm:w-[270px] md:w-[320px] lg:w-[480px] aspect-[3/4] overflow-hidden rounded-md shadow-[0_20px_50px_rgba(0,0,0,0.9)] border border-white/10 transition-transform duration-500 ease-out cursor-pointer hover:border-[#fa9764]/60"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover pointer-events-none"
                sizes="(max-width: 768px) 270px, 360px"
                priority={index === 0}
              />
            </div>
          );
        })}

        {/* Navigation Buttons Left & Right */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            handlePrev();
          }}
          className="absolute left-4 sm:left-12 md:left-20 top-1/2 -translate-y-1/2 z-50 p-3 sm:p-4 rounded-full bg-black/60 border border-[#f0e4d1]/20 text-[#f0e4d1] hover:text-[#fa9764] hover:border-[#fa9764] hover:bg-black/90 transition-all duration-300 backdrop-blur-sm focus:outline-none"
          aria-label="Service précédent"
        >
          <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
        </button>

        <button
          onClick={(e) => {
            e.stopPropagation();
            handleNext();
          }}
          className="absolute right-4 sm:right-12 md:right-20 top-1/2 -translate-y-1/2 z-50 p-3 sm:p-4 rounded-full bg-black/60 border border-[#f0e4d1]/20 text-[#f0e4d1] hover:text-[#fa9764] hover:border-[#fa9764] hover:bg-black/90 transition-all duration-300 backdrop-blur-sm focus:outline-none"
          aria-label="Service suivant"
        >
          <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
        </button>
      </div>
    </section>
  );
}
