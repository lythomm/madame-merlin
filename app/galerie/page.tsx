import fs from "fs";
import path from "path";
import Image from "next/image";
import Navbar from "../components/Navbar";

export default function Galerie() {
  const galleryDir = path.join(process.cwd(), "public/images/galerie");
  let images: string[] = [];

  try {
    const files = fs.readdirSync(galleryDir);
    const rawImages = files
      .filter((file) => file.endsWith(".jpg") || file.endsWith(".png") || file.endsWith(".webp"))
      .map((file) => `/images/galerie/${file}`);

    // Interleave images so slides from the same post are well separated
    images = [...rawImages].sort((a, b) => {
      const hashA = [...a].reduce((acc, char) => acc + char.charCodeAt(0), 0);
      const hashB = [...b].reduce((acc, char) => acc + char.charCodeAt(0), 0);
      return (hashA * 7) % 50 - (hashB * 7) % 50;
    });
  } catch {
    images = [];
  }

  // Pre-assign varied aspect ratios for dynamic masonry layout
  const aspectRatios = [
    "aspect-[3/4]",
    "aspect-square",
    "aspect-[2/3]",
    "aspect-[4/3]",
    "aspect-[4/5]",
  ];

  return (
    <div className="relative min-h-screen w-full text-[#f0e4d1] flex flex-col justify-between selection:bg-primary selection:text-black">
      <Navbar />

      <main className="flex-1 px-6 sm:px-12 py-20 z-10 w-full max-w-[1800px] mx-auto">
        <div className="flex flex-col items-center mb-16 text-center">
          <h1 className="text-5xl sm:text-8xl uppercase tracking-wider text-primary mb-4">
            Galerie de Créations
          </h1>
          <p className="font-serif italic text-base sm:text-lg text-[#f0e4d1] max-w-xl">
            Découvrez l’ensemble des travaux signés Madame Merlin.
          </p>
        </div>

        {/* Dynamic Full Masonry Grid */}
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-2 space-y-2">
          {images.map((src, index) => {
            const aspect = aspectRatios[index % aspectRatios.length];
            return (
              <div
                key={index}
                className={`relative w-full ${aspect} overflow-hidden break-inside-avoid`}
              >
                <Image
                  src={src}
                  alt={`Création Madame Merlin ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 20vw"
                />
              </div>
            );
          })}
        </div>
      </main>

      <footer className="w-full py-6 px-8 sm:px-12 flex justify-between items-center text-xs tracking-widest text-zinc-500 uppercase z-10 border-t border-[#f0e4d1]/10">
        <span>Madame Merlin &copy; {new Date().getFullYear()}</span>
      </footer>
    </div>
  );
}
