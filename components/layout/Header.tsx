"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "Features", href: "/#features" },
  { label: "Solutions", href: "/#solutions" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Roadmap", href: "/#cta" },
  { label: "Contacts", href: "/#contact" },
];

const socialIcons = [
  { src: "/icons/github.svg", alt: "GitHub" },
  { src: "/icons/discord.svg", alt: "Discord" },
  { src: "/icons/snoo.svg", alt: "Reddit" },
  { src: "/icons/twitter.svg", alt: "Twitter" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full">
      <div className="flex items-center justify-between">
        <Link href="/" className="font-heading text-2xl text-white">
          NeuroScale
        </Link>
        <nav className="hidden lg:block">
          <ul className="flex items-center gap-10">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-base font-body text-white/80 hover:text-white transition"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-4">
            {socialIcons.map((icon) => (
              <Link
                key={icon.alt}
                href="#"
                aria-label={icon.alt}
                className="opacity-80 hover:opacity-100 transition"
              >
                <Image src={icon.src} alt={icon.alt} width={18} height={18} />
              </Link>
            ))}
          </div>
          <Image
            className="lg:hidden inline-flex items-center justify-center"
            onClick={() => setOpen((v) => !v)}
            width={24}
            height={24}
            src="/icons/burger-menu.svg"
            alt="Burger-Menu"
          />
        </div>
      </div>

      {open && (
        <div className="lg:hidden mt-4 rounded-2xl border border-white/10 bg-black/60 backdrop-blur p-4">
          <nav>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="block py-2 text-white/85 hover:text-white transition"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-4 flex items-center gap-4 md:hidden">
            {socialIcons.map((icon) => (
              <Link
                key={icon.alt}
                href="#"
                aria-label={icon.alt}
                className="opacity-80 hover:opacity-100 transition"
              >
                <Image src={icon.src} alt={icon.alt} width={18} height={18} />
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
