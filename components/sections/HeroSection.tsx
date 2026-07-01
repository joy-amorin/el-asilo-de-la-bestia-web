import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@/components/ui/ArrowRight";
import Nav from "@/components/layout/Nav";



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
      <Nav />

      
      {/* ── HERO CONTENT ── */}
      <div className="relative z-10 flex flex-col justify-between min-h-[calc(100vh-80px)] px-8 pb-8">
        {/* Main content area */}
        <div className="flex-1 flex items-center">
          <div className="max-w-xl mt-4">
            {/* Wings + title lockup */}
            <div className="relative mb-6">es solo

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
        </footer>
      </div>
    </section>
  );
}