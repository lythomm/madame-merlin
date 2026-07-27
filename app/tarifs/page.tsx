import Navbar from "../components/Navbar";
import Link from "next/link";
import { Scissors, Sparkles, GraduationCap, Info, MapPin, Calendar, Clock, HeartHandshake } from "lucide-react";

const COIFFURE_TARIFS = [
  { title: "Coupe en événement", price: "25 €", description: "Coupe et coiffant." },
  { title: "Coupe à l'atelier", price: "35 €", description: "Coupe et séchage / coiffant." },
  { title: "Coupe + Shampoing/Soin", price: "40 €", description: "Shampooing + soin + coupe + séchage." },
  { title: "Barbe au coupe-choux", price: "12 €", description: "Taille et entretien de barbe." },
  { title: "Brushing", price: "15 €", description: "Mise en forme des cheveux." },
  { title: "Soin au bac (masque)", price: "3,50 €", description: "Soin capillaire nourrissant." },
  { title: "Shampoing", price: "3 €", description: "Lavage simple." },
];

const EVENEMENT_PHOTO_TARIFS = [
  {
    title: "Maquillage Beauté",
    price: "70 €",
    detail: "Teint, yeux, lèvres - style naturel",
  },
  {
    title: "Maquillage Artistique",
    price: "90 € - 120 €",
    detail: "Formes graphiques, paillettes, éléments créatifs, bellypainting",
  },
  {
    title: "Effets Spéciaux (SFX)",
    price: "100 € - 150 €",
    detail: "Latex, faux sang, textures - selon demande",
  },
  {
    title: "Coiffure Simple",
    price: "50 €",
    detail: "Sans accessoires - Boucles, tresses, coiffage sur cheveux secs",
  },
  {
    title: "Coiffure Élaborée",
    price: "70 € - 90 €",
    detail: "Avec accessoires - Chignons, structure, création de volume",
  },
  {
    title: "Formule Complète (Maquillage + Coiffure)",
    price: "110 € - 150 €",
    detail: "Selon complexité, durée et style",
  },
  {
    title: "Conseil & Stylisme (Optionnel)",
    price: "30 €",
    detail: "Moodboard ou sélection tenues/accessoires à l'avance",
  },
];

const COURS_MAQUILLAGE = [
  {
    title: "Maquillage Beauté Débutant",
    duration: "1h30 à 2h",
    rates: [
      { pax: "1 personne", price: "90 €" },
      { pax: "2 personnes", price: "80 € / pers." },
      { pax: "3 personnes", price: "70 € / pers." },
    ],
  },
  {
    title: "Maquillage Artistique (Niv. 1 & Niv. 2)",
    duration: "1h30 à 2h",
    rates: [
      { pax: "1 personne", price: "100 €" },
      { pax: "2 personnes", price: "90 € / pers." },
      { pax: "3 personnes", price: "80 € / pers." },
    ],
  },
];

const INFOS_PRATIQUES = [
  { icon: Calendar, title: "Prise de RDV", text: "Uniquement par Instagram (@madame.merlin) ou par SMS." },
  { icon: MapPin, title: "Localisation", text: "À l'atelier (Croix-Daurade, Toulouse) ou en événements." },
  { icon: Clock, title: "Durée Atelier", text: "Environ 45 min par personne pour une prestation sur mesure." },
  { icon: Sparkles, title: "Acompte", text: "Frais de réservation de 10 € pour bloquer votre créneau." },
  { icon: HeartHandshake, title: "Échange & Troc", text: "Échange de prestations possible. Troc & Air sous contrat." },
  { icon: Info, title: "Événements", text: "Mis à jour chaque début de mois en publication Instagram épinglée." },
];

const ATELIER_BENEFITS = [
  "Rendez-vous individualisé, plus personnalisé",
  "Environnement plus calme et plus doux",
  "Horaire adapté à votre emploi du temps",
  "Un temps de prestation plus long",
  "Accès à plus de matériel et de produits qu'en événement",
  "Confort d'un espace dédié, sans attente ni précipitation",
  "Moment de détente rien que pour toi, loin de l'agitation",
  "Facilité pour planifier en avance et garantir sa place",
];

