"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import { navLinks } from "@/data/navigation";
import {
  SpotifyIcon,
  YouTubeIcon,
  InstagramIcon,
  FacebookIcon,
} from "@/components/ui/SocialIcons";

export default function Nav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="sticky top-0 z-50 bg-abyss backdrop-blur-md border-b border-steel/20">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">

        {/* Logo */}
        <Link
          href="/"
          aria-label="Inicio"
          onClick={closeMenu}
        >
          <Image
            src="/images/logo.jpeg"
            alt="Logo"
            width={48}
            height={48}
            className="rounded-full opacity-90 hover:opacity-100 transition-opacity"
          />
        </Link>

        {/* Navegación Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const active =
              link.href.startsWith("#")
                ? false
                : pathname === link.href;

            return (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className={`text-[11px] font-medium tracking-[0.18em] uppercase transition-all duration-300 pb-1 ${
                    active
                      ? "text-white border-b border-blood"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Redes Desktop */}
        <div className="hidden md:flex items-center gap-4 text-zinc-400">
          <Link
            href="https://open.spotify.com/intl-es/artist/1U9e2LH1QYtoZIfb0u5m1K?si=4us6f1VCRGWWi6oJ1JTJ5g"
            aria-label="Spotify"
            className="hover:text-white transition-colors"
          >
            <SpotifyIcon />
          </Link>

          <Link
            href="https://www.youtube.com/@elasilodelabestia"
            aria-label="YouTube"
            className="hover:text-white transition-colors"
          >
            <YouTubeIcon />
          </Link>

          <Link
            href="https://instagram.com/elasilodelabestia"
            aria-label="Instagram"
            className="hover:text-white transition-colors"
          >
            <InstagramIcon />
          </Link>

          <Link
            href="https://facebook.com/elasilodelabestia"
            aria-label="Facebook"
            className="hover:text-white transition-colors"
          >
            <FacebookIcon />
          </Link>
        </div>

        {/* Botón hamburguesa */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white"
          aria-label="Abrir menú"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-7 h-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>
            {/* Menú Mobile */}
      {menuOpen && (
        <div className="md:hidden border-t border-steel/20 bg-abyss/95 backdrop-blur-md">
          <ul className="flex flex-col py-4">

            {navLinks.map((link) => {
              const active =
                link.href.startsWith("#")
                  ? false
                  : pathname === link.href;

              return (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    onClick={closeMenu}
                    className={`block px-8 py-4 text-sm uppercase tracking-[0.18em] transition-colors duration-300 ${
                      active
                        ? "text-white border-l-2 border-blood"
                        : "text-zinc-400 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}

          </ul>

          {/* Redes Mobile */}
          <div className="flex items-center justify-center gap-6 py-6 border-t border-steel/20 text-zinc-400">

            <Link
              href="https://open.spotify.com/intl-es/artist/1U9e2LH1QYtoZIfb0u5m1K?si=4us6f1VCRGWWi6oJ1JTJ5g"
              target="_blank"
              aria-label="Spotify"
              className="hover:text-white transition-colors"
            >
              <SpotifyIcon />
            </Link>

            <Link
              href="https://www.youtube.com/@elasilodelabestia"
              target="_blank"
              aria-label="YouTube"
              className="hover:text-white transition-colors"
            >
              <YouTubeIcon />
            </Link>

            <Link
              href="https://instagram.com/elasilodelabestia"
              target="_blank"
              aria-label="Instagram"
              className="hover:text-white transition-colors"
            >
              <InstagramIcon />
            </Link>

            <Link
              href="https://facebook.com/elasilodelabestia"
              target="_blank"
              aria-label="Facebook"
              className="hover:text-white transition-colors"
            >
              <FacebookIcon />
            </Link>

          </div>
        </div>
      )}
    </nav>
  );
}

