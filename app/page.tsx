"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "./components/Navbar";
import TestimonialsMarquee from "./components/TestimonialsMarquee";
import Link from "next/link";

const GALLERY_MOCKS = [
  { id: 1, src: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=800&auto=format&fit=crop&q=80", aspect: "aspect-[3/4]" },
  { id: 2, src: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=800&auto=format&fit=crop&q=80", aspect: "aspect-square" },
  { id: 3, src: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&auto=format&fit=crop&q=80", aspect: "aspect-[2/3]" },
  { id: 4, src: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=800&auto=format&fit=crop&q=80", aspect: "aspect-[4/3]" },
  { id: 5, src: "https://images.unsplash.com/photo-1526045612212-70caf35c14df?w=800&auto=format&fit=crop&q=80", aspect: "aspect-[3/4]" },
  { id: 6, src: "https://images.unsplash.com/photo-1596704017254-9b121068fb31?w=800&auto=format&fit=crop&q=80", aspect: "aspect-square" },
  { id: 7, src: "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?w=800&auto=format&fit=crop&q=80", aspect: "aspect-[2/3]" },
  { id: 8, src: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=800&auto=format&fit=crop&q=80", aspect: "aspect-[4/5]" },
  { id: 9, src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&auto=format&fit=crop&q=80", aspect: "aspect-[3/4]" },
  { id: 10, src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&auto=format&fit=crop&q=80", aspect: "aspect-square" },
  { id: 11, src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&auto=format&fit=crop&q=80", aspect: "aspect-[2/3]" },
  { id: 12, src: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=800&auto=format&fit=crop&q=80", aspect: "aspect-[4/3]" },
  { id: 13, src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&auto=format&fit=crop&q=80", aspect: "aspect-[3/4]" },
  { id: 14, src: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800&auto=format&fit=crop&q=80", aspect: "aspect-square" },
  { id: 15, src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&auto=format&fit=crop&q=80", aspect: "aspect-[2/3]" },
  { id: 16, src: "https://images.unsplash.com/photo-1517445312882-bc9910d016b7?w=800&auto=format&fit=crop&q=80", aspect: "aspect-[4/5]" },
  { id: 17, src: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&auto=format&fit=crop&q=80", aspect: "aspect-[3/4]" },
  { id: 18, src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=80", aspect: "aspect-square" },
  { id: 19, src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&auto=format&fit=crop&q=80", aspect: "aspect-[2/3]" },
  { id: 20, src: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=800&auto=format&fit=crop&q=80", aspect: "aspect-[4/3]" },
];

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

    const ctx = gsap.context(() => {
      if (textRef.current && containerRef.current) {
        gsap.fromTo(
          textRef.current,
          { y: 200 },
          {
            y: -200,
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
    <div className="relative min-h-screen w-full text-[#f0e4d1] flex flex-col justify-between selection:bg-[#fa9764] selection:text-black">
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
      <section
        ref={containerRef}
        className="w-full min-h-screen flex items-center justify-center px-8 sm:px-16 py-20 z-10 mx-auto"
      >
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 items-center">
          <div
            ref={textRef}
            className="text-sm sm:text-lg leading-relaxed text-foreground font-sans"
          >
            Maquilleuse et coiffeuse professionnelle diplômée en lettres & arts,
            Madame Merlin conçoit chaque prestation comme une expérience artistique unique.
            Du maquillage naturel aux métamorphoses extravagantes, elle met sa créativité
            au service de la scène, du cinéma, de l’événementiel et du quotidien.
          </div>

          <div className="flex justify-center items-center">
            <div className="relative w-full max-w-lg aspect-[3/4] overflow-hidden rounded-sm border border-[#f0e4d1]/10">
              <Image
                src="/images/madame-merlin.png"
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

      {/* Photo Gallery Section */}
      <section className="w-full py-24 px-6 sm:px-12 mx-auto z-10">
        <div className="flex flex-col items-center mb-16 text-center">
          <span className="font-serif italic text-sm tracking-widest text-[#fa9764] mb-2 lowercase">
            portfolio
          </span>
          <h2 className="text-3xl sm:text-5xl font-normal uppercase tracking-wider text-[#f0e4d1]">
            Galerie de Créations
          </h2>
        </div>

        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {GALLERY_MOCKS.map((item) => (
            <div
              key={item.id}
              className={`relative w-full ${item.aspect} overflow-hidden rounded-sm border border-[#f0e4d1]/10 break-inside-avoid`}
            >
              <Image
                src={item.src}
                alt={`Création Madame Merlin ${item.id}`}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-20">
          <Link
            href="/galerie"
            className="px-10 py-4 border border-[#fa9764] text-[#fa9764] hover:bg-[#fa9764] hover:text-black transition-all duration-300 text-sm uppercase tracking-widest rounded-full font-medium"
          >
            Explorer la galerie
          </Link>
        </div>
      </section>

      {/* Prestations Section (Split Showcase Layout) */}
      <section className="w-full py-24 px-6 sm:px-16 mx-auto z-10">
        <div className="flex flex-col items-center mb-16 text-center">
          <span className="font-serif italic text-sm tracking-widest text-[#fa9764] mb-2 lowercase">
            services & tarifs
          </span>
          <h2 className="text-3xl sm:text-5xl font-normal uppercase tracking-wider text-[#f0e4d1]">
            Prestations
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
          <span className="font-serif italic text-sm tracking-widest text-[#fa9764] mb-2 lowercase">
            avis & retours
          </span>
          <h2 className="text-3xl sm:text-5xl font-normal uppercase tracking-wider text-[#f0e4d1]">
            Témoignages
          </h2>
        </div>

        <TestimonialsMarquee />
      </section>
    </div>
  );
}
