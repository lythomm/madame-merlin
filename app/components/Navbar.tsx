"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LEFT_LINKS = [
  { href: "/apropos", label: "à propos" },
  { href: "/galerie", label: "galerie" },
];

const RIGHT_LINKS = [
  { href: "/tarifs", label: "tarifs" },
  { href: "/contact", label: "contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  const renderLink = ({ href, label }: { href: string; label: string }) => {
    const isActive = pathname === href;
    return (
      <Link
        key={href}
        href={href}
        className={`transition-colors hover:text-[#fa9764] ${isActive ? "text-[#f0e4d1]" : "text-[#f0e4d1]/60"
          }`}
      >
        {label}
      </Link>
    );
  };

  return (
    <header className="sticky top-0 w-full py-4 px-8 sm:px-16 flex items-center justify-between z-50 text-sm lowercase tracking-wider bg-black">
      {/* Left Navigation Links */}
      <nav className="flex items-center gap-8 sm:gap-20 flex-1 justify-start text-3xl font-serif">
        {LEFT_LINKS.map(renderLink)}
      </nav>

      {/* Centered Logo Image */}
      <div className="flex-1 flex justify-center">
        <Link href="/" className="hover:opacity-90 transition-opacity">
          <Image
            src="/logo.png"
            alt="Madame Merlin Logo"
            width={64}
            height={64}
            className="w-14 h-14 sm:w-16 sm:h-16 object-contain"
            priority
          />
        </Link>
      </div>

      {/* Right Navigation Links */}
      <nav className="flex items-center gap-8 sm:gap-20 flex-1 justify-end text-3xl font-serif">
        {RIGHT_LINKS.map(renderLink)}
      </nav>
    </header>
  );
}
