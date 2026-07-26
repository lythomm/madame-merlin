import Navbar from "../components/Navbar";

export default function Galerie() {
  return (
    <div className="relative min-h-screen w-full bg-[#0a0a0a] text-[#f0e4d1] flex flex-col justify-between overflow-hidden selection:bg-[#fa9764] selection:text-black">
      <Navbar />

      <main className="flex-1 flex flex-col items-center justify-center text-center px-4 z-10">
        <h1 className="text-4xl sm:text-6xl font-normal tracking-wider text-[#fa9764] uppercase mb-4">
          Galerie
        </h1>
        <p className="font-serif italic text-lg sm:text-xl text-zinc-400">
          Portfolio de créations à venir...
        </p>
      </main>

      <footer className="w-full py-6 px-8 sm:px-12 flex justify-between items-center text-xs tracking-widest text-zinc-500 uppercase z-10">
        <span>Portfolio &copy; {new Date().getFullYear()}</span>
      </footer>
    </div>
  );
}
