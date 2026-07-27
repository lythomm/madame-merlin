"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "../components/Navbar";
import AboutWorkMarquee from "../components/AboutWorkMarquee";

export default function Apropos() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

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
    <div className="relative min-h-screen w-full text-[#f0e4d1] flex flex-col justify-between selection:bg-[#fa9764] selection:text-black">
      <Navbar />

      <main className="flex-1 flex flex-col items-center z-10 w-full">
        {/* Title Header */}
        <div className="pt-12 sm:pt-16 pb-8 text-center px-4">
          <span className="font-serif italic text-xl tracking-widest text-[#f0e4d1] mb-8 block lowercase">
            à propos
          </span>
          <h1 className="text-5xl sm:text-8xl lg:text-[13rem] font-normal tracking-wider text-primary uppercase">
            L&apos;Artiste
          </h1>
        </div>

        {/* Presentation Section (3/4 Text, 1/4 Photo Layout) */}
        <section
          ref={containerRef}
          className="w-full flex items-center justify-center px-8 sm:px-16 py-12 sm:py-20 z-10 mx-auto"
        >
          <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            {/* Left: Text taking 2/3 width (8 columns) */}
            <div
              ref={textRef}
              className="md:col-span-8 font-serif text-primary text-base sm:text-2xl lg:text-4xl leading-relaxed text-foreground will-change-transform transform-gpu"
            >
              Maquilleuse et coiffeuse professionnelle diplômée en lettres & arts,
              Madame Merlin conçoit chaque prestation comme une expérience artistique unique.
              Du maquillage naturel aux métamorphoses extravagantes, elle met sa créativité
              au service de la scène, du cinéma, de l’événementiel et du quotidien.
            </div>

            {/* Right: Image taking 1/3 width (4 columns) */}
            <div className="md:col-span-4 flex justify-center items-center">
              <div className="relative w-full max-w-md aspect-[3/4] overflow-hidden rounded-sm">
                <Image
                  src="/images/about/about-0.png"
                  alt="Madame Merlin - Maquilleuse et Coiffeuse"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Intérêts & Univers Scénique */}
        <section className="w-full py-20 px-8 sm:px-16 border-t border-[#f0e4d1]/10">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-start justify-between">
            <div className="md:w-1/3">
              <span className="font-serif italic text-sm tracking-widest text-[#fa9764] mb-2 block lowercase">
                les origines
              </span>
              <h2 className="text-3xl sm:text-4xl font-normal uppercase tracking-wider text-[#f0e4d1]">
                Intérêts & Univers
              </h2>
            </div>
            <div className="md:w-2/3 text-sm sm:text-base lg:text-lg leading-relaxed text-[#f0e4d1]/80 font-sans space-y-6">
              <p>
                Depuis mon enfance je suis passionnée par la scène car j’ai grandi dans le milieu du spectacle vivant, ma mère ayant fait carrière au théâtre du Capitole en tant que costumière, et mon beau-père dans la musique.
              </p>
              <p>
                J’ai eu donc le privilège de découvrir un grand nombre de spectacles, ainsi que lors de mes pérégrinations dans de nombreux festivals (de musique et de théâtre), dans lesquels j’ai pu m’investir en tant que maquilleuse pour enfants, coiffure, décoration des sites. Le maquillage d’effets spéciaux et la perruque ont été une vraie révélation et ont suscité en moi un vif intérêt pour ce milieu.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Expérience & Savoir-faire */}
        <section className="w-full py-20 px-8 sm:px-16 border-t border-[#f0e4d1]/10">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-start justify-between">
            <div className="md:w-1/3">
              <span className="font-serif italic text-sm tracking-widest text-[#fa9764] mb-2 block lowercase">
                parcours professionnel
              </span>
              <h2 className="text-3xl sm:text-4xl font-normal uppercase tracking-wider text-[#f0e4d1]">
                Expérience & Savoir-faire
              </h2>
            </div>
            <div className="md:w-2/3 text-sm sm:text-base lg:text-lg leading-relaxed text-[#f0e4d1]/80 font-sans space-y-6">
              <p>
                J’ai eu la chance de découvrir, lors d’un stage à l’Atelier 69 à Paris, le maquillage d’effets spéciaux et la perruque. J’ai pu réaliser une moustache (poilage), sculpter une prothèse visage, implanter une perruque, effectuer des prises d’empreintes d’un comédien (pieds et buste), et appris les techniques d’implantation de poils dans du silicone.
              </p>
              <p>
                J’ai obtenu en candidat libre le CAP coiffure. Grâce à ce diplôme j’ai pu travailler dans un salon professionnel à Revel durant plusieurs mois. Parallèlement, j’ai pris le temps de me former en maquillage et j’ai pu découvrir multiples techniques de travail par le biais de plusieurs mises en situation. Outre le maquillage d’effets spéciaux, je me suis formée au maquillage beauté, scénique, artistique et historique.
              </p>
              <p>
                J’ai beaucoup pratiqué et enrichi mes capacités, rencontré cinéastes, chanteurs, photographes et modèles. J’ai aussi eu l’opportunité de travailler sur un long métrage « Au mérite » en 2020. Également, j’ai eu la chance de travailler aux côtés de musiciens durant leurs clips musicaux. Plusieurs photographes me font confiance depuis, et je suis en relation avec quelques boîtes de production également.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Scrolling Photos Marquee (about-work-1 to 13) */}
        <AboutWorkMarquee />
      </main>

    </div>
  );
}
