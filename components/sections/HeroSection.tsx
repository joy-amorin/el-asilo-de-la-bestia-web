import Image from "next/image";
import Link from "next/link";

// Social icons as inline SVGs to avoid external dependencies
const SpotifyIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
  </svg>
);

const YouTubeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" />
  </svg>
);

const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const ArrowRight = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

const navLinks = [
  { label: "LA BANDA", href: "#" },
  { label: "OBRAS", href: "#" },
  { label: "FECHAS", href: "#" },
  { label: "GALERÍA", href: "#" },
  { label: "MERCH", href: "#" },
  { label: "CONTACTO", href: "#" },
];

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen bg-black overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-image.png"
          alt="El Asilo de la Bestia"
          fill
          priority
          className="object-cover object-center opacity-90"
        />
        {/* Gradient overlay — darkens left side for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />
      </div>

      {/* ── NAVBAR ── */}
      <nav className="relative z-20 flex items-center justify-between px-8 py-5">
        {/* Logo mark (waveform icon) */}
        <Link href="/" aria-label="Inicio">
          <Image
            src="/images/logo.jpeg"
            alt="Logo"
            width={48}
            height={36}
            className="opacity-90 hover:opacity-100 transition-opacity"
          />
        </Link>

        {/* Nav links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className={`text-[11px] tracking-[0.18em] font-medium transition-colors
                  ${i === 0
                    ? "text-white border-b border-red-600 pb-0.5"
                    : "text-zinc-400 hover:text-white"
                  }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Social icons */}
        <div className="hidden md:flex items-center gap-4 text-zinc-400">
          <Link href="#" aria-label="Spotify" className="hover:text-white transition-colors">
            <SpotifyIcon />
          </Link>
          <Link href="#" aria-label="YouTube" className="hover:text-white transition-colors">
            <YouTubeIcon />
          </Link>
          <Link href="#" aria-label="Instagram" className="hover:text-white transition-colors">
            <InstagramIcon />
          </Link>
          <Link href="#" aria-label="Facebook" className="hover:text-white transition-colors">
            <FacebookIcon />
          </Link>
        </div>
      </nav>

      {/* ── HERO CONTENT ── */}
      <div className="relative z-10 flex flex-col justify-between min-h-[calc(100vh-80px)] px-8 pb-8">
        {/* Main content area */}
        <div className="flex-1 flex items-center">
          <div className="max-w-xl mt-4">
            {/* Wings + title lockup */}
            <div className="relative mb-6">
              {/* Wings image (decorative, sits behind the title) 
              <div className="absolute -top-8 -left-6 w-[420px] h-[420px] pointer-events-none select-none">
                <Image
                  src="/images/logo.svg"
                  alt=""
                  fill
                  className="object-contain opacity-70"
                />
              </div>

              {/* Title */}
              <h1
                className="relative z-10 font-black uppercase leading-none tracking-tight text-[clamp(3.5rem,9vw,7rem)]"
                style={{
                  fontFamily: "'Anton', 'Impact', sans-serif",
                  color: "#d4c9b0",
                  textShadow: "2px 4px 24px rgba(0,0,0,0.8), 0 0 60px rgba(0,0,0,0.6)",
                  letterSpacing: "-0.01em",
                }}
              >
               
                <br />
               
                <br />
               
                <br />
                
              </h1>
            </div>

            {/* Tagline */}
            <p className="text-[11px] tracking-[0.25em] text-zinc-300 uppercase mb-2">
              ENTRE EL ORDEN Y EL{" "}
              <span className="text-red-600 font-semibold">INSTINTO.</span>
            </p>

            {/* Red dash divider */}
            <div className="w-8 h-0.5 bg-red-600 mb-8" />

            {/* CTAs */}
            <div className="flex flex-col gap-3 max-w-xs">
              <Link
                href="#"
                className="flex items-center justify-between px-6 py-4 bg-[#d4c9b0] text-black text-[11px] tracking-[0.2em] font-bold uppercase hover:bg-white transition-colors group"
              >
                ESCUCHAR MATERIAL
                <span className="text-red-600 group-hover:translate-x-1 transition-transform">
                  <ArrowRight />
                </span>
              </Link>
              <Link
                href="#"
                className="flex items-center justify-between px-6 py-4 border border-zinc-600 text-white text-[11px] tracking-[0.2em] font-bold uppercase hover:border-white transition-colors group"
              >
                PRÓXIMAS FECHAS
                <span className="text-red-600 group-hover:translate-x-1 transition-transform">
                  <ArrowRight />
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* ── BOTTOM QUOTE (right side) ── */}
        <div className="absolute bottom-20 right-8 text-right hidden lg:block">
          <p className="text-[10px] tracking-[0.2em] text-zinc-500 uppercase">HOMO HOMINI</p>
          <p className="text-[10px] tracking-[0.2em] text-red-600 uppercase font-semibold">LUPUS</p>
          <div className="w-6 h-px bg-zinc-600 ml-auto my-3" />
          <p className="text-[10px] tracking-[0.2em] text-zinc-500 uppercase">THOMAS HOBBES</p>
        </div>

        {/* ── FOOTER BAR ── */}
        <footer className="relative z-10 flex items-center justify-between pt-6 border-t border-zinc-800/60">
          <div className="flex items-center gap-6 text-[10px] tracking-[0.2em] text-zinc-500 uppercase">
            <span>MONTEVIDEO, URUGUAY</span>
            <span className="text-zinc-700">———</span>
            <span>DESDE MMXII</span>
            <div className="text-right">
              <p>34.9011° S</p>
              <p>56.1645° W</p>
            </div>
          </div>

          {/* Hamburger / menu icon (right) */}
          <button
            aria-label="Menú"
            className="flex flex-col gap-1 opacity-60 hover:opacity-100 transition-opacity"
          >
            <span className="block w-5 h-px bg-white" />
            <span className="block w-5 h-px bg-white" />
            <span className="block w-3 h-px bg-white" />
          </button>
        </footer>
      </div>
    </section>
  );
}