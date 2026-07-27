"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { href: "/apropos", label: "à propos" },
  { href: "/galerie", label: "galerie" },
  { href: "/tarifs", label: "tarifs" },
  { href: "/contact", label: "contact" },
];

const LEFT_LINKS = NAV_LINKS.slice(0, 2);
const RIGHT_LINKS = NAV_LINKS.slice(2);

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const renderLink = ({ href, label }: { href: string; label: string }, onClick?: () => void) => {
    const isActive = pathname === href;
    return (
      <Link
        key={href}
        href={href}
        onClick={onClick}
        className={`transition-colors hover:text-[#fa9764] ${isActive ? "text-[#f0e4d1]" : "text-[#f0e4d1]/60"
          }`}
      >
        {label}
      </Link>
    );
  };

  return (
    <header className="sticky top-0 w-full py-4 px-6 md:px-16 flex items-center justify-between z-50 text-sm lowercase tracking-wider bg-black">
      {/* Mobile Bar: Logo Left, Menu Icon Right */}
      <div className="flex md:hidden items-center justify-between w-full">
        <Link href="/" className="hover:opacity-90 transition-opacity">
          <Image
            src="/logo.png"
            alt="Madame Merlin Logo"
            width={56}
            height={56}
            className="w-12 h-12 object-contain"
            priority
          />
        </Link>
        <button
          onClick={() => setIsOpen(true)}
          className="text-[#f0e4d1] p-2 focus:outline-none hover:text-[#fa9764] transition-colors"
          aria-label="Ouvrir le menu"
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center justify-between w-full">
        <nav className="flex items-center gap-8 lg:gap-20 flex-1 justify-start text-2xl lg:text-3xl font-serif">
          {LEFT_LINKS.map((link) => renderLink(link))}
        </nav>

        <div className="flex-1 flex justify-center">
          <Link href="/" className="hover:opacity-90 transition-opacity">
            <Image
              src="/logo.png"
              alt="Madame Merlin Logo"
              width={64}
              height={64}
              className="w-14 h-14 lg:w-16 lg:h-16 object-contain"
              priority
            />
          </Link>
        </div>

        <nav className="flex items-center gap-8 lg:gap-20 flex-1 justify-end text-2xl lg:text-3xl font-serif">
          {RIGHT_LINKS.map((link) => renderLink(link))}
        </nav>
      </div>

      {/* Mobile Full Screen Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-[#fa9764] text-black z-50 flex flex-col justify-between p-6 md:hidden">
          <div className="flex items-center justify-between w-full">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="hover:opacity-90 transition-opacity"
            >
              <Image
                src="/logo.png"
                alt="Madame Merlin Logo"
                width={56}
                height={56}
                className="w-12 h-12 object-contain brightness-0"
                priority
              />
            </Link>
            <button
              onClick={() => setIsOpen(false)}
              className="text-black p-2 focus:outline-none hover:opacity-70 transition-opacity"
              aria-label="Fermer le menu"
            >
              <X size={32} />
            </button>
          </div>

          <nav className="flex flex-col items-center justify-center space-y-8 my-auto font-serif text-5xl lowercase tracking-wider">
            {NAV_LINKS.map(({ href, label }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setIsOpen(false)}
                  className={`transition-colors hover:text-black ${isActive ? "text-black font-normal underline underline-offset-8" : "text-black/70"
                    }`}
                >
                  {label}
                </Link>
              );
            })}
          </nav>

          <div className="h-12" />
        </div>
      )}
    </header>
  );
}
