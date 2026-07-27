"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "./components/Navbar";
import HomeGalleryParallax from "./components/HomeGalleryParallax";
import ServicesSection from "./components/ServicesSection";
import TestimonialsMarquee from "./components/TestimonialsMarquee";
import Link from "next/link";

const PRESTATIONS = [
  {
    num: "01",
    title: "Maquillage Cinéma / Clip",
    forfait: "Forfait à la journée",
    price: "350 € / j",
    description: "Maquillage des acteurs, danseurs et artistes suivant leurs rôles durant le tournage.",
  },
  {
    num: "02",
    title: "Maquillage Effets Spéciaux",
    forfait: "Forfait",
    price: "100 - 150 €",
    description: "Maquillage d’horreur, effet fatigue. Réalisation de blessures superficielles aux plus graves.",
  },
  {
    num: "03",
    title: "Maquillage Artistique",
    forfait: "Forfait à partir de (ou forfait à la journée)",
    price: "90 - 120 €",
    description: "Maquillage pour projets photographiques. Face ou body painting, maquillage enfants / événements.",
  },
  {
    num: "04",
    title: "Maquillage Mode / Beauté",
    forfait: "Forfait à partir de",
    price: "70 €",
    description: "Mise en beauté durant un shooting ou pour un événement.",
  },
  {
    num: "05",
    title: "Coupe (Tarifs non genrés)",
    forfait: "À partir de",
    price: "25 €",
    description: "Infos événement en publication Instagram (Supplément de 10 € à l’atelier).",
  },
];

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [variant, setVariant] = useState<"v1" | "v2" | "v3">("v1");

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      if (textRef.current && containerRef.current) {
        gsap.fromTo(
          textRef.current,
          { y: 60 },
          {
            y: -60,
            ease: "none",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
              invalidateOnRefresh: true,
            },
          }
        );
      }
    });

    return () => mm.revert();
  }, []);

  return (
    <div className="relative min-h-screen w-full text-[#f0e4d1] block selection:bg-[#fa9764] selection:text-black">
      {/* Header Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section className="min-h-[50vh] md:min-h-[85vh] flex flex-col items-center justify-center text-center px-4 z-10">
        <h1 className="text-7xl md:text-8xl lg:text-[14rem] font-normal tracking-wider text-primary uppercase leading-[0.9] select-none">
          MADAME <br />MERLIN
        </h1>

        <p className="font-italianno text-3xl sm:text-4xl md:text-5xl text-[#f0e4d1]/90 mt-12">
          Maquilleuse, Coiffeuse et Styliste artistique
        </p>
      </section>

      {/* Presentation Section */}
      <section
        ref={containerRef}
        className="w-full min-h-screen flex items-center justify-center px-8 sm:px-16 py-20 z-10 mx-auto"
      >
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 items-center">
          <div
            ref={textRef}
            className="text-sm sm:text-lg leading-relaxed text-foreground font-sans will-change-transform transform-gpu"
          >
            Maquilleuse et coiffeuse professionnelle diplômée en lettres & arts,
            Madame Merlin conçoit chaque prestation comme une expérience artistique unique.
            Du maquillage naturel aux métamorphoses extravagantes, elle met sa créativité
            au service de la scène, du cinéma, de l’événementiel et du quotidien.
          </div>

          <div className="flex justify-center items-center">
            <div className="relative w-full max-w-lg aspect-[3/4] overflow-hidden rounded-sm">
              <Image
                src="/images/madame-merlin.jpg"
                alt="Madame Merlin - Maquilleuse et Coiffeuse"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 512px"
              />
            </div>
          </div>

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

      {/* Photo Gallery Section with 3D Depth Parallax */}
      <HomeGalleryParallax />

      {/* Services Section with Horizontal Fan Scroll */}
      <ServicesSection />

      {/* Prestations Section (Split Showcase Layout & Tarifs) */}
      <section id="prestations" className="w-full py-24 px-6 sm:px-16 mx-auto z-10">
        <div className="flex flex-col items-center mb-16 text-center">
          <span className="font-serif italic text-sm tracking-widest text-[#f0e4d1] mb-2 lowercase">
            grille tarifaire
          </span>
          <h2 className="text-3xl sm:text-5xl font-normal uppercase tracking-wider text-[#fa9764]">
            Prestations & Tarifs
          </h2>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Sticky Left Column */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 p-8 rounded-sm border border-[#f0e4d1]/10 bg-[#0d0d0d]">
            <span className="text-xs uppercase tracking-widest text-[#fa9764]">
              Sur Mesure
            </span>
            <h3 className="font-serif text-3xl text-[#f0e4d1] mt-2 mb-4">
              Réservation & Projets
            </h3>
            <p className="text-sm text-[#f0e4d1]/75 leading-relaxed font-sans mb-8">
              Des prestations adaptées à vos besoins pour le cinéma, la scène, les événements ou les shootings studio.
            </p>
            <Link
              href="/contact"
              className="block text-center w-full py-3 px-6 bg-[#fa9764] text-black font-medium text-xs uppercase tracking-widest rounded-full hover:bg-[#fa9764]/90 transition-colors"
            >
              Prendre rendez-vous
            </Link>
          </div>

          {/* Right Cards Column */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            {PRESTATIONS.map((item, index) => (
              <div
                key={index}
                className="p-8 rounded-sm border border-[#f0e4d1]/10 bg-[#0d0d0d] flex flex-col gap-4 hover:border-[#fa9764]/40 transition-colors"
              >
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <span className="text-xs font-serif text-[#fa9764] mr-3">
                      {item.num}
                    </span>
                    <span className="text-xs uppercase tracking-widest text-[#f0e4d1]/50 border border-[#f0e4d1]/10 px-2.5 py-0.5 rounded-full">
                      {item.forfait}
                    </span>
                    <h4 className="font-serif text-2xl text-[#f0e4d1] mt-2">
                      {item.title}
                    </h4>
                  </div>
                  <span className="text-2xl font-semibold text-[#fa9764] whitespace-nowrap">
                    {item.price}
                  </span>
                </div>
                <p className="text-sm text-[#f0e4d1]/75 leading-relaxed font-sans">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-24 mx-auto">
        <div className="flex flex-col items-center mb-12 text-center px-6">
          <span className="font-serif italic text-sm tracking-widest text-[#f0e4d1] mb-2 lowercase">
            avis & retours
          </span>
          <h2 className="text-3xl sm:text-5xl font-normal uppercase tracking-wider text-[#fa9764]">
            Témoignages
          </h2>
        </div>

        <TestimonialsMarquee />
      </section>
    </div>
  );
}
