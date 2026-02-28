"use client";

import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contacts", href: "#contact" },
  { label: "Roadmap", href: "#" },
  { label: "Blog", href: "#" },
];

const socialIcons = [
  { src: "/icons/github.svg", alt: "Github" },
  { src: "/icons/discord.svg", alt: "Discord" },
  { src: "/icons/snoo.svg", alt: "Snoo" },
  { src: "/icons/twitter.svg", alt: "Twitter" },
];

export default function Header() {
  return (
    <header className="flex items-center justify-between w-full">
      <h1 className="font-heading text-2xl text-white">NeuroScale</h1>

      <nav>
        <ul className="flex items-center gap-10">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link href={link.href} className="text-lg font-body text-white">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="flex items-center gap-4">
        {socialIcons.map((icon) => (
          <>
            <Link href="#" className="opacity-80 hover:opacity-100 transition">
              <Image
                key={icon.alt}
                src={icon.src}
                alt={icon.alt}
                width={18}
                height={14}
              />
            </Link>
          </>
        ))}
      </div>
    </header>
  );
}
