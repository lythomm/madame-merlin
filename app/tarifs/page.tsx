import Navbar from "../components/Navbar";

const PRESTATIONS = [
  {
    title: "Maquillage Cinéma / Clip",
    forfait: "Forfait à la journée",
    price: "350 € / j",
    description: "Maquillage des acteurs, danseurs et artistes suivant leurs rôles durant le tournage.",
  },
  {
    title: "Maquillage Effets Spéciaux",
    forfait: "Forfait",
    price: "100 - 150 €",
    description: "Maquillage d’horreur, effet fatigue. Réalisation de blessures superficielles aux plus graves.",
  },
  {
    title: "Maquillage Artistique",
    forfait: "Forfait à partir de (ou forfait à la journée)",
    price: "90 - 120 €",
    description: "Maquillage pour projets photographiques. Face ou body painting, maquillage enfants / événements.",
  },
  {
    title: "Maquillage Mode / Beauté",
    forfait: "Forfait à partir de",
    price: "70 €",
    description: "Mise en beauté durant un shooting ou pour un événement.",
  },
  {
    title: "Tarifs non genrés / Événement ou Atelier",
    forfait: "Coupe à partir de",
    price: "25 €",
    description: "Infos événement en publication Instagram (Supplément de 10 € à l’atelier).",
  },
];

export default function Tarifs() {
  return (
    <div className="relative min-h-screen w-full bg-[#0a0a0a] text-[#f0e4d1] flex flex-col justify-between selection:bg-[#fa9764] selection:text-black">
      <Navbar />

      <main className="flex-1 px-6 sm:px-16 py-20 z-10 max-w-6xl mx-auto w-full">
        <div className="flex flex-col items-center mb-16 text-center">
          <span className="font-serif italic text-sm tracking-widest text-[#fa9764] mb-2 lowercase">
            grille tarifaire
          </span>
          <h1 className="text-4xl sm:text-6xl font-normal uppercase tracking-wider text-[#fa9764] mb-4">
            Prestations & Tarifs
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PRESTATIONS.map((item, index) => (
            <div
              key={index}
              className="p-8 rounded-sm border border-[#f0e4d1]/10 bg-[#0d0d0d] flex flex-col justify-between transition-colors hover:border-[#fa9764]/40"
            >
              <div>
                <div className="flex justify-between items-start mb-3 gap-4">
                  <h3 className="font-serif text-xl sm:text-2xl text-[#f0e4d1]">
                    {item.title}
                  </h3>
                  <span className="text-xl sm:text-2xl font-semibold text-[#fa9764] whitespace-nowrap">
                    {item.price}
                  </span>
                </div>
                <span className="inline-block text-xs uppercase tracking-widest text-[#fa9764]/80 mb-4 px-3 py-1 rounded-full bg-[#fa9764]/10 border border-[#fa9764]/20">
                  {item.forfait}
                </span>
                <p className="text-sm sm:text-base text-[#f0e4d1]/75 leading-relaxed font-sans mt-2">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="w-full py-6 px-8 sm:px-12 flex justify-between items-center text-xs tracking-widest text-zinc-500 uppercase z-10">
        <span>Portfolio &copy; {new Date().getFullYear()}</span>
      </footer>
    </div>
  );
}
