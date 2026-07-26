"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

interface Testimonial {
  quote: string;
  author: string;
}

const TESTIMONIALS = [
  {
    quote: "La meilleure ! Je viens de Paris exprès pour me faire coiffer et maquiller par Madame Merlin et je ne suis jamais déçue ! Un amour de personne et une excellente professionnelle, vraiment allez-y les yeux fermés.",
    author: "Flavie Morato",
  },
  {
    quote: "Une personne incroyable qui a des doigts de fée. Elle s'est occupée de mes cheveux, de la mise en beauté pour mon mariage et d'un magnifique dessin fait sur mon ventre de grossesse. Douée, adorable et profondément humaine !",
    author: "Ilona Tbr",
  },
  {
    quote: "La meilleure coiffeuse-maquilleuse de Toulouse ! Sans aucun doute, foncez la voir ! Elle est humaine, douce, généreuse, et en plus de tout ça elle est super douée !",
    author: "Claire Authier",
  },
  {
    quote: "Une vraie pro ! Que ce soit en événement, en tournage, pour des projets artistiques ou pour une coiffure de tous les jours, c'est à chaque fois un réel plaisir de faire appel à ses services.",
    author: "Derboule Mathys",
  },
  {
    quote: "C’est la personne la plus bienveillante, à l’écoute et douce que j’ai pu rencontrer. Sa passion pour ce qui est fun, coloré, artistique et sort du cadre donne des feux d’artifice qui font briller les yeux !",
    author: "Agnès Santamaria",
  },
  {
    quote: "Madame Merlin est extrêmement bienveillante et à l'écoute de nos attentes. Son travail est incroyable et elle est parfaite pour tout projet original et créatif. Je recommande les yeux fermés !",
    author: "Éris Sf",
  },
  {
    quote: "Un soleil aux multiples talents ! Un accueil plein d'une douceur égale, un coup de ciseaux efficace cernant parfaitement ce qui colle à qui l'on est. Totale confiance côté créatif.",
    author: "Ixa Jo",
  },
  {
    quote: "Quelle belle découverte ! Madame Merlin est une si belle personne : gentille, attentionnée et prévenante. Faites-lui confiance, elle va vous transformer et vous embellir !",
    author: "Julie Tournier",
  },
  {
    quote: "Je recommande Madame Merlin à 100 % ! Elle est jeune et super talentueuse. Des tarifs non genrés et ça on adore !",
    author: "Anaëlle Jeannin",
  },
  {
    quote: "Une personne très pro, à l'écoute. Je lui confie mes cheveux avec confiance et les yeux fermés ! Je vous la recommande fortement !",
    author: "Tilia Weevers",
  },
  {
    quote: "Super coiffeuse à l'écoute qui fait toujours du super boulot. Elle offre des tarifs non genrés, sait s'adapter à la mobilité de ses clients et c'est toujours agréable de discuter avec elle.",
    author: "Marie François",
  },
  {
    quote: "Très à l'écoute et très gentille. Elle a directement compris ce que je voulais et vérifiait régulièrement tout au long de la coupe si on était sur la même longueur d'onde.",
    author: "Loume Boub",
  },
  {
    quote: "Toujours un régal de venir ici ! Coiffure méga stylée avant mon concert ce week-end !",
    author: "Gaspashow",
  },
  {
    quote: "Tu es accueilli.e dans un lieu tout en douceur. Elle t'accompagne dans tes choix de coupes, couleurs, et t'aide à prendre confiance capillairement !",
    author: "Agathe Fabre",
  },
  {
    quote: "Madame Merlin est douce, à l'écoute et très sympa. Je suis venue pour une coupe très courte et j'en suis repartie ravie les deux fois. Je la recommande vivement !",
    author: "Maureen Chaumat",
  },
];

export default function TestimonialsMarquee({
  items = TESTIMONIALS,
}: {
  items?: Testimonial[];
}) {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!trackRef.current) return;

    const ctx = gsap.context(() => {
      // Smooth infinite horizontal scroll from right to left
      gsap.to(trackRef.current, {
        xPercent: -50,
        repeat: -1,
        duration: 160,
        ease: "none",
      });
    });

    return () => ctx.revert();
  }, []);

  // Double items array to ensure seamless looping without gap
  const doubledItems = [...items, ...items];

  return (
    <div className="w-full overflow-hidden py-8 relative">
      {/* Gradient masks for smooth edge fade */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l z-10 pointer-events-none" />

      <div ref={trackRef} className="flex w-max items-stretch">
        {doubledItems.map((item, index) => (
          <div
            key={index}
            className="flex-none w-[360px] sm:w-[480px] p-8 sm:p-10 rounded-sm bg-[#0d0d0d] border border-[#f0e4d1]/10 flex flex-col justify-between items-center text-center mx-4 select-none group hover:border-[#fa9764]/40 transition-colors"
          >
            {/* 5 Stars Header */}
            <div className="flex items-center gap-1.5 mb-6 text-primary">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-4 h-4 fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              ))}
            </div>

            {/* Quote Block with Quotes Framing */}
            <div className="relative px-4 my-auto">
              <span className="absolute -top-4 -left-2 text-2xl font-serif text-primary">
                “
              </span>
              <p className="font-serif uppercase text-lg sm:text-xl tracking-wider leading-snug text-primary">
                {item.quote}
              </p>
              <span className="absolute -top-4 -right-2 text-2xl font-serif text-primary">
                ”
              </span>
            </div>

            {/* Author Name Footer */}
            <div className="mt-4 w-full text-center">
              <h4 className="text-xs uppercase tracking-widest text-[#f0e4d1] font-sans font-medium">
                {item.author}
              </h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