const EVENEMENT_BENEFITS = [
  "Découverte d'un nouveau lieu & ambiance unique",
  "Lieu souvent très accessible en ville",
  "Tarifs préférentiels et attractifs",
  "Plus de créneaux disponibles dans la journée",
  "Ambiance conviviale et dynamique",
  "Possibilité de venir entre ami(e)s et partager l'expérience",
  "Sans RDV à l'avance, viens quand tu veux",
  "Idéal pour une coupe ou coiffure express sans engagement",
];

export default function Tarifs() {
  return (
    <div className="relative min-h-screen w-full text-[#f0e4d1] flex flex-col justify-between selection:bg-[#fa9764] selection:text-black">
      <Navbar />

      <main className="flex-1 px-6 sm:px-12 py-16 sm:py-24 z-10 max-w-7xl mx-auto w-full space-y-24">
        {/* Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <span className="font-serif italic text-base sm:text-lg tracking-widest text-[#f0e4d1] mb-3 lowercase">
            grille tarifaire
          </span>
          <h1 className="text-5xl sm:text-7xl font-normal uppercase tracking-wider text-[#fa9764] mb-6">
            Prestations & Tarifs
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-[#f0e4d1]/80 font-sans leading-relaxed">
            Tarifs non genrés et accessibles. Prestations sur mesure à l’atelier (Croix-Daurade) ou lors d’événements.
          </p>
        </div>

        {/* Section 1: Coiffure */}
        <section className="space-y-8">
          <div className="flex items-center gap-3 border-b border-[#f0e4d1]/15 pb-4">
            <Scissors className="text-[#fa9764] w-7 h-7 sm:w-8 sm:h-8" />
            <h2 className="font-serif text-3xl sm:text-4xl text-[#fa9764] uppercase tracking-wider">
              Coiffure
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {COIFFURE_TARIFS.map((item, index) => (
              <div
                key={index}
                className="p-8 rounded-sm border border-[#f0e4d1]/15 bg-[#0d0d0d] flex flex-col justify-between hover:border-[#fa9764]/50 transition-colors"
              >
                <div className="flex justify-between items-start gap-4 mb-3">
                  <h3 className="font-serif text-xl sm:text-2xl text-[#f0e4d1]">{item.title}</h3>
                  <span className="text-2xl sm:text-3xl font-semibold text-[#fa9764] whitespace-nowrap">
                    {item.price}
                  </span>
                </div>
                <p className="text-sm sm:text-base text-[#f0e4d1]/80 font-sans leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 2: Événement & Photo */}
        <section className="space-y-8">
          <div className="flex items-center gap-3 border-b border-[#f0e4d1]/15 pb-4">
            <Sparkles className="text-[#fa9764] w-7 h-7 sm:w-8 sm:h-8" />
            <h2 className="font-serif text-3xl sm:text-4xl text-[#fa9764] uppercase tracking-wider">
              Événement, Shooting & Photo
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {EVENEMENT_PHOTO_TARIFS.map((item, index) => (
              <div
                key={index}
                className="p-8 rounded-sm border border-[#f0e4d1]/15 bg-[#0d0d0d] flex flex-col justify-between hover:border-[#fa9764]/50 transition-colors"
              >
                <div className="flex justify-between items-start gap-4 mb-3">
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#f0e4d1]">{item.title}</h3>
                  <span className="text-2xl sm:text-3xl font-semibold text-[#fa9764] whitespace-nowrap">
                    {item.price}
                  </span>
                </div>
                <p className="text-base sm:text-lg text-[#f0e4d1]/80 font-sans leading-relaxed">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Cours de Maquillage */}
        <section className="space-y-8">
          <div className="flex items-center gap-3 border-b border-[#f0e4d1]/15 pb-4">
            <GraduationCap className="text-[#fa9764] w-7 h-7 sm:w-8 sm:h-8" />
            <h2 className="font-serif text-3xl sm:text-4xl text-[#fa9764] uppercase tracking-wider">
              Cours de Maquillage
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {COURS_MAQUILLAGE.map((cour, index) => (
              <div
                key={index}
                className="p-10 rounded-sm border border-[#f0e4d1]/15 bg-[#0d0d0d] flex flex-col justify-between space-y-8 hover:border-[#fa9764]/50 transition-colors"
              >
                <div>
                  <span className="text-xs sm:text-sm uppercase tracking-widest text-[#fa9764] font-medium px-3 py-1 rounded bg-[#fa9764]/10 border border-[#fa9764]/20">
                    Durée {cour.duration}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#f0e4d1] mt-4">{cour.title}</h3>
                </div>

                <div className="space-y-4 pt-6 border-t border-[#f0e4d1]/15">
                  {cour.rates.map((rate, i) => (
                    <div key={i} className="flex justify-between items-center text-base sm:text-lg font-sans">
                      <span className="text-[#f0e4d1]/90">{rate.pax}</span>
                      <span className="font-semibold text-xl sm:text-2xl text-[#fa9764]">{rate.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: Infos Pratiques */}
        <section className="space-y-8 pt-4">
          <div className="flex items-center gap-3 border-b border-[#f0e4d1]/15 pb-4">
            <Info className="text-[#fa9764] w-7 h-7 sm:w-8 sm:h-8" />
            <h2 className="font-serif text-3xl sm:text-4xl text-[#fa9764] uppercase tracking-wider">
              Infos Pratiques
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {INFOS_PRATIQUES.map((info, index) => {
              const Icon = info.icon;
              return (
                <div
                  key={index}
                  className="p-8 rounded-sm border border-[#f0e4d1]/15 bg-[#0d0d0d] flex flex-col gap-4"
                >
                  <Icon className="w-7 h-7 text-[#fa9764]" />
                  <h3 className="font-serif text-xl sm:text-2xl text-[#f0e4d1]">{info.title}</h3>
                  <p className="text-sm sm:text-base text-[#f0e4d1]/80 font-sans leading-relaxed">
                    {info.text}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Section 5: Comparative Atelier vs Événements */}
        <section className="space-y-10 pt-4">
          <div className="text-center max-w-2xl mx-auto">
            <span className="font-serif italic text-base sm:text-lg tracking-widest text-[#f0e4d1] mb-2 block lowercase">
              où me retrouver ?
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#fa9764] uppercase tracking-wider">
              Atelier VS Événements
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Atelier Card */}
            <div className="p-10 rounded-sm border border-[#fa9764]/40 bg-[#0d0d0d] space-y-8">
              <div>
                <span className="text-xs sm:text-sm uppercase tracking-widest text-[#fa9764] font-medium">
                  Croix-Daurade (Sur RDV)
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#f0e4d1] mt-2">Avantages à l'Atelier</h3>
              </div>
              <ul className="space-y-4 text-base sm:text-lg font-sans text-[#f0e4d1]/85">
                {ATELIER_BENEFITS.map((item, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <span className="text-[#fa9764] font-mono text-base font-bold mt-0.5">
                      0{index + 1}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Événements Card */}
            <div className="p-10 rounded-sm border border-[#f0e4d1]/15 bg-[#0d0d0d] space-y-8">
              <div>
                <span className="text-xs sm:text-sm uppercase tracking-widest text-[#fa9764] font-medium">
                  Sans RDV (Selon calendrier)
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#f0e4d1] mt-2">Avantages en Événements</h3>
              </div>
              <ul className="space-y-4 text-base sm:text-lg font-sans text-[#f0e4d1]/85">
                {EVENEMENT_BENEFITS.map((item, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <span className="text-[#fa9764] font-mono text-base font-bold mt-0.5">
                      0{index + 1}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Booking Call to Action */}
        <div className="p-12 rounded-sm border border-[#fa9764]/50 bg-gradient-to-r from-[#0d0d0d] via-[#141414] to-[#0d0d0d] text-center max-w-4xl mx-auto space-y-6">
          <h3 className="font-serif text-3xl sm:text-4xl text-[#f0e4d1]">
            Prêt(e) à réserver votre créneau ?
          </h3>
          <p className="text-base sm:text-lg text-[#f0e4d1]/85 max-w-2xl mx-auto font-sans leading-relaxed">
            S&apos;informer n&apos;engage à rien ! Contactez-moi sur Instagram ou via le formulaire de contact.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row justify-center items-center gap-6">
            <a
              href="https://www.instagram.com/madame.merlin/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 bg-[#fa9764] text-black font-semibold text-xs sm:text-sm uppercase tracking-widest rounded-full hover:bg-[#fa9764]/90 transition-colors"
            >
              Instagram @madame.merlin
            </a>
            <Link
              href="/contact"
              className="px-10 py-4 border border-[#f0e4d1]/40 text-[#f0e4d1] font-semibold text-xs sm:text-sm uppercase tracking-widest rounded-full hover:border-[#fa9764] hover:text-[#fa9764] transition-colors"
            >
              Me contacter
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
